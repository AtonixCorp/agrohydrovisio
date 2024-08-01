import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SignIn = ({ handleSubmit, onClose }) => {
  return (
    <div className="signin-modal">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="auth-form">
                  <h2 className="card-title text-center">SignIn</h2>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    SignIn
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn btn-secondary btn-block"
                  >
                    Close
                  </button>
                </form>
                <p className="mt-3 text-center">
                  Don&apos;t have an account? <a href="/register">SignUp</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignIn;
