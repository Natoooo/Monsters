import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchPosts, removePost } from "../actions/postActions"

class NewsFeed extends Component {
  constructor(props) {
    super(props)

    this.removePost = this.removePost.bind(this)
  }

  componentDidMount() {
    console.log("FETCH_POSTS", this.props.fetchPosts)
    this.props.fetchPosts()
  }

  removePost(postId) {
    console.log("FETCH_DELETE_POST", this.props.removePost)
    this.props.removePost(postId)
  }

  render() {
    let posts = this.props.posts.map((post, id) => {
      return (
        <div key={id} data-id={id} className="container mw-100 bg-white">
          <div className="form-row">
            <div className="form-group col-12 mb-0">
              <h4 className="p-2 font-weight-bold">{post.title}<span className="col-2" onClick={() => {this.removePost(post.id)}} className="mts-delete-post">X</span></h4>
            </div>
          </div>
          <div className="form-group">
            <div className="container border-top border-bottom"><em>By {post.user.name}</em></div>
          </div>
          <div className="form-group">
            <div className="container">{post.content}</div>
          </div>
          <div className="form-group bg-dark mb-0">
            {post.image != 0 ? <img className="mw-100" src={post.image}/> : ""}
          </div>
          <div className="form-group p-2">
            <span>{post.posted_at.substr(0, 10)}</span>
          </div>
        </div>
      )
    }).reverse()
    return (
      <React.Fragment>
        <ul className="container mw-100 p-0">{posts}</ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchPosts: () => { dispatch(fetchPosts()) },
    removePost: (postId) => { dispatch(removePost(postId))}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
