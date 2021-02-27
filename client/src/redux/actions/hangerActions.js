import {FETCH_HANGER_DATA_REQUEST, FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL } from "./types";

export const fetchHanger = (data) => {
    
    return {
        type: FETCH_HANGER_DATA_REQUEST,
        data,
    }
}