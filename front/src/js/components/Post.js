import React, { Component } from "react"
import { connect } from "react-redux"
import { removePost } from "../actions/postActions"
import { fetchUser } from "../actions/userActions"

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countLike: 0
    }

    this.removePost = this.removePost.bind(this)
    this.changeProfile = this.changeProfile.bind(this)
    this.addALike = this.addALike.bind(this)
  }

  removePost(postId) {
    console.log("FETCH_DELETE_POST", this.props.removePost)
    this.props.removePost(postId)
  }

  changeProfile(userId) {
    console.log("OPEN_PROFILE", userId)
    this.props.fetchUser(userId)
  }

  addALike() {
    this.setState({
      countLike: this.state.countLike + 1
    })
    console.log(this.state.countLike)
  }

  render() {
    return (
      <React.Fragment>
        <div key={this.props.id} data-id={this.props.id} className="container mw-100 bg-white pb-5 mb-3">
          <div className="form-row">
            <div className="form-group col-12 mb-0">
              <h4 className="p-2 font-weight-bold">{this.props.title}<span className="col-2" onClick={() => {this.removePost(this.props.postId)}} className="mts-delete-post">X</span></h4>
            </div>
          </div>
          <div className="form-group mb-0">
            <div className="container border-top border-bottom mts-profile-click" onClick={()=> {this.changeProfile(this.props.userId)}}><em>By {this.props.userName}</em></div>
          </div>
          <div className="form-group">
            <div className="container border-bottom"><em>{this.props.postedAt.substr(0, 10)}</em></div>
          </div>
          <div className="form-group">
            <div className="container">{this.props.content}</div>
          </div>
          <div className="form-group bg-dark">
            <div className="container">
              {this.props.image != 0 ? <img className="mw-100" src={this.props.image}/> : ""}
            </div>
          </div>
          <div className="form-group mw-100">
            <div className="container">
              <button type="button" className="btn btn-default btn-sm bg-info float-left" onClick={this.addALike}><img className="mts-icone-like" src="https://png.icons8.com/ios/1600/like-filled.png"/></button>
              <span className="float-right" >{this.state.countLike} {this.state.countLike < 2 ? "Like" : "Likes"}</span>
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

export default connect(null, mapDispatchToProps)(Post)
