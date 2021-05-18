const express = require("express");

const isLogin = require("../middlewares/isLogin");
const hasCredits = require("../middlewares/hasCredits");

const surveyController = require("../controllers/surveyController");

const router = express.Router();

router.post("/webhooks", surveyController.surveyWebhook);

router.get("/:surveyId/:choice", surveyController.responseSurvey);

router.use(isLogin);

router.get("/", surveyController.getAllSurveys);

router.use(hasCredits);

router.post("/", surveyController.createSurvey);

module.exports = router;
