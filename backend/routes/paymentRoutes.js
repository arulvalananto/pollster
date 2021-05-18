const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const isLogin = require("../middlewares/isLogin");

const router = express.Router();

router.post("/api/stripe", isLogin, async (req, res) => {
    const { token } = req.body;

    const charge = await stripe.charges.create({
        amount: 35000,
        currency: "inr",
        description: "350 rupees for 25 credits",
        source: token.id,
    });

    req.user.credits += 25;
    const user = await req.user.save();

    res.send(user);
});

module.exports = router;
