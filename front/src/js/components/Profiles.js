import React, { Component } from "react"
import { Profile }from "./Profile"
import { me } from "../actions/userActions"
import { connect } from "react-redux"

class Profiles extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.me()
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-group bg-white m-0">
          <Profile profile={this.props.profile}/>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.currentProfile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    me: () => { dispatch(me()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles)
