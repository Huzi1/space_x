import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/types';
// FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL
const apiUrl = "http://localhost:5000/api/getSpaceships";
// const delApi = "http://localhost:5000/api/deletespaceship";
const api = "http://localhost:5000/api/"
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

const deleteSpaceshuttle = (id) => {
    console.log("In Delte", id)
    return fetch(api + "deletespaceship", {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: new Headers({
            "Content-Type": "application/json",
        })
    }).then(response => {
        console.log("Delete Response", response);
        return response.json();
    }).catch((error) => { throw error })
}
// worker Saga for delete
function* deleteRow(id) {
    try {
        const response = yield call(deleteSpaceshuttle(id));

        yield put({ type: actions.DELETE_HANGER_ROW_SUCCESS });
    } catch (e) {
        console.error(e);
        yield put({ type: actions.DELETE_HANGER_ROW_FAIL, error: e.message });
    }
}

const addSpaceshuttle = (data) => {
    console.log("In Add", data.id)
    return fetch("http://localhost:5000/api/addspaceship", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: data.id, name: data.name, modal: data.modal,
            city: data.city, planet: data.planet, maxseat: data.maxseat,
            status: data.status
        })
    }).then(response => {
        console.log("Add Response", response);
        return response.json();
    }).catch((error) => { throw error })
}
// worker Saga for Add
function* addRow({ data }) {
    try {
        const response = yield call(addSpaceshuttle(data));

        yield put({ type: actions.ADD_HANGER_ROW_SUCCESS });
    } catch (e) {
        console.error(e);
        yield put({ type: actions.ADD_HANGER_ROW_FAIL, error: e.message });
    }
}





// watcher Saga
function* hangerSaga() {
    console.log("hangerSaga*")
    yield takeEvery(actions.FETCH_HANGER_DATA_REQUEST, fetchHanger);
    yield takeEvery(actions.ADD_HANGER_ROW_REQUEST, addRow);
    yield takeEvery(actions.DELETE_HANGER_ROW_REQUEST, deleteRow);

}
export default hangerSaga;