import React, { Component } from 'react'
import SearchProfiles from "./SearchProfiles"
import { Profile } from "./Profile"
import NewsFeed from "./NewsFeed"
import { NavBar } from "./NavBar"
import { AddPost } from "./AddPost"

export class  App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container m-0 mt-4 mw-100">
          <div className="row">
            <div className="col-2 text-center">
              <SearchProfiles />
            </div>
            <div className="col-8 text-center">
              <AddPost />
              <NewsFeed />
            </div>
            <div className="col-2 text-center">
              <Profile />
            </div>
          </div>
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}
