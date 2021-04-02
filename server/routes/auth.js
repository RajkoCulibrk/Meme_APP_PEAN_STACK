import express from "express";

import validator from "express-validator";
const { check, validationResult } = validator;
import * as authControllers from "../controllers/authControllers.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "please provide a name").notEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "Please include a password that is at least 6 characters in length"
    )
      .notEmpty()
      .isLength({ min: 6, max: 20 })
  ],
  authControllers.registerController
);

router.post(
  "/login",
  [
    check("email", "Please provide an email").notEmpty(),
    check("password", "Please enter your password").notEmpty()
  ],
  authControllers.loginController
);

router.get("/user", [authorization], authControllers.getUser);

export default router;
