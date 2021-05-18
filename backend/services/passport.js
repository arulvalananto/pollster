const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

//Create a Strategy for Specific one (Like Google here).

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            proxy: true,
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });
            if (existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }
    )
);

// Strategy for normal email and password method:

// passport.use(
//     new LocalStrategy(
//         {
//             usernameField: "email",
//             passwordField: "password",
//         },
//         (username, password, done) => {
//             User.findOne({ email: username }).then((user) => {
//                 if (!user || !user.correctPassword(password)) {
//                     return done(null, false);
//                 }
//                 return done(null, user);
//             });
//         }
//     )
// );
