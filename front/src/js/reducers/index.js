import { combineReducers } from "redux"
import { loadingReducer } from "./loadingReducer"
import { errorReducer } from "./errorReducer"

export const allReducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer
})
