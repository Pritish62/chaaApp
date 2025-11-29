class AppError extends Error {
  constructor(message, statusCode) {
    super(message);          // pass message to parent Error
    this.statusCode = statusCode;
  }
}
module.exports = AppError;