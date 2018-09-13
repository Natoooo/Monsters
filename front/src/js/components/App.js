import React, { Component } from 'react'
import { SearchProfiles } from "./SearchProfiles"
import { Profile } from "./Profile"
import { NewsFeed } from "./NewsFeed"
import { NavBar } from "./NavBar"

export class  App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mts-columns">
          <SearchProfiles />
          <NewsFeed />
          <Profile />
        </div>
        {this.props.children}
      </React.Fragment>
    )
  }
}
