import ApiError from "../utility/ApiError.js";

export default (err, req, res, next) => {
  /* check if the error is an instance of APi error send the message provided by the api error to cliend if not send a generic something wen wrong message */
  if (err instanceof ApiError) {
    return res.status(err.code).json({ msg: err.message });
  }
  res.status(500).json({ msg: "Something went wrong" });
};
