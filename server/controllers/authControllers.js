import bcrypt from "bcrypt";
import validator from "express-validator";
const { check, validationResult } = validator;
import pool from "../db/index.js";
import ApiError from "../utility/ApiError.js";
import jwtGenerator from "../utility/jwtGenerator.js";
/* register a user */
export const registerController = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.badRequest(errors.errors[0].msg));
  }
  try {
    /* check if user already exists */
    const { name, email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);

    if (user.rows.length !== 0) {
      return next(ApiError.badRequest("User already exists"));
    }
    /* hash the password */
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);
    /* create a  new user in the database with hashed password */
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password)  VALUES ($1 ,$2, $3) returning *",
      [name, email, bcryptPassword]
    );
    /* generate a jwt token and send it to user */
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
    /* finda user with such credentials */
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);
    /* if no such user send error password or email incorect */
    if (user.rows.length === 0) {
      return next(ApiError.notAuthenticated("Password or email is incorect"));
    }
    /* compare provided password and password from the db */
    const confirmPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    /* if no match send error */
    if (!confirmPassword) {
      return next(ApiError.notAuthenticated("Password or email is incorect"));
    }
    /* if everything is ok generate a token and send it to client */
    const token = jwtGenerator(user.rows[0].user_id);
    res.status(200).json({ data: { token } });
  } catch (err) {
    return next(ApiError.internal(err.message));
  }
};
/* get the user from the db */
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
