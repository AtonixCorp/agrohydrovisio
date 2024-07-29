import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer py-5 border-top">
        <div className="footer-content">
          <div className="footer-bottom d-flex justify-content-center align-items-center py-4 my-4 border-top">
            <p>&copy; 2024 Ofidohub Technology Research, Inc.</p>
            <ul className="list-unstyled d-flex ms-3">
              <li>
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
