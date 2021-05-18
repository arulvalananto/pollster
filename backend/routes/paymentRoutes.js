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

// Alternative way of payment (this is not included in this project)
// Creating Session

//******************* Server Side *****************/

// api/v1/checkoutsession/:tourId

// exports.getCheckoutSession = catchAsync(async (req, res) => {
//     const tour = await Tour.findById(req.params.tourId);

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         success_url: `${req.protocol}://${req.get("host")}/`,
//         cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
//         customer_email: req.user.email,
//         client_reference_id: req.params.tourId,
//         line_items: [
//             {
//                 name: `${tour.name} Tour`,
//                 description: tour.summary,
//                 images: ["image_url.png"],
//                 amount: tour.price * 100,
//                 currency: "usd",
//                 quantity: 1,
//             },
//         ],
//     });
//     res.status(200).json({
//         message: "success",
//         session,
//     });
// });

// ********************* Client Side ***************/

//  For More Informtion, check stripe payment documentation
