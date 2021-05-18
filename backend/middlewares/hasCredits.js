const AppError = require("../services/AppError");

module.exports = (req, res, next) => {

    if (req.user.credits < 1) {
        return next(
            new AppError(
                "You don't have enough credit to create a survey. Please recharge some credits",
                403
            )
        );
    }
    next();
};
