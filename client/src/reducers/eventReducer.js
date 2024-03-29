import {
    EVENT_LOADING,
    GET_EVENTS,
    ADD_EVENT,
    DELETE_EVENT
} from "../actions/types";

const initialState = {
    event: null,
    events: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EVENT_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        case ADD_EVENT:
            return {
                ...state,
                events: [action.payload, ...state.events]
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(
                    event => event._id !== action.payload
                )
            };
        default:
            return state;
    }
};
