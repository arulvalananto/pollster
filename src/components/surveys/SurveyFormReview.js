import React from "react";
import './SurveyField.css'

import { useDispatch, useSelector } from "react-redux";
import formFields from "./formFields";
import { submitSurvey } from "../../store/actions";
import { useHistory } from "react-router";


const SurveyFormReview = ({ toggleReview }) => {
    const dispatch = useDispatch()
    
    const formData = useSelector((state) => state.form.surveyForm.values);

    const history = useHistory();

    return (
        <div className="surveyFormReview">
            <h5 className="surveyFormReview__title">
                Please confirm your entries
            </h5>
            <div className="surveyFormReview__contents">
                {formFields.map(({ label, name }) => (
                    <div key={name} className="surveyFormReview__content">
                        <label>{label}</label>
                        <div className="surveyReviewForm__data">
                            {formData[name]}
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="yellow darken-2 btn black-text surveyReviewForm__cancel"
                onClick={toggleReview}
            >
                Back
            </button>
            <button className="btn  pink surveyReviewForm__submit" onClick={() => dispatch(submitSurvey(formData, history))}>
                Submit
            </button>
        </div>
    );
};

export default SurveyFormReview;
