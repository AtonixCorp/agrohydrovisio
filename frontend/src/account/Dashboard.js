import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import NavItem from './NavItem';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ul className="nav flex-column">
        <NavItem title="Customers" iconHref="#people-circle" />
        {/* Add more NavItem components here if needed */}
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=""
            alt="User Avatar"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
