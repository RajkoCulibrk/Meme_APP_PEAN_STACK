import validator from "express-validator";
const { check, validationResult } = validator;
import pool from "../db/index.js";
import ApiError from "../utility/ApiError.js";

/* post a new comment */
export const postComment = async (req, res, next) => {
  try {
    const { body, post_id, reply_to } = req.body;

    const user_id = req.user;
    if (reply_to) {
      /* if there is reply_to provided in the request insert a comment with a reply to field set to
      the reply_to value must be an id of some other comment to which we are replying */
      const response = await pool.query(
        "INSERT INTO comments (post_id, user_id, body, reply_to) VALUES ($1 , $2 , $3,$4)  RETURNING *",
        [post_id, user_id, body, reply_to]
      );
      /* send back inserted comment */
      const commentToSendBack = await pool.query(
        "SELECT * FROM comments_view WHERE comment_id = $1",
        [response.rows[0].comment_id]
      );

      res.status(201).json({ data: { comment: commentToSendBack.rows[0] } });
    } else {
      /* if reply to is not provided its value will be set to null by default as that is the default setting in the db */
      const response = await pool.query(
        "INSERT INTO comments (post_id, user_id, body) VALUES ($1 , $2 , $3)  RETURNING *",
        [post_id, user_id, body]
      );

      const commentToSendBack = await pool.query(
        "SELECT * FROM comments_view WHERE comment_id = $1",
        [response.rows[0].comment_id]
      );

      res.status(201).json({ data: { comment: commentToSendBack.rows[0] } });
    }
  } catch (err) {
    next(ApiError.internal("Error at post comment"));
  }
};

/* like or dislike a comment */
export const likeDislikeComment = async (req, res, next) => {
  /*     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.badRequest(errors.errors[0].msg));
    } */
  try {
    const comment_id = req.params.id;
    const user_id = req.user;
    const { action } = req.body;
    /* action can be true or false */
    /* perform a check if the like or dislike exists in the db */
    const exists = await pool.query(
      "SELECT * FROM commentslikesdislikes WHERE user_id = $1 AND comment_id = $2",
      [user_id, comment_id]
    );
    if (exists.rows.length > 0) {
      /* the value in the db representing a like or dislike can be true or false if action == value in the db we will perform a delete action tho remove the like or dislike from the db */
      if (exists.rows[0].value == action) {
        await pool.query(
          "DELETE FROM commentslikesdislikes WHERE user_id= $1 AND comment_id = $2",
          [user_id, comment_id]
        );
        return res.status(202).json({ data: { status: 2 } });
      }
    }
    /* if the like if the value does not exist in the db meaning the user has nor liked or disliked the comment insert new records in the db with the value of like/dislike set to value of action */
    /* also if user has liked the comment and action equals false we will perform an update and set the value to false and vice versa */
    const result = await pool.query(
      "INSERT INTO commentslikesdislikes (comment_id, user_id, value) VALUES ($1, $2 ,$3) ON CONFLICT (comment_id, user_id) DO UPDATE SET value = EXCLUDED.value RETURNING *",
      [comment_id, user_id, action]
    );

    res.status(202).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("Internal error"));
  }
};

/* get all comments of a single post based on the post id */
export const getComments = async (req, res, next) => {
  try {
    const post_id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM comments_view WHERE post_id = $1 ORDER BY created_at DESC",
      [post_id]
    );
    res.status(200).json({ data: { comments: result.rows } });
  } catch (err) {
    next(ApiError.internal("Error at get all coments"));
  }
};

/* get single comment based on the commment id */
export const getSingleComment = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const comment = await pool.query(
      "SELECT * FROM comments_view WHERE comment_id = $1 ",
      [comment_id]
    );
    if (comment.rows.length === 0) {
      next(ApiError.notFound("Comment not found"));
    }
    res.status(200).json({ data: { comment: comment.rows[0] } });
  } catch (err) {
    next(ApiError.internal("Internal server error"));
  }
};
/* get all comments of a comment (subcomments,replies to a comment) based on the comment id */
export const getSubcomments = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM comments_view WHERE reply_to = $1 ORDER BY created_at DESC",
      [comment_id]
    );
    res.status(200).json({ data: { comments: result.rows } });
  } catch (err) {
    next(ApiError.internal("Internal server error while getting subcomments"));
  }
};
/* delete a comment based on its id and user id */
export const deleteComment = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const user = req.user;
    /* check if comment exists if not send 404 */
    const commentToDelete = await pool.query(
      "SELECT * FROM comments_view WHERE comment_id = $1",
      [comment_id]
    );
    if (commentToDelete.rows.length === 0) {
      return next(ApiError.notFound("This comment does not exist"));
    }
    /* if the comment author is not equal to user send not authorized */
    if (commentToDelete.rows[0].user_id !== user) {
      return next(ApiError.notAuthorized("You are not authorized"));
    }
    await pool.query("DELETE FROM comments WHERE comment_id = $1", [
      comment_id
    ]);
    res.status(204).send();
  } catch (err) {
    next(
      ApiError.internal("Internal server error while trying to delete comment")
    );
  }
};

/* chack if a user has liked or disliked a comment based on the user_id an comment id returns status 0 for disliked , status 1 for liked and status 2 for neither one (user has nor liked or disliked the comment) */
export const checkLikeDislikeStatus = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const user_id = req.user;
    const result = await pool.query(
      "SELECT * FROM  commentslikesdislikes WHERE user_id = $1 AND comment_id = $2",
      [user_id, comment_id]
    );
    /* if we cannot find anything in the db that means the user has not liked or disliked the comment  */
    if (result.rows.length === 0) {
      return res.status(200).json({ data: { status: 2 } });
    }
    return res.status(200).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("error at check like dislike comment"));
  }
};
