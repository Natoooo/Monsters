import React, { Component } from 'react'

class PostFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countLike: this.props.like
    }

    this.addALike = this.addALike.bind(this)
  }

  addALike() {
    this.setState({
      countLike: this.state.countLike + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container m-0 p-0 pb-3">
          <button type="button" className="btn btn-default btn-sm bg-info float-left" onClick={this.addALike}><img className="mts-icone-like" src="https://png.icons8.com/ios/1600/like-filled.png"/></button>
          <span className="float-right" >{this.state.countLike} {this.state.countLike < 2 ? "Like" : "Likes"}</span>
        </div>
      </React.Fragment>
    )
  }
}

export default PostFooter
