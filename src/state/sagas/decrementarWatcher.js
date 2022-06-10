import { put, takeLatest } from "redux-saga/effects"
import { accionDecremento } from "../actions"
import { DECREMENT_ASYNC } from "../types"



//worker
function *decrementarWorker(accion){
    console.warn('decrementarWorker')

    //implementar delay async
    
    yield put((accionDecremento(accion.paso)))
}

// watcher
export function *decrementarWatcher(){
    console.warn('incrementarWatcher')
    yield takeLatest(DECREMENT_ASYNC, decrementarWorker)
}