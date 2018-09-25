import React, { Component } from 'react'
import { connect } from "react-redux"
import FilterProfiles from "./FilterProfiles"
import { fetchUsers, fetchUser } from "../actions/userActions"

class SearchProfiles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputRace: "",
      inputName:"",
      inputAge:""
    }

    this.onChangeRace = this.onChangeRace.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeAge = this.onChangeAge.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
  }

  componentDidMount() {
    console.log("FETCH_USERS", this.props.fetchUsers)
    this.props.fetchUsers()
  }

  onChangeRace(e) {
      this.setState({
        inputRace:e.target.value
      })
  }

  onChangeName(e) {
      this.setState({
        inputName: e.target.value
      })
  }

  onChangeAge(e) {
      this.setState({
        inputAge: e.target.value
      })
  }

  changeProfile(userId) {
    console.log("OPEN_PROFILE", userId)
    this.props.fetchUser(userId)
  }

  render() {
    let filteredUsersByName = this.props.users.filter(user => user.name.indexOf(this.state.inputName) > -1)
    console.log("ByName", filteredUsersByName)
    let users = filteredUsersByName.map((user) => {
      return <div  key={user.id} data-id={user.id} className="mts-user-item" ><li onClick={()=> {this.changeProfile(user.id)}} className="list-group-item border-0 p-1 mb-2">{user.name}</li></div>
    })

    let userRace = this.props.users.map((user, id) => {
      return <option key={id} className="list-group-item border-0 p-1 mb-2 text-dark" value={this.state.inputRace} onChange={this.onChangeRace}>{user.race}</option>
    })
    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Search Profiles</h5>
          <div className="form-group row d-block">
            <div className="input-group col-xs-2 center-block">
              <select title="Pick a race" className="custom-select bg-white text-dark w-100">
                <option className="text-center ">By race...</option>
                {userRace}
              </select>
            </div>
            <input className="form-control text-capitalize" value={this.state.inputName} onChange={this.onChangeName} placeholder="By name..."/>
            <input className="form-control mb-3 text-capitalize" value={this.state.inputAge} onChange={this.onChangeAge} placeholder="By age..."/>
          </div>
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
