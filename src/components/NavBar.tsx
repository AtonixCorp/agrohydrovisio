// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
