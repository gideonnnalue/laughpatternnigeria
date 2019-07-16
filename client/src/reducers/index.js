import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import memberReducer from "./memberReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    events: eventReducer,
    members: memberReducer,
    images: imageReducer
});
