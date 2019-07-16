import {
    ADD_IMAGE,
    DELETE_IMAGE,
    GET_IMAGES,
    IMAGES_LOADING,
    GET_ERRORS
} from "./types";
import axios from "axios";
import isEmpty from "../validation/is-empty";

export const getImages = () => dispatch => {
    dispatch(setImageLoading());
    axios
        .get("/api/images/")
        .then(res => {
            dispatch({
                type: GET_IMAGES,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_IMAGES,
                payload: null
            });
        });
};

export const addImage = ({ image }) => dispatch => {
    let data = new FormData();
    data.append("image", image);
    axios
        .post("/api/images/add", data)
        .then(res => {
            dispatch({
                type: ADD_IMAGE,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const deleteImage = id => dispatch => {
    axios
        .delete(`/api/images/delete/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_IMAGE,
                payload: id
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Images loading
export const setImageLoading = () => {
    return {
        type: IMAGES_LOADING
    };
};
