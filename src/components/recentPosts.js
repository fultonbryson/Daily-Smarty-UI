import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className='recent-posts'>
        <div className='recent-posts__wrapper'>
          <div className='recent-posts__header'>
            <ul>
              <li>Recent Post 0</li>
              <li>Recent Post 1</li>
              <li>Recent Post 2</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}