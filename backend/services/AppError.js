class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = statusCode < 500 ? "fail" : "error";
        this.isOperatuional = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
