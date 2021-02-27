import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/types';
// FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL
const apiUrl = "http://localhost:5000/api/getSpaceships";
// const apiUrl = "https://jsonplaceholder.typicode.com/users"

const getSpaceshuttles = () => {
    console.log("In get")
    return fetch(apiUrl, {
        method: 'GET',

    }).then(response => {
        console.log("fetch Json", response);
        return response.json();
    }).catch((error) => { throw error })
}
// worker Saga
function* fetchHanger(action) {
    try {
        const response = yield call(getSpaceshuttles);

        yield put({ type: actions.FETCH_HANGER_DATA_SUCCESS, data: response });
    } catch (e) {
        console.error(e);
        yield put({ type: actions.FETCH_HANGER_DATA_FAIL, error: e.message });
    }
}
// watcher Saga
function* hangerSaga() {
    console.log("hangerSaga*")
    yield takeEvery(actions.FETCH_HANGER_DATA_REQUEST, fetchHanger);
}


export default hangerSaga;