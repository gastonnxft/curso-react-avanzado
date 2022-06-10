import createSagaMiddleWare from "redux-saga"
import { applyMiddleware, compose, createStore } from "redux";
import { logger, logger2 } from "./middleware";
import { contadorReducer } from "./reducers";
import { rootSaga } from "./rootSaga";


const devTools =
window['__REDUX_DEVTOOLS_EXTENSION__']?
window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f

const sagaMiddleWare = createSagaMiddleWare()

export const store = createStore(
    contadorReducer,
    {
        contador : 1234
    },
    compose (
        applyMiddleware(sagaMiddleWare, logger, logger2),
        devTools
    )
)

sagaMiddleWare.run(rootSaga)