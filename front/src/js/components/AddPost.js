import React, { Component } from 'react'

export class  AddPost extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container bg-white w-100 p-0">
          <div className="col-md-12 col-md-offset-2 m-0">

            <h4 className="container p-2 font-weight-bold">Add a post</h4>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" name="title" />
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea rows="2" className="form-control" name="description" ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="image">upload image/video</label>
            </div>

            <div className="form-group p-2">
              <button type="submit" className="btn btn-dark">Add</button>
              <button className="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}
