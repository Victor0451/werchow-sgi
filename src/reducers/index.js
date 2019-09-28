import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import campanasReducers from "./campanasReducers";

export default combineReducers({
  auth: authReducers,
  error: errorReducers,
  campanas: campanasReducers
});
