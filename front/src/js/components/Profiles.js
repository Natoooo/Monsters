import React, { Component } from "react"
import { Profile }from "./Profile"
import { connect } from "react-redux"

class Profiles extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let users = this.props.users.map((user) => {
          return <Profile id={user.id} key={user.id} image={user.image} name={user.name} age={user.age} race={user.race} joined_at={user.joined_at} />
    })

    return (
      <React.Fragment>
        <div className="form-group bg-white m-2">
          <div>{users}</div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    users: state.users
  }
}

export default connect(mapStateToProps)(Profiles)
