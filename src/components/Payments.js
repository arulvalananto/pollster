import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../store/actions";

const Payments = () => {
    const dispatch = useDispatch();

    return (
        <StripeCheckout
            name="Pollster"
            description="&#8377;350 for 25 email credits"
            amount={35000}
            token={(token) => dispatch(handleToken(token))}
            currency="INR"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn pink" style={{ fontSize:"14px", fontWeight: 500 }}>
                Add Credits
            </button>
        </StripeCheckout>
    );
};

export default Payments;
