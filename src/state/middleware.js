export const logger = store => next => action =>{
    console.warn('middleware logger', 'action', action, Date.now())
    next(action)
}

export const logger2 = store => next => action =>{
    console.warn('middleware logger2', 'store', store, new Date().toLocaleDateString())
    next(action)
}