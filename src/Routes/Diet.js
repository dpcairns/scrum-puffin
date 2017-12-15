import React, { Component } from 'react';
import { Link } from 'react-router';

class Diet extends Component {
  render() {
    return (
      <div className="diet-div">
        <ul>
          <li><Link to="diet">Diet</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="anatomy">Physical Attributes</Link></li>
          <li><Link to="science">Habitat</Link></li>
        </ul>
      </div>
    );
  }
}

export default Diet;
