import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { db } from "../database/db"
import { push } from "connected-react-router"

export function authenticate(email, password) {
  return (dispatch) => {
    dispatch(loading(true))
    db.authenticate(email, password)
    .then((i) => {
      console.log("GOT_LOGIN")
      dispatch(loading(false))
      dispatch(push('/'))
    })
    .catch(() => {
      console.log("GOT_ERROR_LOGIN")
      dispatch(loading(false))
      dispatch(error("FAILED_TO_FETCH_AUTHENTICATE"))
    })
  }
}
