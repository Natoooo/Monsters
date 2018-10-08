import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchUsers } from "../actions/userActions"

class FilterProfiles extends Component {
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


  render() {
    return (
      <React.Fragment>
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
  */}   </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUsers: (props) => { dispatch(fetchUsers(props)) }
  })
}

export default connect (null, mapDispatchToProps)(FilterProfiles)
