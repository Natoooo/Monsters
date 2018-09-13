import React, { Component } from 'react'
import { connect } from "react-redux"
import { logout } from "../actions/logoutActions"

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.onSubmit= this.onSubmit.bind(this)
  }

    onSubmit(e) {
      e.preventDefault()
      this.props.logout()
    }

  render() {
    return (
      <React.Fragment>
        <div className="mts-navBar">
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <img alt="Brand" className="mts-logo" src="http://static.tumblr.com/2b3ba360463d61bbef79484dd2c2ade8/bx0jiaj/Akto3c8b5/tumblr_static_f1zuu5ooefk8w044kckksoc44.png" />
                onsters</a>
              </div>

              <ul className="nav navbar-nav">
                <li><a href="#" style={{fontSize: "16px", color: "white"}}>My Profile</a></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><button className="btn btn-danger" onClick={this.onSubmit}>Logout</button></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { dispatch(logout()) }
  }
}

export default connect(null, mapDispatchToProps)(NavBar)
