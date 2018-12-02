import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Software Engineer and not-completely-mediocre Snowboarder &amp; Mountain Biker. Pretty good at Monopoly
          <div className="emoji">
            🤖 &nbsp;🏔&nbsp;🧐&nbsp;
          </div>
        </div>
      </div>
    )
  }
}

export default About