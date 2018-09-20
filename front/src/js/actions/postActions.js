import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_POSTS = "RECEIVED_POSTS"
export const ADD_POST = "ADD_POST"
export const REMOVE_POST = "REMOVE_POST"

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

export function addPost(title, content, image, posted_at) {
  return {
    type: ADD_POST,
    payload: {
      title,
      content,
      image,
      posted_at
    }
  }
}


export function createPost(user_id, title, content, image, posted_at) {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.createPost(user_id, title, content, image, posted_at))
      .then((post) => {
        console.log("GOT_CREATE_POST")
        dispatch(loading(false))
        dispatch(addPost(title, content, image, posted_at))
      })
      .catch(() => {
        console.log("GOT_ERROR8CREATE_POST")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_CREATE_POST"))
      })
  }
}

export function postRemoved(postId) {
  return {
    type: REMOVE_POST,
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
      dispatch(postRemoved(postId))
    })
    .catch((e) => {
      console.log(e)
      console.log("GOT_ERROR_DELETE_POST")
      dispatch(error("FAILED_TO_FETCH_DELETE_POST"))
    })
  }
}
