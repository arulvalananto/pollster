import actionTypes from "../actions/types";

const reducers = (state = null, action) => {
        switch (action.type) {
        case actionTypes.FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
};

export default reducers;
