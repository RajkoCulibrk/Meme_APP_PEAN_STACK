import ApiError from "../utility/ApiError.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export default async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return next(ApiError.notAuthorized("Auth token is missing"));
    }
    let token;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7, authHeader.length);
    }

    await jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(ApiError.notAuthorized(err.message));
      }
      req.user = decoded.user;
      next();
    });
  } catch (err) {
    console.log(err.message);
    return next(
      ApiError.notAuthorized("Something went wrong with authentication")
    );
  }
};
