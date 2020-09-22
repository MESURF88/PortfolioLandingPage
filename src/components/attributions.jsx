import React, { Component } from 'react'
import React_Logo from '../snippets/react.png';

export default class Attributions extends Component {
  render() {
    return (
      <div>
		<div className="colorlib-narrow-content">
            <div className="project">
              <p>Attribution:</p>
              <small>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
              <br></br>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></small>
            </div>
            <div className="project">
              Made with React <img  style={{width: '5%', height: '15%'}} src={React_Logo} alt="react_icon"/> 
            </div>
        </div>
      </div>
    )
  }
}
