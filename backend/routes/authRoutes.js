const passport = require("passport");
const express = require("express");

const router = express.Router();
const User = require("../models/User");
// const AppError = require("../services/AppError");

// Create a middleware for each specific strategy.

router.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/auth/google" }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect("/surveys");
    }
);

// router.post("/register", (req, res, next) => {
//     const { email, password } = req.body;

//     User.findOne({ email: email }).then((user) => {
//         if (user) {
//             return next(new AppError("User Already Exist", 401));
//         } else {
//             new User({ email, password }).save().then((user) => {
//                 res.json({ user });
//             });
//         }
//     });
// });

// router.post("/login", passport.authenticate("local"), function (req, res) {
//     res.redirect("/api/current-user");
// });

router.get("/api/current-user", (req, res) => {
    res.send(req.user);
});

router.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/')
});

module.exports = router;
