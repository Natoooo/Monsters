import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchPosts } from "../actions/postActions"

class NewsFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("FETCH_POSTS", this.props.fetchPosts)
    this.props.fetchPosts()
  }

  render() {
    let posts = this.props.posts.map((post, id) => {
      return (
        <div key={id} className="container p-2 w-100">
          <div className="mts-posts-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <img className="responsive mw-100" src={post.image}/>
          </div>
        </div>
      )
    })
    return (
      <React.Fragment>
        <div className="container mw-100 bg-white p-3">
          <div className="row">
            <ul className="p-0">{posts}</ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchPosts: () => { dispatch(fetchPosts()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
