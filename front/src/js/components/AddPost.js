import React, { Component } from 'react'

export class  AddPost extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="container bg-white w-100 p-0">
          <div className="col-md-12 col-md-offset-2 m-0">

            <h4 className="container p-2 font-weight-bold">Add a post</h4>

            <div className="form-row">
              <div className="form-group col-6">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" name="title" />
              </div>

              <div className="form-group col-6">
                  <label htmlFor="content">Content</label>
                  <textarea rows="1" className="form-control" name="description" ></textarea>
              </div>
            </div>

            <div className="form-group">
              <img className="mts-photo-icone"src="https://cdn.icon-icons.com/icons2/588/PNG/512/camera_action_cam_shot_photography_icon-icons.com_55331.png"/>
              <div className="upload-btn-wrapper  d-inline">
                <button className="btn btn-info">Choose a file</button>
                <input type="file" name="myfile" />
              </div>
              <button type="submit" className="btn btn-dark">Add A Post</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
//             <div className="form-row p-1">
//               <div className="form-group col-md-6">

//               </div>
//               <div className="form-group p-2 d-inline col-md-6">

//               </div>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     )
//   }
//
// }
