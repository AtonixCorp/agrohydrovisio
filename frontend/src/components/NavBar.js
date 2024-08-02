import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xxl navbar-dark bg-dark p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 w-100"
      aria-label="Seventh navbar example"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleXxl"
          aria-controls="navbarsExampleXxl"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleXxl">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bars"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {[
                  'Computing',
                  'Data Science',
                  'Artificial Intelligence',
                  'Physics',
                  'Another action',
                  'IoT',
                  'Quantum Computing',
                  'Hardware Computing',
                  'Chemistry',
                  'Web Development',
                  'Communication',
                  'Mathematics',
                  'Science',
                ].map((item) => (
                  <li key={item}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <ul className="nav flex-grow-1 justify-content-center">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link link-light px-2 active"
                aria-label="Home"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/community" className="nav-link link-light px-2">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/research" className="nav-link link-light px-2">
                Research
              </Link>
            </li>
          </ul>
          <form role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
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
            <a
              href="https://x.com/ofidohub"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 5px', color: '#1DA1F2' }}
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://gitlab.com/ofidohubvm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: '0 5px', color: '#FC6D26' }}
              aria-label="GitLab"
            >
              <FontAwesomeIcon icon={faGitlab} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
