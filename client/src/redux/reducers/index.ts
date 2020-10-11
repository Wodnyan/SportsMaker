import { combineReducers } from "redux";
import user from "./user";
import filters from "./filter";

export default combineReducers({ user, filters });
