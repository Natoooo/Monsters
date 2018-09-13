import React, { Component } from "react"
import { connect } from "react-redux"

export class Loading extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
    return (
      <React.Fragment>
          {
            this.props.loading == true ?
              <div className="mts-container-loading">
                <p className="mts-loading"></p></div> : ""
          }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Loading)
