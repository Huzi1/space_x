import {
    FETCH_HANGER_DATA_REQUEST, FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL,
    DELETE_HANGER_ROW_REQUEST, DELETE_HANGER_ROW_FAIL, DELETE_HANGER_ROW_SUCCESS,
    ADD_HANGER_ROW_REQUEST, ADD_HANGER_ROW_SUCCESS, ADD_HANGER_ROW_FAIL

} from "./types";

export const fetchHanger = (data) => {

    return {
        type: FETCH_HANGER_DATA_REQUEST,
        data,
    }
}

export const deleteRow = (id) => {

    return {
        type: DELETE_HANGER_ROW_REQUEST,
        id,
    }
}

export const addRow = (data) => {

    return {
        type: ADD_HANGER_ROW_REQUEST,
        data,
    }
}