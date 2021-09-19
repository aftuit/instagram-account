import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer.js";

export const rootReducer = combineReducers({
    instagram: accountReducer
})