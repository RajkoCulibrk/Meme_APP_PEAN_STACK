import cloudinary from "cloudinary";
const v2 = cloudinary.v2;
import dotenv from "dotenv";
dotenv.config();
/* cloudinary configuration */
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default v2;
