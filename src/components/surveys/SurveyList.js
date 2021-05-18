import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurvey } from "../../store/actions";

const SurveyList = () => {
    const dispatch = useDispatch();
    const surveys = useSelector((state) => state.surveys);

    useEffect(() => {
        dispatch(fetchSurvey());
    }, [dispatch]);
    console.log(surveys);

    function renderSurveys() {
        if (surveys.length > 0) {
            return surveys?.reverse().map((survey) => (
                <div key={survey._id} className="card white darken-2">
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On:{" "}
                            {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action" style={{ fontWeight: "bold" }}>
                        <a className="pink-text">Yes: {survey.yes}</a>
                        <a className="pink-text">No: {survey.no}</a>
                    </div>
                </div>
            ));
        } else {
            return (
                <p className="center" style={{ fontSize: "16px", fontWeight: "600" }}>
                    No Surveys Found
                </p>
            );
        }
    }
    return (
        <div className="container" style={{ marginTop: "1rem" }}>
            {renderSurveys()}
        </div>
    );
};

export default SurveyList;
