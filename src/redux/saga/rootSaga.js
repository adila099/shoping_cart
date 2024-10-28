import userSaga from "./userSaga";
import { all, spawn } from "redux-saga/effects";


export default function* rootSaga() {
  yield all([
    spawn(userSaga),
  ]);
}

