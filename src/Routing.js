import React, { Component } from 'react';
import App from './App.js';
import Gallery from './Routes/Gallery.js';
import Home from './Routes/Home.js';
import Diet from './Routes/Diet.js';
import LookLike from './Routes/LookLike.js';
import Anatomy from './Routes/Anatomy.js';
import Habitat from './Routes/Habitat.js';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

class Routing extends Component {
  render() {
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="gallery" component={Gallery} />
        <Route path="anatomy" component={Anatomy} />
        <Route path="look-like" component={LookLike} />
        <Route path="diet" component={Diet} />
        <Route path="habitat" component={Habitat} />
      </Route>
    </Router>
    );
  }
}

export default Routing;
