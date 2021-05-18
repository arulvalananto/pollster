// SurveyNew shows surveyForm and surveyFormReview

import React, { useState } from "react";

import { reduxForm } from "redux-form";

import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
    const [showReview, setShowReview] = useState(false);
    const toggleReview = () => {
        setShowReview((prevState) => !prevState);
    };
    return (
        <div className="surveynew">
            {showReview ? (
                <SurveyFormReview toggleReview={toggleReview} />
            ) : (
                <SurveyForm toggleReview={toggleReview} />
            )}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
