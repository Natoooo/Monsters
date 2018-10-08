import React, { Component } from 'react'
import { connect } from "react-redux"
import FilterProfiles from "./FilterProfiles"
import { fetchUsers, fetchUser, nextPage, prevPage } from "../actions/userActions"

class SearchProfiles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputRace: "",
      inputName: "",
      inputAge: {}
    }

    this.onChangeRace = this.onChangeRace.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    // this.onChangeAge = this.onChangeAge.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  componentDidMount() {
    console.log("FETCH_USERS", this.props.fetchUsers)
    this.props.fetchUsers()
  }

  onChangeRace(e) {
    this.setState({
      inputRace: e.target.value
    })

    this.props.fetchUsers({race: e.target.value == "By race..." ? "" : e.target.value })
  }

  onChangeName(e) {
    this.setState({
      inputName: e.target.value
    })

    this.props.fetchUsers({name: e.target.value})
  }

  // onChangeAge(e) {
  //   this.setState({
  //     inputAge: e.target.value
  //   })
  //
  //   // this.props.fetchUsers(this.state.inputName, this.state.inputRace)
  // }

  changeProfile(userId) {
    console.log("OPEN_PROFILE", userId)
    this.props.fetchUser(userId)
  }

  prevPage() {
    this.props.prevPage({page: this.props.searchProfiles.page})
  }

  nextPage() {
    this.props.nextPage({page: this.props.searchProfiles.page})
  }

  render() {
    let users = this.props.users.map((user, id) => {
      return <div  key={id} data-id={user.id} className="mts-user-item" ><li onClick={()=> {this.changeProfile(user.id)}} className="list-group-item border-0 p-1 mb-2">{user.name}</li></div>
    })

    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Search Profiles</h5>
          <div className="form-group row d-block">
            <div className="input-group col-xs-2 center-block">
              <select title="Pick a race" value={this.state.inputRace} onChange={this.onChangeRace} className="custom-select bg-white text-dark w-100">
                <option className="text-center">By race...</option>
                <option>WITCH_WIZARD</option>
                <option>DEMON</option>
                <option>VAMPIRE</option>
                <option>WEREWOLF</option>
                <option>ANGEL</option>
              </select>
            </div>
            <input className="form-control text-capitalize" value={this.state.inputName} onChange={this.onChangeName} placeholder="By name..."/>
{ /*           <input className="form-control mb-3 text-capitalize" value={this.state.inputAge} onChange={this.onChangeAge} placeholder="By age..."/>
*/}       </div>
          <ul className="list-group mw-100 p-0">{users}</ul>
          <div className="form-group col-12 pb-1">
          <div className="container p-0">
            <nav aria-label="Page navigation example">
              <ul className="pagination col-12">
                <li className="page-item" onClick={this.prevPage}><a className="page-link" href="#">prev</a></li>
                <li className="page-item" onClick={this.nextPage}><a className="page-link" href="#">next</a></li>
              </ul>
            </nav>
          </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    searchProfiles: state.searchProfiles
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUsers: (props) => { dispatch(fetchUsers(props)) },
    fetchUser: (userId) => { dispatch(fetchUser(userId)) },
    nextPage: (next) => { dispatch(nextPage(next)) },
    prevPage: (prev) => { dispatch(prevPage(prev)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProfiles)
