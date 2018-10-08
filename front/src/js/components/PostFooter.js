import React, { Component } from 'react'

class PostFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      countLike: this.props.like
    }

    this.addALike = this.addALike.bind(this)
    this.seeComments = this.seeComments.bind(this)
  }

  addALike() {
    this.setState({
      countLike: this.state.countLike + 1
    })
  }

  seeComments() {
    return <div className="container"><div>{this.props.comment}</div></div>
  }

  render() {
    return (
      <React.Fragment>
        <div className="container m-0 p-0 pb-3">~
          <div className="float-left" >{this.state.countLike} {this.state.countLike < 2 ? "Like" : "Likes"}</div>
          <div className="float-right" onClick={this.seeComments}>comments</div>
        </div>
        <div className="container m-0 p-0 pb-3 border-top pt-3">
          <button type="button" className="btn btn-default bg-light mr-4 border" onClick={this.addALike}><img className="mts-icone-like" src="https://png.icons8.com/ios/1600/like-filled.png"/>like</button>
          <button type="button" className="btn btn-default bg-light ml-5 border" onClick={this.addAComment}><img className="mts-icone-comment" src="https://png2.kisspng.com/20180410/hrw/kisspng-computer-icons-menu-symbol-data-download-comment-5acd5ba9847450.6741856515234077855425.png"/>comment</button>
        </div>
      </React.Fragment>
    )
  }
}

export default PostFooter
