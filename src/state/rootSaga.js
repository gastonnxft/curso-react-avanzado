import { all } from 'redux-saga/effects'
import { decrementarWatcher } from './sagas/decrementarWatcher'
import { incrementarWatcher } from './sagas/incrementarWatcher'


export function *rootSaga () {
    yield all([incrementarWatcher(), decrementarWatcher()])
} 