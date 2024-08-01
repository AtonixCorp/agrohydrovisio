import React, { useState } from 'react';

import './CustomHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClose = () => setShowSignIn(false);
  const handleSignInShow = () => setShowSignIn(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleSignUpShow = () => setShowSignUp(true);

  return (
    <>
      <header className="header">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="hydrovisio-text">hydrovisio</span>
          <ul className="nav">
            <li className="nav-item">
              <button
                onClick={handleSignInShow}
                className="nav-link link-body-emphasis px-2 login-link btn btn-link"
              >
                SignIn
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={handleSignUpShow}
                className="nav-link link-body-emphasis px-2 signup-link btn btn-link"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* SignIn Modal */}
      <div
        className={`modal fade ${showSignIn ? 'show d-block' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showSignIn ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign In</h5>
              <button
                type="button"
                className="close"
                onClick={handleSignInClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* SignIn form goes here */}
              <form>
                <div className="form-group">
                  <label htmlFor="signin-username">Username:</label>
                  <input
                    type="text"
                    id="signin-username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signin-password">Password:</label>
                  <input
                    type="password"
                    id="signin-password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* SignUp Modal */}
      <div
        className={`modal fade ${showSignUp ? 'show d-block' : ''}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showSignUp ? 'block' : 'none' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="close"
                onClick={handleSignUpClose}
              >
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* SignUp form goes here */}
              <form>
                <div className="form-group">
                  <label htmlFor="signup-username">Username:</label>
                  <input
                    type="text"
                    id="signup-username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-email">Email:</label>
                  <input
                    type="email"
                    id="signup-email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-password">Password:</label>
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
