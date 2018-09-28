import React, { Component } from 'react'
import { connect } from "react-redux"
import { removePost } from "../actions/postActions"
import { fetchUser } from "../actions/userActions"

class PostHeader extends Component {
  constructor(props) {
    super(props)

    this.removePost = this.removePost.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
  }

  removePost(postId) {
    console.log("FETCH_DELETE_POST", this.props.removePost)
    this.props.removePost(postId)
  }

  changeProfile(userId) {
    console.log("OPEN_PROFILE", userId)
    this.props.fetchUser(userId)
  }

  render() {
    return (
      <React.Fragment>
        <div className="container border-bottom  p-0 ">
          <div className="row">
              <div className="col">
                <span className="float-left"><em>{this.props.postedAt.substr(0, 10)}</em></span>
              </div>
              <div className="col mts-profile-click">
                <span onClick={()=> {this.changeProfile(this.props.userId)}}><em>By {this.props.userName}</em></span>
              </div>
              <div className="col">
                <span className="float-rigth" onClick={() => {this.removePost(this.props.postId)}} className="mts-delete-post"><em>X</em></span>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    removePost: (postId) => { dispatch(removePost(postId)) },
    fetchUser: (userId) => { dispatch(fetchUser(userId)) }
  })
}

export default connect(null, mapDispatchToProps)(PostHeader)
