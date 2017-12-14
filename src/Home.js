import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="diet">Diet</Link></li>
          <li><Link to="anatomy">Anatomy</Link></li>
          <li><Link to="science">Science</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
