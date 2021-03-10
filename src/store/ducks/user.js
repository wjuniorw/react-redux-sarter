import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

// creating a immutable iniial state
const INITIAL_STATE = Immutable({
  _id: "",
  name: "",
  email: ""
});

// creating all types and action creators for reducer...
export const { Types, Creators } = createActions({
  // sagas...
  userLogin: ["params"],
  logout: [],
  loadUser: [],
  // store...
  loginSucess: ["data"]
});

// creating reducer mutations...
const success = (state = INITIAL_STATE, { data }) => {
  return state.merge(data);
};

// creating reducer...
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCESS]: success
});
