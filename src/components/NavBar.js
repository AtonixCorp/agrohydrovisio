import React from 'react';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
