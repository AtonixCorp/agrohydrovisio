import React from 'react';

const NavBar = () => {
  return (
    <nav className="iconav">
      <a className="iconav-brand" href="#">
        <span className="icon icon-leaf iconav-brand-icon"></span>
      </a>
      <div className="iconav-slider">
        <ul className="nav nav-pills iconav-nav flex-md-column">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Overview"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-home"></span>
              <small className="iconav-nav-label d-md-none">Overview</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Order history"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-text-document"></span>
              <small className="iconav-nav-label d-md-none">History</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Fluid layout"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-globe"></span>
              <small className="iconav-nav-label d-md-none">Chemistry</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Icon-nav layout"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-area-graph"></span>
              <small className="iconav-nav-label d-md-none">Icon nav</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              title="Docs"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-list"></span>
              <small className="iconav-nav-label d-md-none">Docs</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Light UI"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <span className="icon icon-flash"></span>
              <small className="iconav-nav-label d-md-none">Light UI</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              title="Signed in as mdo"
              data-toggle="tooltip"
              data-placement="right"
              data-container="body"
            >
              <img
                src="../assets/img/avatar-mdo.png"
                alt=""
                className="rounded-circle img-fluid"
              />
              <small className="iconav-nav-label d-md-none">@mdo</small>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
