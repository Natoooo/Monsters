import React, { Component } from 'react'
import { connect } from "react-redux"
import { logout } from "../actions/logoutActions"
import { me } from  "../actions/userActions"

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.myProfile = this.myProfile.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.logout()
  }

  myProfile() {
    console.log("OPEN_MY_PROFILE", me)
    this.props.me()
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container m-0 col-12">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" className="mts-logo" src="http://static.tumblr.com/2b3ba360463d61bbef79484dd2c2ade8/bx0jiaj/Akto3c8b5/tumblr_static_f1zuu5ooefk8w044kckksoc44.png" />
              onsters</a>
            </div>

            <ul className="nav navbar-nav">
              <li><a href="#" style={{fontSize: "16px", color: "white"}} onClick={this.myProfile} >My Profile</a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><button className="btn btn-danger" onClick={this.onSubmit}>Logout</button></a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { dispatch(logout()) },
    me: () => { dispatch(me()) }
  }
}

export default connect(null, mapDispatchToProps)(NavBar)
