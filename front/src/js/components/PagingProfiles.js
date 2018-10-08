import React, { Component } from 'react'
import { connect } from "react-redux"
import { nextPage, prevPage } from "../actions/userActions"

class PagingProfiles extends Component {
  constructor(props) {
    super(props)

    this.prevPage = this.prevPage.bind(this)
    this.nextPage = this.nextPage.bind(this)
  }

  prevPage() {
    this.props.prevPage({page: this.props.searchProfiles.page})
  }

  nextPage() {
    this.props.nextPage({page: this.props.searchProfiles.page})
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-group col-12 pb-1">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item" onClick={this.prevPage}><a className="page-link" href="#">prev</a></li>
              <li className="page-item" onClick={this.nextPage}><a className="page-link" href="#">next</a></li>
            </ul>
          </nav>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchProfiles: state.searchProfiles
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    nextPage: (next) => { dispatch(nextPage(next)) },
    prevPage: (prev) => { dispatch(prevPage(prev)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PagingProfiles)
