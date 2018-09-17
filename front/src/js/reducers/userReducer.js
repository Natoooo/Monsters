import { RECEIVED_USERS_LIST } from "../actions/userActions"

export function userReducer(state = [], action) {
  switch (action.type) {
    case RECEIVED_USERS_LIST:
      return action.payload.users
    default:
      return state
  }
}
