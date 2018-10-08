import { SET_USER_PROPS } from "../actions/userActions"

const initialState = {
  name: "",
  race: "",
  page: 0,
  page_size: 5
}

export function searchProfilesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROPS:
      return action.payload.props

    default:
      return state
  }
}
