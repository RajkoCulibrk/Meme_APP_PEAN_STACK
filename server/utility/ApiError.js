/* class for handling errors  it takes the code and message in the constructor and has static methods for sending back messages with predefined codes */
export default class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static internal(msg) {
    return new ApiError(500, msg);
  }

  static notAuthorized(msg) {
    return new ApiError(403, msg);
  }
  static notFound(msg) {
    return new ApiError(404, msg);
  }

  static notAuthenticated(msg) {
    return new ApiError(401, msg);
  }
}
