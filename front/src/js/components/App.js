import React, { Component } from 'react'
import SearchProfiles from "./SearchProfiles"
import Profiles from "./Profiles"
import NewsFeed from "./NewsFeed"
import AddPost from "./AddPost"
import NavBar from "./NavBar"

export class  App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container m-0 mw-100">
          <div className="row">
            <div className="col-2 text-center">
              <SearchProfiles />
            </div>
            <div className="col-8 text-center">
              <AddPost />
              <NewsFeed />
            </div>
            <div className="col-2 text-center">
              <Profiles />
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}
