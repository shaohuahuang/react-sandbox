import {createStore} from 'redux'
import throttle from 'loadash/throttle'
import todoApp from './reducers'
// import {loadState, saveState} from './localStorage'
import promise from 'redux-promise'

const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch
    return (action) => {
        console.group(action.type)
        console.log('prev state', store.getState())
        console.log('action', action)
        const returnValue = rawDispatch(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        return returnValue
    }
}

const configureStore = () => {
    // const persistedState = loadState()
    const store = createStore(
        todoApp,
        applyMiddleware([promise])
    )

    store.dispatch = addLoggingToDispatch(store)

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     })
    // }, 1000))

    return store
}

export default configureStore
