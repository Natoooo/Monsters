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
    return (
      <React.Fragment>
        <div className="form-group row d-block">
          <div className="col-xs-2 center-block">
            <input className="form-control text-center" value={this.state.input} onChange={this.onChange} placeholder="By race..."/>
            <input className="form-control text-center" placeholder="By name..."/>
            <input className="form-control mb-3 text-center" placeholder="By age..."/>
            <button className="btn btn-dark">Find</button>
          </div>
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
