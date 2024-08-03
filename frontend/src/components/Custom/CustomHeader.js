import React from 'react';
import { Link } from 'react-router-dom';

import './CustomHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="hydrovisio-text">hydrovisio</span>
          <div className="d-flex align-items-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
