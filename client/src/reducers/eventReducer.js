import { EVENT_LOADING, GET_EVENTS } from "../actions/types"

const initialState = {
    event: null,
    events: null,
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case EVENT_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        default:
            return state;
    }
}