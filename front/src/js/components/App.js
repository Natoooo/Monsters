import React, { Component } from 'react'
import SearchProfiles from "./SearchProfiles"
import Profiles from "./Profiles"
import NewsFeed from "./NewsFeed"
import { NavBar } from "./NavBar"
import AddPost from "./AddPost"

export class  App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div className="container m-0 mt-4 mw-100">
          <div className="row">
            <div className="col-2 text-center">
              <SearchProfiles />
            </div>
            <div className="col-7 text-center">
              <AddPost />
              <NewsFeed />
            </div>
            <div className="col-3 text-center">
              <Profiles />
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}
