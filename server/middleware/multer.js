import multer from "multer";
import path from "path";

export default multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    /* console.log(file, "ad"); */
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("Filte type is not supported"), false);
      return;
    }
    cb(null, true);
  }
});
