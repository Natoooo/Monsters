import React, { Component } from "react"
import { connect } from "react-redux"

export class Profile extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let users = this.props.users.map((user, id) => {
      return (
        <div key={id} data-id={user.id} className="container mw-100 p-0">
          <div className="form-group">
            <img className="col-12" src={user.image}/>
          </div>
          <div className="form-group">
            <div><b>Name: </b>{user.name}</div>
          </div>
          <div className="form-group">
            <div><b>Race: </b>{user.race}</div>
          </div>
          <div>
            <div><b>Joined at: </b>{user.joined_at.substring(0, 10)}</div>
          </div>
          <div className="form-group">
            <div>{user.posts}</div>
          </div>
        </div>
      )
    })
    return (
      <React.Fragment>
        <div className="container bg-white">
          <h5 className="container p-2 font-weight-bold">Profile</h5>
          <div>{users}</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
