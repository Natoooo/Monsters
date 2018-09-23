import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_USERS = "RECEIVED_USERS"
export const CHANGE_PROFILE = "CHANGE_PROFILE"

export function receivedUsers(users) {
  return {
    type: RECEIVED_USERS,
    payload: {
      users
    }
  }
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.fetchUsers())
      .then((users) => {
        console.log("GOT_FETCH_USERS")
        dispatch(loading(false))
        dispatch(receivedUsers(users))
      })
      .catch((e) => {
        console.log("ERR_FETCH_USERS")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_USERS"))
      })
  }
}

export function changeProfile(user) {
  return {
    type: CHANGE_PROFILE,
    payload: {
      user
    }
  }
}

export function fetchUser(userId) {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.fetchUser(userId))
      .then((user) => {
        console.log("GOT_FETCH_USER")
        dispatch(loading(false))
        dispatch(changeProfile(user))
      })
      .catch((e) => {
        console.log("ERR_FETCH_USER")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_USER"))
      })
  }
}

export function me() {
  return(dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.me())
      .then((user) => {
        console.log("GOT_ME")
        dispatch(loading(false))
        dispatch(changeProfile(user))
      })
      .catch(() => {
        console.log("ERR_ME")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_ME"))
      })
  }
}
