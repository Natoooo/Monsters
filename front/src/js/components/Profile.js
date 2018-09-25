import React, { Component } from "react"
import Loading from "./Loading"
import ErrorMessage from "./Error"
import { connect } from "react-redux"

export class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.profile).length > 0  ? (
        <div className="container p-0 position-relative" data-id={this.props.profile.id}>
          <Loading />
          <ErrorMessage />
          <h5 className="container p-2 font-weight-bold">{this.props.profile.name} Profile</h5>
          <div className="container mw-100 p-0">
            <div className="form-group">
              <img className="col-12" src={this.props.profile.image}/>
            </div>
            <div className="form-group">
              <div><b>Age: </b>{this.props.profile.age}</div>
            </div>
            <div className="form-group">
              <div><b>Race: </b>{this.props.profile.race}</div>
            </div>
            <div className="form-group pb-2">
              <div><b>Joined at: </b>{this.props.profile.joined_at.substring(0, 10)}</div>
            </div>
          </div>
        </div>) : <div className="container p-0 "></div>}
      </React.Fragment>
    )
  }
}
