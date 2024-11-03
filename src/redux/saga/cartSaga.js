// userSaga.js
import { takeLatest, call, put } from "redux-saga/effects";

import { DATA_REQUEST, dataSuccess, UPDATE_PRODUCT_REQUEST, updateProductFailure, updateProductSuccess } from "../action/cartAction";
import { dataRequest, productDelete, productUpdate } from "../services/cartService";

import { DELETE_PRODUCT_REQUEST } from "../action/cartAction";
import {
  deleteProductSuccess,
  deleteProductFailure,
} from "../action/cartAction";
import API from "../services/base.service";

// get item
function* dataSaga1() {
  try {
    const data = yield dataRequest();
    yield put(dataSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
}

// for delete data
function* deleteProductSaga(action) {
  try {
    const delItem = yield productDelete(action.payload);
    yield put(deleteProductSuccess(delItem?.data));
  } catch (error) {
    yield put(deleteProductFailure(error.message));
  }
}

function* updateProductSaga(action) {
  try {
    const item = yield productUpdate(action.payload);
    yield put(updateProductSuccess(item?.data)); 
  } catch (error) {
    yield put(updateProductFailure(error.message));
  }
}
////////

function* dataSaga() {
  yield takeLatest(DATA_REQUEST, dataSaga1);
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProductSaga);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProductSaga);
}


export default dataSaga;
