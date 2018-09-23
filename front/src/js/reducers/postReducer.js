import { RECEIVED_POSTS, ADDED_POST, REMOVED_POST } from "../actions/postActions"

export function postReducer(state = [], action) {
  switch (action.type) {
    case RECEIVED_POSTS:
      return action.payload.posts

    case ADDED_POST:
      return [...state, action.payload.post]

    case REMOVED_POST:
      return state.filter((post) => {
        return post.id != action.payload.postId
    })

    default:
      return state
  }
}
