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
    <div className="container">
      <footer className="footer py-5">
        <div className="row justify-content-between">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="index.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="about.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="services.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Services
                </a>
                <ul className="nav flex-column ms-3">
                  <li className="nav-item mb-2">
                    <a
                      href="iot.html"
                      className="nav-link p-0 text-body-secondary"
                    >
                      IoT Solutions
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="agriculture.html"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Agriculture Technology
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="oil.html"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Oil Technology Research
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="ai.html"
                      className="nav-link p-0 text-body-secondary"
                    >
                      AI and Machine Learning
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a
                      href="media.html"
                      className="nav-link p-0 text-body-secondary"
                    >
                      Media and Entertainment Technology
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="solutions.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="blog.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Blog/News
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="careers.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Careers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="contact.html"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what&apos;s new and exciting from us.</p>
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
            </form>
          </div>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a
                href="https://www.linkedin.com/company/ofido-hub/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: '0 10px', color: '#0e76a8' }}
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
                style={{ margin: '0 5px', color: '#333' }}
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
                style={{ margin: '0 5px', color: '#1DA1F2' }}
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
                style={{ margin: '0 5px', color: '#FC6D26' }}
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
