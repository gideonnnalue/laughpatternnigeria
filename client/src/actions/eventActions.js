import {
    GET_EVENT,
    EVENT_LOADING,
    EVENT_NOT_FOUND,
    CLEAR_CURRENT_EVENT,
    GET_ERRORS,
    GET_EVENTS
} from "./types";
import axios from "axios";

export const getAllEvents = () => dispatch => {
    dispatch(setEventLoading());
    // console.log("worked");
    axios
        .get("/api/events/all")
        .then(res => {
            // console.log(res.data.events);
            dispatch({
                type: GET_EVENTS,
                payload: res.data.events
            });
        })
        .catch(err => {
            console.log("err");
            dispatch({
                type: GET_EVENTS,
                payload: {}
            });
        });
};

export const addEvent = ({ title, details, eventImage }) => dispatch => {
    let data = new FormData();
    data.append("title", title);
    data.append("details", details);
    data.append("eventImage", eventImage);

    dispatch(setEventLoading());
    axios
        .post("/api/events/event", data)
        .then(res => {
            console.log(res.data);
            dispatch(getAllEvents());
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_EVENTS,
                payload: {}
            });
        });
};

export const deleteEvent = eventId => dispatch => {};

// Event Loading
export const setEventLoading = () => {
    return {
        type: EVENT_LOADING
    };
};
