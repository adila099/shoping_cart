// userSaga.js
import { takeLatest, call, put } from "redux-saga/effects";

import { DATA_REQUEST, dataSuccess } from "../action/cartAction";
import { dataRequest } from "../services/cartService";

import { DELETE_PRODUCT_REQUEST } from "../action/cartAction";
import {
  deleteProductSuccess,
  deleteProductFailure,
} from "../action/cartAction";
import API from "../services/base.service";

// Login
function* dataSaga1() {
  try {
    const data = yield dataRequest();
    yield put(dataSuccess(data.data));
  } catch (error) {
    console.log(error);
  }
}

// for delete data

const deleteProductApi = (productId) => API.delete(`/products/${productId}`);

const updateProductApi = (id) => API.put(`/products/${id}`);

function* deleteProductSaga(action) {
  try {
    yield call(deleteProductApi, action.payload); // payload is the productId
    yield put(deleteProductSuccess(action.payload)); // Dispatch success action with productId
  } catch (error) {
    yield put(deleteProductFailure(error.message)); // Dispatch failure action with error message
  }
}

// function* updateProductSaga(action) {
//   try {
//     yield call(updateProductApi, action.payload); 
//     yield put(updateProductSuccess(action.payload)); 
//   } catch (error) {
//     yield put(updateProductFailure(error.message)); 
//   }
// }
////////

function* dataSaga() {
  yield takeLatest(DATA_REQUEST, dataSaga1);
}

export function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProductSaga);
}

export default dataSaga;
