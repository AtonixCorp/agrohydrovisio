import React from 'react';
import './Header.css';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Robby</h1>
      <NavBar />
    </header>
  );
}

export default Header;