import { FETCH_HANGER_DATA_REQUEST, FETCH_HANGER_DATA_SUCCESS, FETCH_HANGER_DATA_FAIL } from '../actions/types';






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
        default:
            return state
    }

}

export default hanger;