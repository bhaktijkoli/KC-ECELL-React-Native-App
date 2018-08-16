import { applyMiddleware, createStore } from "redux"
import { createLogger } from 'redux-logger'

import reducer from "./reducers"

var middleware = applyMiddleware()

middleware = applyMiddleware(createLogger())

export default createStore(reducer, middleware)
