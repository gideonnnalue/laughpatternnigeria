import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "./eventReducer";
import memberReducer from "./memberReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    events: eventReducer,
    members: memberReducer
});
