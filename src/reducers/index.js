import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import deposit from './deposit';
import Packages from "./package";
export default combineReducers({
  auth,
  message,
  deposit,
  Packages
});