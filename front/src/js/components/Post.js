import React, { Component } from "react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

class Post extends Component {
  render() {
    return (
      <React.Fragment>
        <div key={this.props.id} data-id={this.props.id} className="container mw-100 bg-white pb-4 mb-3">
          <PostHeader postedAt={this.props.postedAt} userId={this.props.userId} postId={this.props.postId} userName={this.props.userName}/>
            <div className="form-group col-12 mb-0">
              <h4 className="p-2 font-weight-bold">{this.props.title}</h4>
            </div>
          <div className="form-group">
            <div className="container">{this.props.content}</div>
          </div>
          <div className="form-group bg-dark">
            <div className="container">
              {this.props.image != 0 ? <img className="mw-100" src={this.props.image}/> : ""}
            </div>
          </div>
          <div className="form-group mw-100 m-0">
            <PostFooter like={this.props.like}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Post
