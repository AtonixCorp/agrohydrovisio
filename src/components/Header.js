import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <header className="header">
      <ul className="nav flex-grow-1 justify-content-center">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link link-body-emphasis px-2 active"
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/community" className="nav-link link-body-emphasis px-2">
            Community
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/research" className="nav-link link-body-emphasis px-2">
            Research
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
