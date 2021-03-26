import express from "express";
import authorize from "../middleware/authorization.js";
const router = express.Router();
import * as controllers from "../controllers/postsControllers.js";
import validator from "express-validator";
const { check } = validator;
import upload from "../middleware/multer.js";
import {
  deleteComment,
  getComments,
  getSingleComment,
  getSubcomments,
  likeDislikeComment,
  postComment,
  checkLikeDislikeStatus
} from "../controllers/commentsControllers.js";

router.post("/", [authorize], postComment);
router.get("/post/:id", getComments);
router.get("/:id", getSingleComment);
router.delete("/:id", [authorize], deleteComment);
router.get("/subcomments/:id", getSubcomments);
router.post("/likedislike/:id", [authorize], likeDislikeComment);
router.get("/likedislike/:id", [authorize], checkLikeDislikeStatus);

export default router;
