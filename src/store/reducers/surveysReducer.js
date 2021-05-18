import actionType from "../actions/types";

const reducers = (state = [], action) => {
    switch (action.type) {
        case actionType.FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
};

export default reducers;
