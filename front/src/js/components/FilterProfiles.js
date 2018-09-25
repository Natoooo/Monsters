import React, { Component } from 'react'
import { connect } from "react-redux"

class FilterProfiles extends Component {
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
    this.filterUser = this.filterUser.bind(this)
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

  filterUser() {
    let filteredUsersByName = this.props.users.filter(user => user.name.indexOf(this.state.inputName) !== -1)
    console.log("ByName", filteredUsersByName)
    let filteredUsersByAge = this.props.users.filter(user => Object.keys(user.age).indexOf(this.state.inputAge) !== -1)
    console.log("ByAge", filteredUsersByAge)
    let filteredUsersByRace = this.props.users.filter(user => user.race.indexOf(this.state.inputRace) !== -1)
    console.log("ByRace", filteredUsersByRace)
  }

  render() {
    let userRace = this.props.users.map((user, id) => {
      return <option key={id} className="list-group-item border-0 p-1 mb-2 text-dark" value={this.state.inputRace} onChange={this.onChangeRace}>{user.race}</option>
    })

    return (
      <React.Fragment>
        <div className="form-group row d-block">
          <div className="input-group col-xs-2 center-block">
            <select title="Pick a race" className="custom-select bg-white text-dark w-100">
              <option className="text-center ">By race...</option>
              {userRace}
            </select>
          </div>
          <input className="form-control text-capitalize" value={this.state.inputName} onChange={this.onChangeName} placeholder="By name..."/>
          <input className="form-control mb-3 text-capitalize" value={this.state.inputAge} onChange={this.onChangeAge} placeholder="By age..."/>
          // <button className="btn btn-info" onClick={this.filterUser}>Find</button>
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

export default connect(mapStateToProps)(FilterProfiles)
