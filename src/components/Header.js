import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      <header className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo-container d-flex align-items-center">
            <img src="/ofidohubreslogo.png" alt="Logo" className="logo" />
            <span className="hydrovisio-text">hydrovisio</span>
          </div>
          <ul className="nav flex-grow-1 justify-content-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Community
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                Research
              </a>
            </li>
          </ul>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/ofido-hub/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: '#0e76a8' }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/ofidohub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 10px', color: '#333' }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>

          <ul className="nav">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 login-link"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 signup-link"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
