import { all, takeLatest } from "redux-saga/effects";

import { login, logOut } from "./user";

function* rootSaga() {
  yield all([takeLatest("LOGOUT", logOut), takeLatest("USER_LOGIN", login)]);
}

export default rootSaga;
