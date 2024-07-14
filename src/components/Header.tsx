import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <div className="logo-title">
          <Link to="/">
            <img src="logo.png" alt="Robby Logo" className="logo" />
          </Link>
        </div>
        <div className="title">
          <h1 className="title">OFIDO TECH BLOG</h1> {/* Fixed here */}
        </div>
        <SearchBar />

        <nav className="navbar">
          <ul className="nav-list">
            <NavBar />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
