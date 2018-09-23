import React, { Component } from 'react'
import { connect } from "react-redux"
import FilterProfiles from "./FilterProfiles"
import { fetchUsers, fetchUser } from "../actions/userActions"

class SearchProfiles extends Component {
  constructor(props) {
    super(props)

    this.changeProfile = this.changeProfile.bind(this)
  }

  componentDidMount() {
    console.log("FETCH_USERS", this.props.fetchUsers)
    this.props.fetchUsers()
  }

  changeProfile(userId) {
    console.log("OPEN_PROFILE", userId)
    this.props.fetchUser(userId)
  }

  render() {
    let users = this.props.users.map((user) => {
      return <div  key={user.id} data-id={user.id} className="mts-user-item" ><li onClick={()=> {this.changeProfile(user.id)}} className="list-group-item border-0 p-1 mb-2">{user.name}</li></div>
    })
    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Search Profiles</h5>
          <FilterProfiles />
          <ul className="list-group mw-100 p-0">{users}</ul>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUsers: () => { dispatch(fetchUsers()) },
    fetchUser: (userId) => { dispatch(fetchUser(userId)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfiles)
