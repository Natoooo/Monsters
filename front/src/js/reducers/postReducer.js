import { RECEIVED_POSTS, ADD_POST, REMOVE_POST } from "../actions/postActions"

export function postReducer(state = [], action) {
  switch (action.type) {
    case RECEIVED_POSTS:
      return action.payload.posts

    case ADD_POST:
      return [...state,
         {
           title: action.payload.title,
           content: action.payload.content,
           image: action.payload.image,
           posted_at: action.payload.posted_at
         }
       ]
    case REMOVE_POST:
      return state.filter((post) => {
        return post.id != action.payload.postId
    })

    default:
      return state
  }
}
