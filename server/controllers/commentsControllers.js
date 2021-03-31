import validator from "express-validator";
const { check, validationResult } = validator;
import pool from "../db/index.js";
import ApiError from "../utility/ApiError.js";
export const postComment = async (req, res, next) => {
  try {
    const { body, post_id, reply_to } = req.body;

    const user_id = req.user;
    if (reply_to) {
      const response = await pool.query(
        "INSERT INTO comments (post_id, user_id, body, reply_to) VALUES ($1 , $2 , $3,$4)  RETURNING *",
        [post_id, user_id, body, reply_to]
      );

      const commentToSendBack = await pool.query(
        "SELECT * FROM comments_view WHERE comment_id = $1",
        [response.rows[0].comment_id]
      );

      res.status(201).json({ data: { comment: commentToSendBack.rows[0] } });
    } else {
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

export const likeDislikeComment = async (req, res, next) => {
  /*     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.badRequest(errors.errors[0].msg));
    } */
  try {
    const comment_id = req.params.id;
    const user_id = req.user;
    const { action } = req.body;
    const exists = await pool.query(
      "SELECT * FROM commentslikesdislikes WHERE user_id = $1 AND comment_id = $2",
      [user_id, comment_id]
    );
    if (exists.rows.length > 0) {
      if (exists.rows[0].value == action) {
        await pool.query(
          "DELETE FROM commentslikesdislikes WHERE user_id= $1 AND comment_id = $2",
          [user_id, comment_id]
        );
        return res.status(202).json({ data: { status: 2 } });
      }
    }
    /*     if (action === "delete") {
      await pool.query(
        "DELETE FROM commentslikesdislikes WHERE user_id= $1 AND comment_id = $2",
        [user_id, comment_id]
      );
      return res.status(202).json({ data: { status: 2 } });
    } */
    const result = await pool.query(
      "INSERT INTO commentslikesdislikes (comment_id, user_id, value) VALUES ($1, $2 ,$3) ON CONFLICT (comment_id, user_id) DO UPDATE SET value = EXCLUDED.value RETURNING *",
      [comment_id, user_id, action]
    );

    res.status(202).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("Internal error"));
  }
};

export const getComments = async (req, res, next) => {
  try {
    const post_id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM comments_view WHERE post_id = $1",
      [post_id]
    );
    res.status(200).json({ data: { comments: result.rows } });
  } catch (err) {
    next(ApiError.internal("Error at get all coments"));
  }
};

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

export const getSubcomments = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const result = await pool.query(
      "SELECT * FROM comments_view WHERE reply_to = $1 ORDER BY created_at",
      [comment_id]
    );
    res.status(200).json({ data: { comments: result.rows } });
  } catch (err) {
    next(ApiError.internal("Internal server error while getting subcomments"));
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const user = req.user;
    const commentToDelete = await pool.query(
      "SELECT * FROM comments_view WHERE comment_id = $1",
      [comment_id]
    );
    if (commentToDelete.rows.length === 0) {
      return next(ApiError.notFound("This comment does not exist"));
    }
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

export const checkLikeDislikeStatus = async (req, res, next) => {
  try {
    const comment_id = req.params.id;
    const user_id = req.user;
    const result = await pool.query(
      "SELECT * FROM  commentslikesdislikes WHERE user_id = $1 AND comment_id = $2",
      [user_id, comment_id]
    );
    if (result.rows.length === 0) {
      return res.status(200).json({ data: { status: 2 } });
    }
    return res.status(200).json({ data: { status: +result.rows[0].value } });
  } catch (err) {
    next(ApiError.internal("error at check like dislike comment"));
  }
};
