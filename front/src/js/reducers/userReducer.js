import { RECEIVED_USERS } from "../actions/userActions"

export function userReducer(state = [], action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return action.payload.users

    default:
      return state
  }
}
