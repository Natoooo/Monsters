import { combineReducers } from "redux"
import { loadingReducer } from "./loadingReducer"
import { errorReducer } from "./errorReducer"
import { userReducer } from "./userReducer"

export const allReducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  usersList: userReducer
})
