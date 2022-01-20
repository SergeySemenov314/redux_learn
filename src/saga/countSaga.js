import {put, takeEvery} from 'redux-saga/effects'
import { addCashAction, ASYNC_INCREMENT } from '../store/cashReducer'

const  delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(addCashAction())

}



function* decrementWorker() {
    
}



export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    
}