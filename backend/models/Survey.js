const mongoose = require("mongoose");
const Recipient = require("./Recipient");

const surveySchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "survey must have a title"],
    },
    body: {
        type: String,
        required: [true, "survey must have a body"],
    },
    subject: {
        type: String,
        required: [true, "survey must have a subject"],
    },
    recipients: [Recipient.schema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    dateSent: Date,
    lastResponded: Date,
});

module.exports = mongoose.model("Surveys", surveySchema);
