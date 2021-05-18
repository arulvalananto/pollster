const AppError = require("../services/AppError");

module.exports = (req, res, next) => {
    if (!req.user) {
        return next(new AppError("You must log in!", 401));
    }
    next();
};
