import React, { Component } from "react"
import { addPost } from "../actions/postActions"
import { connect } from "react-redux"

class  AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      content: "",
      file: ""
    }

    this.addPost = this.addPost.bind(this)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeContent = this.onChangeContent.bind(this)
    this.onChangeFile = this.onChangeFile.bind(this)
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })
  }

  onChangeFile(e) {
    this.setState({
      file: e.target.value
    })
  }

  addPost(title, content, file, posted_at) {
    if(this.state.title != 0 && this.state.content != 0) {
        this.props.addPost(this.state.title, this.state.content, this.state.file, this.props.posts[0].posted_at)
    }

    this.setState({
      title: "",
      content: "",
      file: ""
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="container bg-white mw-100 p-0">

          <div className="col-md-12 col-md-offset-2 m-0">
            <h4 className="container p-2 font-weight-bold">Add a post</h4>

            <div className="form-row">
              <div className="form-group col-6 m-0">
                  <input value={this.state.title} placeholder="Title..." onChange={this.onChangeTitle} type="text" className="form-control mb-2" name="title" />
                  <div className="form-row">
                    <div className="form-group col-2">
                      <img className="mts-photo-icone" src="https://www.stetzcowatches.com/wp-content/uploads/2016/07/camera.png"/>
                    </div>
                    <div className="form-group col-10">
                      <input className="form-control col-xs-3 mt-1" placeholder="Enter your url..." type="url" value={this.state.file} onChange={this.onChangeFile}/>
                    </div>
                  </div>
              </div>

              <div className="form-group col-6 m-0">
                  <textarea value={this.state.content} placeholder="Content..." onChange={this.onChangeContent} rows="3" className="form-control" name="description" ></textarea>
              </div>
            </div>

            <div className="form-group col-12 pb-3">
              <button onClick={this.addPost} type="submit" className="btn btn-info">Add A Post</button>
            </div>
          </div>
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
    addPost: (title, content, file, posted_at) => { dispatch(addPost(title, content, file, posted_at)) }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
