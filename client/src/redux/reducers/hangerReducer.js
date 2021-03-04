import {
    FETCH_HANGER_DATA_REQUEST, FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL,
    DELETE_HANGER_ROW_REQUEST, DELETE_HANGER_ROW_FAIL, DELETE_HANGER_ROW_SUCCESS,
    ADD_HANGER_ROW_SUCCESS, ADD_HANGER_ROW_REQUEST, ADD_HANGER_ROW_FAIL

} from '../actions/types';






export const initialState = {
    isLoading: false,
    hangerData: [],
    error: [],
}


const hanger = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HANGER_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                hangerData: [],
                error: [],
            }
        case FETCH_HANGER_DATA_SUCCESS:
            return {
                isLoading: false,
                hangerData: action.data,
                error: [],
            }
        case FETCH_HANGER_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                hangerData: [],
            }
        case DELETE_HANGER_ROW_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case DELETE_HANGER_ROW_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case DELETE_HANGER_ROW_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        case ADD_HANGER_ROW_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ADD_HANGER_ROW_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case ADD_HANGER_ROW_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }

}


export default hanger;