import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import WebProjects from './components/webprojects'
import Attributions from './components/attributions'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<WebProjects></WebProjects>
          <Attributions></Attributions>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
