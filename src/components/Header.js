import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="logo-container d-flex align-items-center">
          <img src="/ofidohubreslogo.png" alt="Logo" className="logo" />
          <span className="hydrovisio-text">hydrovisio</span>
        </div>
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
        <div className="social-links d-flex">
          <a
            href="https://www.linkedin.com/company/ofido-hub/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 10px', color: '#0e76a8' }}
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/ofidohub"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: '0 5px', color: '#333' }}
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/signin"
              className="nav-link link-body-emphasis px-2 login-link"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className="nav-link link-body-emphasis px-2 signup-link"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
