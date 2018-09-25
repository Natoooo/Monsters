import React, { Component } from "react"
import { connect } from "react-redux"

export class ErrorMessage extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.error == true ?
            <div className="mts-container-error">
              <p className="mts-error">Sorry! There was an error</p></div> : ""
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(ErrorMessage)
