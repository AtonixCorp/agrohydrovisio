import React from 'react';

const NavItem = ({ title, iconHref }) => {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="nav-link py-3 border-bottom rounded-0"
        title={title}
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <svg
          className="bi pe-none"
          width="24"
          height="24"
          role="img"
          aria-label={title}
        >
          <use xlinkHref={iconHref} />
        </svg>
      </a>
    </li>
  );
};

export default NavItem;
