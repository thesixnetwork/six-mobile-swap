import thunk from "redux-thunk";//มันอิสระจากredux
import reducer from './reducers'

import { createStore, applyMiddleware } from "redux";

export default () => {
    let store = createStore(reducer, applyMiddleware(thunk))
    return store
}