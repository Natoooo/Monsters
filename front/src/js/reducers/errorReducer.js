import { ERROR } from "../actions/errorActions"

export function errorReducer(state = false, action) {
  switch (action.type) {
    case ERROR:
      return action.payload.message

    default:
      return state
  }
}
