import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_POSTS = "RECEIVED_POSTS"
export const ADDED_POST = "ADD_POST"
export const REMOVED_POST = "REMOVE_POST"

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

export function addedPost(post) {
  return {
    type: ADDED_POST,
    payload: {
      post
    }
  }
}

export function createPost(title, content, image) {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.createPost(title, content, image))
      .then((post) => {
        console.log("GOT_CREATE_POST")
        dispatch(loading(false))
        dispatch(addedPost(post))
      })
      .catch(() => {
        console.log("GOT_ERROR_CREATE_POST")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_CREATE_POST"))
      })
  }
}

export function removedPost(postId) {
  return {
    type: REMOVED_POST,
    payload: {
      postId
    }
  }
}

export function removePost(postId) {
  return (dispatch) => {
    db.removePost(postId)
    .then((d) => {
      console.log('GOT_DELETE_POST')
      dispatch(removedPost(postId))
    })
    .catch((e) => {
      console.log(e)
      console.log("GOT_ERROR_DELETE_POST")
      dispatch(error("FAILED_TO_FETCH_DELETE_POST"))
    })
  }
}
