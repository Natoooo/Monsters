import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchPosts } from "../actions/postActions"
import Post from "./Post"

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
      return <Post key={id} id={id} postId={post.id} userId={post.user.id} title={post.title} userName={post.user.name} postedAt={post.posted_at} content={post.content} image={post.image} like={post.like} comment={post.comment}/>
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
    fetchPosts: () => { dispatch(fetchPosts()) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)
