import express from "express";
import authorize from "../middleware/authorization.js";
const router = express.Router();
import * as controllers from "../controllers/postsControllers.js";
import validator from "express-validator";
const { check } = validator;
import upload from "../middleware/multer.js";

router.post(
  "/",
  [
    authorize,
    upload.single("image"),
    check("title", "You must provide a title").notEmpty(),
    check()
      .custom((value, { req }) => {
        if (!req.file) {
          return false;
        } else {
          return true;
        }
      })
      .withMessage("Please provide an image")
  ],
  controllers.addPost
);
router.get("/", controllers.getPosts);
router.get("/:id", controllers.getSinglePost);
router.get("/liked", [authorize], controllers.postsILike);
router.delete("/:id", [authorize], controllers.deletePost);
router.post(
  "/likedislike/:id",
  [
    authorize,
    check(
      "action",
      "You must provide action of that equals true, false, delete in string form"
    ).notEmpty()
  ],
  controllers.likeDislike
);
router.get("/likedislike/:id", [authorize], controllers.checkLikeDislikeStatus);

export default router;
