import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="computingDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Computing
            </a>
            <div className="dropdown-menu" aria-labelledby="computingDropdown">
              <a className="dropdown-item" href="#">
                Quantum Computing
              </a>
              <a className="dropdown-item" href="#">
                Hardware Computing
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Chemistry
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Physics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Web Development
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Data Science
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              IoT
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Communication
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Mathematics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Science
            </a>
          </li>
        </ul>
        <hr className="nav-bar divider" />
      </div>
    </nav>
  );
};

export default NavBar;
