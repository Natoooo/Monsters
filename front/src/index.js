import React, { Component } from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"
import { store, history } from "./js/store/index"
import { App } from "./js/components/App"
import { connect } from "react-redux"
import { db } from "./js/database/db"
import Login from "./js/components/Login"
import NavBar from "./js/components/NavBar"
import Loading from "./js/components/Loading"
import Error from "./js/components/Error"
import "./style/style.css"

class PrivateRoute extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
    return (
      db.isAuthenticated() ? (<Route path={this.props.path} render={ args => this.props.render(args) } />) : (<Redirect to="/login"/>)
    )
  }
}

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="mts-root">
          <NavBar />
          <Error />
          <Loading />
          <Switch>
            <Route path="/login" render={ () => ( <Login /> ) } />
            <PrivateRoute path="/" render={ () => ( <App /> ) } />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById("root")
)
