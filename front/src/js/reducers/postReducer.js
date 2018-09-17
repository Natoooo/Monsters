import { RECEIVED_POSTS } from "../actions/postActions"

export function postReducer(state = [], action) {
  switch (action.type) {
    case RECEIVED_POSTS:
      return action.payload.posts
    default:
      return state
  }
}
