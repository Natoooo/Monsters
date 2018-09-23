import { CHANGE_PROFILE } from "../actions/userActions"

export function currentProfileReducer(state={}, action) {
  switch (action.type) {
    case CHANGE_PROFILE:
      return action.payload.user

    default:
      return state
  }
}
