import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <ul>
          <li><Link to="diet">Diet</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="anatomy">Physical Attributes</Link></li>
          <li><Link to="habitat">Habitat</Link></li>
          <li><Link to="look-like">Look Like</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
