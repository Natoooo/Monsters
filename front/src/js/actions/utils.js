import { AuthorizationError } from "../database/db"
import { push  } from "connected-react-router"

export function authorized(dispatch, promise) {
  promise.catch((err) => {
    console.log(err)

    if (err instanceof AuthorizationError) {
      console.log("redirect to login")
      dispatch(push("/login"))
      throw err
    }
  })

  return promise
}
