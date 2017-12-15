import React, { Component } from 'react';
import logo from './logo.svg';
import bubble from './bubble.png';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="inner-app">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
