import ApiError from "../utility/ApiError.js";

export default (err, req, res, next) => {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.code).json({ msg: err.message });
  }
  res.status(500).json({ msg: "Something went wrong" });
};
