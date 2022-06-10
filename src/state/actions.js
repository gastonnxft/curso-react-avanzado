import { DECREMENT, DECREMENT_ASYNC, INCREMENT, INCREMENT_ASYNC } from "./types"


export const accionDecremento = paso => {
    console.log('2 action -> accionDecremento', paso)

    return{
        type: DECREMENT,
        paso
    }
    
}

export const accionIncremento = paso => {
    console.log('2 action -> accionIncremento', paso)

    return{
        type: INCREMENT,
        paso
    }
    
}

export const accionDecrementoAsync = paso => {
    console.log('2 action -> accionDecrementoAsync', paso)

    return{
        type: DECREMENT_ASYNC,
        paso
    }
    
}

export const accionIncrementoAsync = paso => {
    console.log('2 action -> accionIncrementoAsync', paso)

    return{
        type: INCREMENT_ASYNC,
        paso
    }
    
}

