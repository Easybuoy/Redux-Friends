import { combineReducers } from "redux";
import auth from "./auth";
import error from "./error";
import loading from "./loading";
import friends from "./friends";

export default combineReducers({
  auth,
  error,
  loading,
  friends
});
