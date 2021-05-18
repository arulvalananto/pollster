// SurveyField contains logic to render a single
// label and text input

import React from "react";
import "./SurveyField.css";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    //  if you have a doubt about input, change it to props and checked it out.
    return (
        <div className="surveyField">
            <label>{label}</label>
            <input
                className="surveyField__input"
                {...input}
                onBlur={input.onBlur}
                onChange={input.onChange}
            />
            <div className="red-text">
                {touched && error}
            </div>
        </div>
    );
};

export default SurveyField;
