import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import LanguageSelector from '../translator/LanguageSelector'; // Corrected import path

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-xxl navbar-dark navbar-custom text-white p-1 border border-primary-subtle rounded-3 w-100"
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
                    <a className="dropdown-item small" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link text-white dropdown-toggle"
                to="/projects"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </Link>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                {[
                  'IoT Solutions',
                  'Agriculture Technology',
                  'Oil Technology Research',
                  'AI and Machine Learning',
                  'Media and Entertainment Technology',
                ].map((item) => (
                  <li key={item}>
                    <a className="dropdown-item small" href="#">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/research">
                Research
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Blog
              </Link>
            </li>
          </ul>
          <form role="search" className="d-flex me-3">
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="d-flex align-items-center">
            <button
              className="btn btn-primary btn-sm btn-signin me-2"
              data-bs-toggle="modal"
              data-bs-target="#signInModal"
            >
              Sign In
            </button>
            <div className="vertical-line"></div>
            <button
              className="btn btn-primary btn-sm btn-signup"
              data-bs-toggle="modal"
              data-bs-target="#signUpModal"
            >
              Sign Up
            </button>
            <LanguageSelector />
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signInModal"
        tabIndex="-1"
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signInModalLabel">
                Sign In
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SignIn />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signUpModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
