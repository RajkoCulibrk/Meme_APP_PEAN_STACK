import bcrypt from "bcrypt";
import validator from "express-validator";
const { check, validationResult } = validator;
import pool from "../db/index.js";
import ApiError from "../utility/ApiError.js";
import jwtGenerator from "../utility/jwtGenerator.js";

export const registerController = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest(errors.errors[0].msg));
  }
  try {
    const { name, email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length !== 0) {
      return next(ApiError.badRequest("User already exists"));
    }
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password)  VALUES ($1 ,$2, $3) returning *",
      [name, email, bcryptPassword]
    );

    const token = jwtGenerator(newUser.rows[0].user_id);
    res.status(201).json({ data: { token } });
  } catch (err) {
    return next(ApiError.internal(err.message));
  }
};

export const loginController = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest(errors.errors[0].msg));
  }
  try {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);
    if (user.rows.length === 0) {
      return next(ApiError.notAuthenticated("Password or email is incorect"));
    }
    const confirmPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    if (!confirmPassword) {
      return next(ApiError.notAuthenticated("Password or email is incorect"));
    }
    const token = jwtGenerator(user.rows[0].user_id);
    res.status(200).json({ data: { token } });
  } catch (err) {
    return next(ApiError.internal(err.message));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userId = req.user;
    const user = await pool.query(
      "SELECT user_name ,user_email,user_id FROM users WHERE user_id = $1",
      [userId]
    );
    res.status(200).json({ data: { user: user.rows[0] } });
  } catch (err) {
    return next(ApiError.notAuthenticated("You are not authorized"));
  }
};
