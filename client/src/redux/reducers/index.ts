import { combineReducers } from "redux";
import user from "./user";
import filters from "./filter";
import entries from "./entries";

export default combineReducers({ user, filters, entries });
