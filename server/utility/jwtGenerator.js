import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default function jwtGenerator(user_id) {
  const payload = {
    user: user_id
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}
