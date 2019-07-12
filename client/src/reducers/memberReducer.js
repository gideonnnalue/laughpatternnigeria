import { MEMBER_LOADING, GET_MEMBERS } from "../actions/types";

const initialState = {
    member: null,
    members: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MEMBER_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
