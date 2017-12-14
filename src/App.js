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
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="diet">Diet</Link></li>
          <li><Link to="anatomy">Anatomy</Link></li>
          <li><Link to="science">Science</Link></li>
        </ul>
          <img src={bubble} className="speech-bubble" height="300" />
        </header>
        <div className="App-intro">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
