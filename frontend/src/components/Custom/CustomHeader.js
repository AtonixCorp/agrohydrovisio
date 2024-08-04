import React from 'react';
import { Link } from 'react-router-dom';

import './CustomHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AboutUs from '../home/AboutUs';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="hydrovisio-text">
            <span className="color1">H</span>
            <span className="color2">y</span>
            <span className="color3">d</span>
            <span className="color4">r</span>
            <span className="color5">0</span>
            <span className="color6">v</span>
            <span className="color7">i</span>
            <span className="color8">s</span>
            <span className="color9">i</span>
            <span className="color10">0</span>
          </span>
          <div className="d-flex align-items-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  <AboutUs />
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
