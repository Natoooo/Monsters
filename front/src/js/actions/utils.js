import { AuthorizationError } from "../database/db"
import { push  } from "connected-react-router"

export function authorized(dispatch, promise) {
  promise.catch((err) => {
    console.log("ERROR_AUTHORIZED", err)

    console.log(typeof(err))

    if (err instanceof AuthorizationError) {
      console.log("redirect to login")
      dispatch(push("/login"))
    } else {
      throw err
    }
  })

  return promise
}
