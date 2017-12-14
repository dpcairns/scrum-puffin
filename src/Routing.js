import React, { Component } from 'react';
import Home from './Home.js';
import About from './About.js';
import App from './App.js';
import Gallery from './Gallery.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Routing extends Component {
  render() {
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="gallery" component={Gallery} />
      </Route>
    </Router>
    );
  }
}

export default Routing;
