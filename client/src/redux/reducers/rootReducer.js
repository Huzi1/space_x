import { combineReducers } from 'redux';
import hanger from './hangerReducer';
// import Users from './userReducer';


const rootReducer = combineReducers({
    hanger: hanger,
});

export default rootReducer;