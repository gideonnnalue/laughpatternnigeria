import {
    GET_EVENT,
    EVENT_LOADING,
    EVENT_NOT_FOUND,
    CLEAR_CURRENT_EVENT,
    GET_ERRORS,
    GET_EVENTS,
    ADD_EVENT,
    DELETE_EVENT
} from "./types";
import axios from "axios";
import isEmpty from "../validation/is-empty";

export const getAllEvents = () => dispatch => {
    dispatch(setEventLoading());
    // console.log("worked");
    axios
        .get("/api/events/all")
        .then(res => {
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("err");
            dispatch({
                type: GET_EVENTS,
                payload: null
            });
        });
};

export const addEvent = ({ title, details, eventImage }) => dispatch => {
    let data = new FormData();
    data.append("title", title);
    data.append("details", details);
    data.append("eventImage", eventImage);

    // dispatch(setEventLoading());
    axios
        .post("/api/events/event", data)
        .then(res => {
            dispatch({
                type: ADD_EVENT,
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

export const editEvent = ({ id, title, details, eventImage }) => dispatch => {
    // console.log("edit");
    let data = new FormData();
    data.append("id", id);
    data.append("title", title);
    data.append("details", details);
    if (isEmpty(eventImage)) {
        data.append("eventImage", eventImage);
    }

    dispatch(setEventLoading());
    axios
        .post("/api/events/edit", data)
        .then(res => {
            console.log(res.data);
            dispatch(getAllEvents());
        })
        .catch(err => {
            console.log(err);
            dispatch(getAllEvents());
        });
};

export const deleteEvent = eventId => dispatch => {
    axios
        .delete(`/api/events/event/${eventId}`)
        .then(res => {
            dispatch({
                type: DELETE_EVENT,
                payload: eventId
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Event Loading
export const setEventLoading = () => {
    return {
        type: EVENT_LOADING
    };
};
