import { combineReducers } from "redux";
import { resettableReducer } from "reduxsauce";

import user from "./user";
import loader from "./loader";

const resettableUser = resettableReducer("LOGOUT");

const reducers = combineReducers({
  loader,
  user: resettableUser(user)
});

export default reducers;
