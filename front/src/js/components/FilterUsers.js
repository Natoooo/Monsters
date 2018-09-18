import React, { Component } from 'react'
import { connect } from "react-redux"

class FilterUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputRace: "",
      inputName:"",
      inputAge:""
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
      this.setState({
        inputRace:e.target.value,
        inputName: e.target.value,
        inputAge: e.target.value
      })
  }

  render() {
    let userRace = this.props.usersList.map((user, id) => {
      return <option key={id} className="list-group-item border-0 p-1 mb-2 text-dark">{user.race}</option>
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
          <input className="form-control text-capitalize" value={this.state.input} onChange={this.onChange}  placeholder="By name..."/>
          <input className="form-control mb-3 text-capitalize" value={this.state.input} onChange={this.onChange}  placeholder="By age..."/>
          <button className="btn btn-dark">Find</button>
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

export default connect(mapStateToProps)(FilterUsers)
