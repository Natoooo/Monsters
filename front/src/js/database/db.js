import "whatwg-fetch"
import {stringify} from "qs"

class Db {
  constructor() {
    this.baseUrl = "http://localhost:5000"
    this.baseHeaders = {"Content-Type": "application/json"}
  }

  _headers() {
    return {...this.baseHeaders, 'X-Authenticate': this._getToken()}
  }

  _status(resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return Promise.resolve(resp)
    } else if(resp.status == 401 || resp.status == 403) {
      localStorage.removeItem('token')
      return Promise.reject(new AuthorizationError())
    } else {
      return Promise.reject(new Error(resp.statusText))
    }
  }

  _json(resp) {
    return resp.json()
  }

  _setToken(token) {
    localStorage.setItem('token', token)
  }

  _getToken() {
    return localStorage.getItem('token')
  }

  _removeToken() {
    localStorage.removeItem('token')
  }

  authenticate(email, password) {
    return fetch(this.baseUrl + "/login", {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(this._status)
    .then(this._json)
    .then((data) => {
      this._setToken(data.token)
    })
  }

  logout() {
    return fetch(this.baseUrl + "/logout", {
      method: "DELETE",
      headers: this._headers()
    })
    .then(this._status)
    .then((data) => {
      this._removeToken(data.token)
    })
  }

  isAuthenticated() {
    return (this._getToken() != undefined)
  }

  fetchUsers(name, race, options={}) {
    let url = this.baseUrl + "/users?"

    let params = {...options}

    if (race != null && race != undefined && race != "") {
      params["race"] = race
    }

    if (name != null && name != undefined && name != "") {
      params["name"] = name
    }

    // if (age != null) {
    //   url += "age=" + age + "&"
    // }

    return fetch(url + stringify(params), {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  fetchUser(userId) {
    return fetch(this.baseUrl + "/users/" + userId, {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  me() {
    return fetch(this.baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  fetchPosts() {
    return fetch(this.baseUrl + "/posts", {
      method: "GET",
      headers: this._headers()
    })
    .then(this._status)
    .then(this._json)
  }

  createPost(title, content, image) {
    return fetch(this.baseUrl + "/posts", {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        title: title,
        content: content,
        image: image
      })
    })
    .then(this._status)
    .then(this._json)
  }

  removePost(postId) {
  return fetch(this.baseUrl + "/posts/" + postId, {
    method: "DELETE",
    headers: this._headers()
  })
  .then(this._status)
  }
}

export class AuthorizationError extends Error {}

export const db = new Db()
