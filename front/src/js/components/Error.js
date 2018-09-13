import React, { Component } from "react"
import { connect } from "react-redux"

export class Error extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div>
            {
              this.props.error == true ? <p className="mts-error">Sorry! There was an error
            </p> : ""
            }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(Error)
