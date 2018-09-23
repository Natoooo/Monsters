import React, { Component } from "react"
import { connect } from "react-redux"

export class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="container p-0 " data-id={this.props.id}>
          <h5 className="container p-2 font-weight-bold">{this.props.name} {this.props.id}Profile</h5>
          <div className="container mw-100 p-0">
            <div className="form-group">
              <img className="col-12" src={this.props.image}/>
            </div>
            <div className="form-group">
              <div><b>Age: </b>{this.props.age}</div>
            </div>
            <div className="form-group">
              <div><b>Race: </b>{this.props.race}</div>
            </div>
            <div>
              <div><b>Joined at: </b>{this.props.joined_at.substring(0, 10)}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
