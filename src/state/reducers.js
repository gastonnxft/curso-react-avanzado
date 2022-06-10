import { DECREMENT, INCREMENT } from "./types"

export const contadorReducer = (state, action) => {
    console.log('3 reducer -> contadorReducer', state, action)

    switch(action.type) {
        case INCREMENT :
            return {
                ...state, contador: state.contador + action.paso
            }
        case DECREMENT :
            return { 
                ...state, contador: state.contador + action.paso
            }
        
        default:
            return state
    }
} 