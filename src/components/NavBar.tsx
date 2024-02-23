import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/doc">Doc</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

export default NavBar;
