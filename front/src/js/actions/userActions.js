import { db } from "../database/db"
import { loading } from "./loadingActions"
import { error } from "./errorActions"
import { authorized } from "./utils"

export const RECEIVED_USERS = "RECEIVED_USERS"
export const CHANGE_PROFILE = "CHANGE_PROFILE"
export const SET_USER_PROPS = "SET_USER_PROPS"
export const CHANGE_PROPERTIES = "CHANGE_PROPERTIES"

export function receivedUsers(users) {
  return {
    type: RECEIVED_USERS,
    payload: {
      users
    }
  }
}

export function setUserProps(props) {
  return {
    type: SET_USER_PROPS,
    payload: {
      props
    }
  }
}

export function fetchUsers(props={}) {
  return (dispatch, getState) => {
    dispatch(loading(true))
    let q = Object.assign({}, getState().searchProfiles, props)
    console.log("Props", props)
    console.log("Q", q)
    authorized(dispatch, db.fetchUsers(q.name, q.race, {page: 0, page_size: q.page_size}))
      .then((users) => {
        console.log("GOT_FETCH_USERS")
        dispatch(loading(false))
        dispatch(receivedUsers(users))
        dispatch(setUserProps(q))
      })
      .catch((e) => {
        console.log("ERR_FETCH_USERS")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_USERS"))
      })
  }
}

export function changeNextPage(page) {
  return(dispatch, getState) => {
    dispatch(loading(true))
    let q = Object.assign({}, getState().searchProfiles, {page: getState().searchProfiles.page+1})
    authorized(dispatch, db.fetchUsers(q.name, q.race, {page: q.page, page_size: q.page_size}))
      .then((users) => {
        console.log("GOT_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(receivedUsers(users))
        dispatch(setUserProps(q))
      })
      .catch((e) => {
        console.log("ERR_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_PAGE"))
      })
  }
}

export function nextPage(next) {
  return(dispatch, getState) => {
    dispatch(loading(true))
    let q = Object.assign({}, getState().searchProfiles, {page: getState().searchProfiles.page+1})
    authorized(dispatch, db.fetchUsers(q.name, q.race, {page: q.page, page_size: q.page_size}))
      .then((users) => {
        console.log("GOT_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(receivedUsers(users))
        dispatch(setUserProps(q))
      })
      .catch((e) => {
        console.log("ERR_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_PAGE"))
      })
  }
}

export function prevPage(prev) {
  return(dispatch, getState) => {
    dispatch(loading(true))
    let q = Object.assign({}, getState().searchProfiles, {page: getState().searchProfiles.page-1})
    authorized(dispatch, db.fetchUsers(q.name, q.race, {page: q.page, page_size: q.page_size}))
      .then((users) => {
        console.log("GOT_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(receivedUsers(users))
        dispatch(setUserProps(q))
      })
      .catch((e) => {
        console.log("ERR_FETCH_PAGE_NEXT")
        dispatch(loading(false))
        dispatch(error("FAILED_TO_LOAD_PAGE"))
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
