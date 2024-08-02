import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');

    // Mock sign-in logic
    const mockApiResponse = await mockSignInApi(email, password);

    if (mockApiResponse.success) {
      // If sign-in is successful, navigate to UserProfile
      navigate('/user-profile');
    } else {
      // Handle sign-in error
      setError(mockApiResponse.message);
    }
  };

  const mockSignInApi = (email, password) => {
    // Mock API response
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid email or password' });
        }
      }, 1000);
    });
  };

  return (
    <div className="signin-modal">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSignIn} className="auth-form">
                  <h2 className="card-title text-center">SignIn</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
  onClose: PropTypes.func.isRequired,
};

export default SignIn;
