import React, { Component } from 'react';
import logo from './logo.svg';
import bubble from './bubble.png';
import { Link } from 'react-router'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bubble} className="speech-bubble" height="300" />
        </header>
        <div classname="main-puff">
          <p className="App-intro">
            <Link to="about">About</Link>
            <Link to="gallery">Gallery</Link>
          </p>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
