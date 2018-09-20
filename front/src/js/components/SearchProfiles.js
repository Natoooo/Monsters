import React, { Component } from 'react'
import { connect } from "react-redux"
import FilterUsers from "./FilterUsers"
import { fetchUsersList } from "../actions/userActions"

class SearchProfiles extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("FETCH_USERS_LIST", this.props.fetchUsersList)
    this.props.fetchUsersList()
  }

  render() {
    let users = this.props.users.map((user, id) => {
      return <div  key={id} className="mts-user-item"><li className="list-group-item border-0 p-1 mb-2">{user.name}</li></div>
    })
    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Search Profiles</h5>
          <FilterUsers />
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
    fetchUsersList: () => { dispatch(fetchUsersList()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfiles)
