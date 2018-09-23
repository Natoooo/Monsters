import { combineReducers } from "redux"
import { loadingReducer } from "./loadingReducer"
import { errorReducer } from "./errorReducer"
import { userReducer } from "./userReducer"
import { postReducer } from "./postReducer"
import { currentProfileReducer } from "./currentProfileReducer"

export const allReducers = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  users: userReducer,
  currentProfile: currentProfileReducer,
  posts: postReducer
})
