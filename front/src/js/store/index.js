import { createStore, applyMiddleware, compose } from "redux"
import { allReducers } from "../reducers/index"
import thunk from "redux-thunk"
import { createHashHistory } from "history"
import { connectRouter, routerMiddleware } from "connected-react-router"

export const history = createHashHistory()

export const store = createStore(
  connectRouter(history)(allReducers),
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension && window.devToolsExtension() : f => f
  )
)
