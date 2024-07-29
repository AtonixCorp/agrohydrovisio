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
            <span className="ofidohubtechresearch-text">
              OfidohuhTechresearch
            </span>
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
      <div className="container d-flex justify-content-center">
        <ul className="nav">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link px-2 dropdown-toggle"
              id="computingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Computing
            </a>
            <ul className="dropdown-menu" aria-labelledby="computingDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Quantum Computing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hardware Computing
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Chemistry
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Physics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Web Development
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Data Science
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              IoT
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Communication
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Mathematics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Science
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
