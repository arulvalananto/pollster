import axios from "axios";
import actionType from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current-user");

    dispatch({ type: actionType.FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
    const res = await axios.post("/api/stripe", { token });

    dispatch({ type: actionType.FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
    const res = await axios.post("/api/surveys", values);

    history.push("/surveys");

    dispatch({ type: actionType.FETCH_USER, payload: res.data });
};

export const fetchSurvey = () => async (dispatch) => {
    const res = await axios.get("/api/surveys");
    dispatch({ type: actionType.FETCH_SURVEYS, payload: res.data });
};
