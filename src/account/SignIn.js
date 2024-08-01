import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SignIn = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center">SignIn</h1>{' '}
              {/* Corrected typo */}
              <form action="/login" method="post" className="auth-form">
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
                  Login
                </button>
              </form>
              <p className="mt-3 text-center">
                Don&apos;t have an account? <a href="/register">SignUp</a>.{' '}
                {/* Escaped single quote */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
