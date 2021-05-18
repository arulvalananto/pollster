const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

require("dotenv").config({ path: "./config/config.env" });
require("./services/passport");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY],
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRoutes);
app.use("/", paymentRoutes);
app.use("/api/surveys", surveyRoutes);

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    // like our main.js file or main.css file
    app.use(express.static("client/build"));
    // express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}

app.use("*", (req, res, next) => {
    res.status(404).json({
        message: `Can't find ${req.originalUrl} in this route`,
    });
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
});

module.exports = app;
