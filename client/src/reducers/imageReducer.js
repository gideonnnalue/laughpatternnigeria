import {
    IMAGES_LOADING,
    GET_IMAGES,
    ADD_IMAGE,
    DELETE_IMAGE
} from "../actions/types";

const initialState = {
    image: null,
    images: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case IMAGES_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            };
        case ADD_IMAGE:
            return {
                ...state,
                images: [action.payload, ...state.images]
            };
        case DELETE_IMAGE:
            return {
                ...state,
                images: state.images.filter(
                    image => image._id !== action.payload
                )
            };
        default:
            return state;
    }
};
