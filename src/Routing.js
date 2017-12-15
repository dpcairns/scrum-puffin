import React, { Component } from 'react';
import Home from './Home.js';
import App from './App.js';
import About from './About.js';
import Gallery from './Routes/Gallery.js';
import Diet from './Routes/Diet.js';
import Anatomy from './Routes/Anatomy.js';
import Science from './Routes/Science.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Routing extends Component {
  render() {
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="gallery" component={Gallery} />
        <Route path="anatomy" component={Anatomy} />
        <Route path="diet" component={Diet} />
        <Route path="science" component={Science} />
      </Route>
    </Router>
    );
  }
}

export default Routing;
