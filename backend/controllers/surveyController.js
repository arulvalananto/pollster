const Survey = require("../models/Survey");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/templates/surveyTemplates");

const _ = require("lodash");
const { Path } = require("path-parser");
const URL = require("url").URL;

exports.getAllSurveys = async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
        recipients: false,
    });
    res.status(200).send(surveys);
};

exports.createSurvey = async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
        title,
        subject,
        body,
        recipients: recipients.split(", ").map((email) => ({ email })),
        _user: req.user.id,
        dateSent: Date.now(),
    });

    // Great place to send an email!
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
        await mailer.send();

        await survey.save();

        req.user.credits -= 1;

        const user = await req.user.save();

        res.status(200).send(user);
    } catch (err) {
        res.status(422).send(err);
    }
};

exports.responseSurvey = async (req, res) => {
    res.send("Thans for voting");
};

exports.surveyWebhook = async (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
        .map(({ email, url }) => {
            if (url) {
                const pathname = new URL(url).pathname;
                const match = p.test(pathname);
                if (match) {
                    return {
                        email,
                        surveyId: match.surveyId,
                        choice: match.choice,
                    };
                }
            }
        })
        .compact()
        .uniqBy("email", "surveyId")
        .each(({ surveyId, email, choice }) => {
            Survey.updateOne(
                {
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false },
                    },
                },
                {
                    $inc: { [choice]: 1 },
                    $set: { "recipients.$.responded": true },
                    lastResponded: new Date(),
                }
            ).exec();
        })
        .value();

    res.status(200).send({});
};
