import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer py-5">
        <div className="row justify-content-between">
          <div className="col-6 col-md-2 mb-3">
            <h5>Home</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/about-us"
                  className="nav-link p-0 text-body-secondary"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/contact-us"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/community"
                  className="nav-link p-0 text-body-secondary"
                >
                  Community
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faqs" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/services"
                  className="nav-link p-0 text-body-secondary"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h5>Company</h5>
                <Link
                  to="/services"
                  className="nav-link p-0 text-body-secondary"
                >
                  Services
                </Link>
                <Link
                  to="/solutions"
                  className="nav-link p-0 text-body-secondary"
                >
                  Solutions
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/about-us"
                  className="nav-link p-0 text-body-secondary"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/careers"
                  className="nav-link p-0 text-body-secondary"
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/contact-us"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h5>Blog/News</h5>
                <Link to="/nvidia" className="nav-link p-0 text-body-secondary">
                  Nvidia
                </Link>
                <Link to="/ubuntu" className="nav-link p-0 text-body-secondary">
                  Ubuntu
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="/hackernews"
                  className="nav-link p-0 text-body-secondary"
                >
                  Hackernews
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/spacex" className="nav-link p-0 text-body-secondary">
                  SpaceX
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/nasa" className="nav-link p-0 text-body-secondary">
                  Nasa
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-3">
            <form className="d-flex flex-column flex-sm-row align-items-center">
              <div className="me-3">
                <h5>Subscribe to our newsletter</h5>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
              <ul className="list-unstyled d-flex mb-0">
                <li className="ms-3">
                  <a
                    href="https://www.linkedin.com/company/ofido-hub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://github.com/ofidohub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://x.com/ofidohub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    href="https://gitlab.com/ofidohubvm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitLab"
                  >
                    <FontAwesomeIcon
                      icon={faGitlab}
                      size="1x"
                      className="fa-icon"
                    />
                  </a>
                </li>
              </ul>
            </form>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2024 Company, Inc. All rights reserved.</p>
            <div className="d-flex">
              <Link to="/" className="me-3 text-secondary">
                Privacy Policy
              </Link>
              <Link to="/" className="text-secondary">
                Terms and Conditions
              </Link>
              <Link to="/" className="text-secondary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
