import React, { Component } from 'react';
import { Link } from 'react-router';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="diet">Diet</Link></li>
        <li><Link to="gallery">Gallery</Link></li>
        <li><Link to="anatomy">Physical Attributes</Link></li>
        <li><Link to="science">Habitat</Link></li>
        <li><Link to="look-like">Look Like</Link></li>
      </ul>
      </div>
    );
  }
}

export default Gallery;
