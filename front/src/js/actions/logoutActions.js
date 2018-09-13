import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { db } from "../database/db"
import { push } from "connected-react-router"

export function logout() {
  return (dispatch) => {
    dispatch(loading(true))
    db.logout()
    .then((i) => {
      console.log("GOT_LOGOUT")
    })
    .catch(() => {
      console.log("GOT_ERROR_LOGOUT")
      dispatch(error("FAILED_TO_FETCH_LOGOUT"))
    })
    .finally(() => {
      dispatch(loading(false))
      dispatch(push("/login"))
    })
  }
}
