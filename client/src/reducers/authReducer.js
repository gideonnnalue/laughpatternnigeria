import {
    SET_CURRENT_USER,
    MESSAGE_LOADING,
    MESSAGE_SENT
} from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
    isAuthenticated: false,
    user: {},
    messageLoading: false,
    messageSent: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case MESSAGE_LOADING:
            return {
                ...state,
                messageLoading: true,
                messageSent: false
            };
        case MESSAGE_SENT:
            return {
                ...state,
                messageLoading: false,
                messageSent: true
            };
        default:
            return state;
    }
};
