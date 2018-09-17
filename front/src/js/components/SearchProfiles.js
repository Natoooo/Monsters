import React, { Component } from 'react'
import { connect } from "react-redux"
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
    let users = this.props.usersList.map((user, id) => {
      return <li key={id} className="list-group-item list-group-item-action">{user.name}</li>
    })
    return (
      <React.Fragment>
        <div className="container bg-light">
          <ul className="list-group w-75 p-3">{users}</ul>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    usersList: state.usersList
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUsersList: () => { dispatch(fetchUsersList()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfiles)
