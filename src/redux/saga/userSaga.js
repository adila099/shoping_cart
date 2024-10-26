// userSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { loginUser } from '../services/userService';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFailure,
  logoutRequest,
} from '../action/userActions';
import { LOGOUT } from '../action/userActions';
import { ALERT_SUCCESS, ALERT_FAILURE, } from '../action/alertAction';

// Login
function* loginUserSaga(action) {
  try {
    const user = yield loginUser(action.payload);
    yield put(loginSuccess(user.data));

  } catch (error) {
    console.log(error)
    yield put(loginFailure(error));

  }
}

////////
function* logoutUserSaga() {
  yield put({
    type: ALERT_SUCCESS,
    payload: {
      type: 'success',
      message: 'User Logout Successfully',
      status: true,
    },
  });
}
////////

function* userSaga() {
  yield takeLatest(LOGIN_REQUEST, loginUserSaga);
  yield takeLatest(LOGOUT, logoutUserSaga);
}

export default userSaga;
