const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION");
    console.log(err.name, err.message);
    console.log(err.stack);
    // process.exit(1);
});

const app = require("./app");

const port = process.env.PORT || 5001;

mongoose
    .connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB CONNECTED");
    });

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

// "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
