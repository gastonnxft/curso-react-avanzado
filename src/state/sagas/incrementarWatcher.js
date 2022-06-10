import { put, takeLatest } from "redux-saga/effects"
import { accionIncremento } from "../actions"
import { INCREMENT_ASYNC } from "../types"



//worker
function *incrementarWorker(accion){
    console.warn('getPageNoticiasWorker')

    //implementar delay async
    
    yield put((accionIncremento(accion.paso)))
}

// watcher
export function *incrementarWatcher(){
    console.warn('incrementarWatcher')
    yield takeLatest(INCREMENT_ASYNC, incrementarWorker)
}