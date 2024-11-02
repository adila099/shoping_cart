// userSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';

import { DATA_REQUEST, dataSuccess } from '../action/cartAction';
import { dataRequest } from '../services/cartService';

// Login
function* dataSaga1() {
    try {
        const data = yield dataRequest();
        yield put(dataSuccess(data.data));

    } catch (error) {
        console.log(error)
    }
}


////////

function* dataSaga() {
    yield takeLatest(DATA_REQUEST, dataSaga1);
}

export default dataSaga;
