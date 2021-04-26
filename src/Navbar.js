import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './assets/homeIcon.png';

function Navbar() {
  return (
    <div className="navbarContainer">
      <Link to="/" className="navbarStyle">
        <img src={homeIcon} className="navIcon" />
      </Link>
    </div>
  );
}

export default Navbar;
