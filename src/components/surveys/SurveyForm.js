// surveyForm shows a form for a user to add input

import React from "react";
import "./SurveyField.css";

// Other components
import SurveyField from "./SurveyField";
// Redux Form
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";



const SurveyForm = (props) => {
    const renderFields = () => (
        <div className="surveyField__wrapper">
            {formFields.map(({ label, name }) => (
                <Field
                    key={name}
                    label={label}
                    type="text"
                    name={name}
                    component={SurveyField}
                />
            ))}
        </div>
    );

    return (
        <div className="surveyForm">
            <h5 className="surveyForm__title">Create Your Survey</h5>
            <form onSubmit={props.handleSubmit(props.toggleReview)}>
                {renderFields()}
                <Link to="/surveys">
                    <button
                        className="btn left"
                        style={{ background: "#7963E7", marginLeft: "3rem" }}
                    >
                        back
                    </button>
                </Link>
                <button
                    className="btn right black-text yellow darken-2"
                    type="submit"
                    style={{ marginRight: "3rem" }}
                >
                    Next
                </button>
            </form>
        </div>
    );
};

function validate(values) {
    const errors = {};
    formFields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`;
        }
        errors["recipients"] = validateEmails(values.recipients || "");
    });
    return errors;
}

export default reduxForm({
    validate: validate,
    form: "surveyForm",
    destroyOnUnmount: false,
})(SurveyForm);
