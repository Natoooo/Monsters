import { LOADING } from "../actions/loadingActions"

export function loadingReducer(state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.payload.isLoading

    default:
      return state
  }
}
