import { combineReducers } from "redux"
import { loadingReducer } from "./loadingReducer"
import { errorReducer } from "./errorReducer"
import { userReducer } from "./userReducer"
import { postReducer } from "./postReducer"

export const allReducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  users: userReducer,
  posts: postReducer
})
