import pool from "../db/index.js";
import cloudinary from "../utility/cloudinary.js";
import validator from "express-validator";
import ApiError from "../utility/ApiError.js";

const { validationResult } = validator;
/* add new post */
export const addPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest(errors.errors[0].msg));
  }
  try {
    const user = req.user;
    const title = req.body.title;
    /* uplad the provided image to cloudinary take the  public_id, secure_url so we can store it in the db*/
    const result = await cloudinary.uploader.upload(req.file.path);
    const { public_id, secure_url } = result;
    /* insert a new post with data provided from the suer and the response from the cludinary service */
    const post = await pool.query(
      "INSERT INTO POSTS (title, image_public_url, image_public_id, user_id ) VALUES ($1, $2, $3, $4) returning *",
      [title, secure_url, public_id, user]
    );
    res.status(201).json({ data: { post: post.rows[0] } });
  } catch (err) {
    next(ApiError.internal(err.message));
  }
};
/* get all posts */
export const getPosts = async (req, res, next) => {
  try {
    /* variable like means we want to find a post with the title similar to the value of like see the sql string  */
    let { page, order_by, order, like } = req.query;
    /* if like does not exist we set it to '' */
    if (!like) {
      like = "";
    }
    /* send back 3 posts in every request or per page */
    const per_page = 3;
    /* offset is initialy set to 0 */
    let offset = 0;
    /* variable o refers to order that can be descedning or ascending */
    let o;
    /* if order equals 1 we set the o to asc meaning we want our results in the ascending value */
    if (order == 1) {
      o = "asc";
    }
    if (order == 2) {
      o = "desc";
    }
    /* array of aproved values for sorting the retrieved posts by to prevent the sql injection since i do not know of other way to perform this with node psql */
    let approved = ["comments", "likes", "dislikes", "created_at"];
    /* if our order_by parameter send by the user is not in this array send back the following error */
    if (!approved.includes(order_by)) {
      return next(ApiError.badRequest("Bad order by parameter"));
    }

    if (page > 1) {
      /* if the page is equal to 1 the offset is set to 0 but if its larger than that we calculate its value in the following way */
      offset = per_page * (page - 1);
    }

    const posts = await pool.query(
      `SELECT * FROM posts_view where LOWER (title) like LOWER ($1)  ORDER BY  ${order_by} ${o} OFFSET $2 LIMIT 3`,
      [`%${like}%`, offset]
    );

    res.status(200).json({ data: { posts: posts.rows } });
  } catch (err) {
    next(ApiError.internal(err.message));
  }
};

/* get single post based on its id */
export const getSinglePost = async (req, res, next) => {
  try {
    const post_id = req.params.id;
    /* check if the post exist if not ser 404 error */
    const post = await pool.query(
      `SELECT * FROM posts_view WHERE post_id = $1`,
      [post_id]
    );
    if (post.rows.length === 0) {
      return next(ApiError.notFound("This post does not exist"));
    }

    res.status(200).json({ data: { post: post.rows[0] } });
  } catch (err) {
    next(ApiError.internal("Error at get single post"));
  }
};

/* get the liked post of the logged in user based on his / hers id */
export const postsILike = async (req, res, next) => {
  try {
    const { user } = req;
    const likedPosts = await pool.query(
      `select p.post_id,p.post_id,p.image_public_url,p.user_id,p.created_at,p.likes,p.dislikes,p.author,p.comments from 
      (
        SELECT * FROM likesdislikes where user_id = $1 AND value = true
      )
      as l
      left join posts_view as p
      on l.post_id = p.post_id 
    `,
      [user]
    );
    res.status(200).json({ data: { posts: likedPosts.rows } });
  } catch (err) {
    next(ApiError.internal("Error at get my liked posts"));
  }
};

/* get posts created by the logged in user based on his / hers id */
export const getMyPosts = async (req, res, next) => {
  try {
    const { user } = req;
    const likedPosts = await pool.query(
      `SELECT * FROM posts_view WHERE user_id = $1 ORDER BY created_at DESC
    `,
      [user]
    );
    res.status(200).json({ data: { posts: likedPosts.rows } });
  } catch (err) {
    next(ApiError.internal("Error at get my posts"));
  }
};

/* delete a post based on its id */
export const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user_id = req.user;
    /* check if the post exists if not send 404 error */
    const postToBeDeleted = await pool.query(
      "SELECT * FROM posts WHERE post_id = $1",
      [id]
    );
    if (postToBeDeleted.rows.length == 0) {
      return next(ApiError.notFound("Post not found"));
    }
    /* if the author of the post is not the same as the logged in user send error unauthorized */
    if (postToBeDeleted.rows[0].user_id !== user_id) {
      return next(ApiError.notAuthorized("You are unauthorized"));
    }
    /* delete the image of the post based on the  image_public_id field from the posts table in db*/
    await cloudinary.uploader.destroy(postToBeDeleted.rows[0].image_public_id);
    /* delte the post from the db */
    await pool.query("DELETE FROM posts WHERE post_id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    next(ApiError.internal(err.message));
  }
};

/* like or dislike a post */
export const likeDislike = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest(errors.errors[0].msg));
  }
  try {
    const post_id = req.params.id;
    const user_id = req.user;
    /* action can be true or false */
    const { action } = req.body;
    const exists = await pool.query(
      "SELECT * FROM likesdislikes WHERE user_id = $1 AND post_id = $2",
      [user_id, post_id]
    );
    if (exists.rows.length > 0) {
      /* if we have a value in the db for the like/dislike and its value equals the value of action we perform a delete comman in the db and send the response status:2 which means the user nor likes or dislikes a post */
      if (exists.rows[0].value == action) {
        await pool.query(
          "DELETE FROM likesdislikes WHERE user_id= $1 AND post_id = $2",
          [user_id, post_id]
        );
        return res.status(202).json({ data: { status: 2 } });
      }
    }
    /* if have nothing in the database for like/dislike field we perform insert action to create a new value for like/dislike which value equals to the value of action. If we have something in the database for like/dislike and its value is oposite value of action we perform an update and set the value of like/dislike to value of action */
    const result = await pool.query(
      "INSERT INTO likesdislikes (post_id, user_id, value) VALUES ($1, $2 ,$3) ON CONFLICT (post_id, user_id) DO UPDATE SET value = EXCLUDED.value RETURNING *",
      [post_id, user_id, action]
    );
    /* send the response with status field equal to 1 if post is liked or 0 if disliked */
    res.status(202).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("Internal error"));
  }
};

/* check if the user has liked or disliked a post  and send back a respomse with status fiel equal to 0 if disliked , 1 if liked and 2 if the user has nor liked or disliked a post*/
export const checkLikeDislikeStatus = async (req, res, next) => {
  try {
    const post_id = req.params.id;
    const user_id = req.user;
    const result = await pool.query(
      "SELECT * FROM  likesdislikes WHERE user_id = $1 AND post_id = $2",
      [user_id, post_id]
    );
    if (result.rows.length === 0) {
      return res.status(200).json({ data: { status: 2 } });
    }
    return res.status(200).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("Error at check liked lisliked"));
  }
};
