const mongoose = require("mongoose");
const validator = require("validator");

const recipientSchema = mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    responded: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("Recipients", recipientSchema);
