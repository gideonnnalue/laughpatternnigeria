import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Login - Get User data
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
    .then(res => {
        // Save to localstorage
        const { token } = res.data;
        // Set token to localstorage
        localStorage.setItem('jwtToken', token);
        // Set token to header
        setAuthToken(token);
        // decode token to get user data
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));

    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set is Authenticated to false
    dispatch(setCurrentUser({}));
  }