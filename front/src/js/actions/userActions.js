import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_USERS_LIST = "RECEIVED_USERS_LIST"

export function usersListReceived(users) {
  return {
    type: RECEIVED_USERS_LIST,
    payload: {
      users
    }
  }
}

export function fetchUsersList() {
  return (dispatch) => {
    dispatch(loading(true))
    authorized(dispatch, db.fetchUsersList())
      .then((users) => {
        console.log("GOT_FETCH_USERS_LIST")
        dispatch(loading(false))
        dispatch(usersListReceived(users))
      })
      .catch((e) => {
        console.log("ERR_FETCH_USERS_LIST")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_USERS_LIST"))
      })
  }
}
