import { all } from 'redux-saga/effects';
import hangerSaga from './hangerSaga';


export default function* rootSaga() {
    yield all([
        hangerSaga()
    ])
}