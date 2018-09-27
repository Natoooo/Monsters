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
    this.removeDuplicates = this.removeDuplicates.bind(this)
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

  removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
  }


  render() {

    let filteredUsersByName = this.props.users.filter(user => {return user.name.toLowerCase().indexOf(this.state.inputName) > -1})
    let filteredUsersByRace = this.props.users.filter(user => {return user.race.toUpperCase().indexOf(this.state.inputRace) > -1})

    //let filteredUsers = [[filteredUsersByName], [filteredUsersByRace]]
    // console.log(filteredUsers)

    let users = filteredUsersByName.map((user, id) => {
      return <div  key={id} data-id={user.id} className="mts-user-item" ><li onClick={()=> {this.changeProfile(user.id)}} className="list-group-item border-0 p-1 mb-2">{user.name}</li></div>
    })

    let userRace = this.props.users.map((user, id) => {
      return <option key={id} className="list-group-item border-0 p-1 mb-2 text-dark">{user.race}</option>
    })

    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Search Profiles</h5>
          <div className="form-group row d-block">
            <div className="input-group col-xs-2 center-block">
              <select title="Pick a race" value={this.state.inputRace} onChange={this.onChangeRace} className="custom-select bg-white text-dark w-100">
                <option className="text-center ">By race...</option>
                {userRace}
              </select>
            </div>
            <input className="form-control text-capitalize" value={this.state.inputName} onChange={this.onChangeName} placeholder="By name..."/>
{ /*           <input className="form-control mb-3 text-capitalize" value={this.state.inputAge} onChange={this.onChangeAge} placeholder="By age..."/>
*/}       </div>
          <ul className="list-group mw-100 p-0">{users.slice(0, 5)}</ul>
{ /*         <ul  className="list-group mw-100 p-0">{users.slice(5, 10)}</ul>
           <ul  className="list-group mw-100 p-0">{users.slice(10, 15)}</ul>*/}
          <div className="form-group col-12 pb-1">
          <div className="container p-0">
            <nav aria-label="Page navigation example">
              <ul className="pagination col-12">
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
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
