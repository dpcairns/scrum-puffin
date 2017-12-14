import React, { Component } from 'react';
import logo from './logo.svg';
import bubble from './bubble.png';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="nav-bubble">
            <div className="nav-bubble-text">
              <div>MEET MR. PUFFIN PUFFOUT</div>
              <div>OUR FAVORITE ANIMAL EVER</div>
              <div>HOWEVER, HE IS SAD AS HIS BROTHER MR PUFFYY IS MISSING, HELP HIM FIND HIS BRO!!!</div>
            </div>
          </div>
        </header>
        <div className="App-intro">

          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
