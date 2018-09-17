import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_POSTS = "RECEIVED_POSTS"

export function postsReceived(posts) {
  return {
    type: RECEIVED_POSTS,
    payload: {
      posts
    }
  }
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.fetchPosts())
      .then((posts) => {
        console.log("GOT_FETCH_POSTS")
        dispatch(loading(false))
        dispatch(postsReceived(posts))
      })
      .catch(() => {
        console.log("ERR_FETCH_POSTS")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_POSTS"))
      })
  }
}
