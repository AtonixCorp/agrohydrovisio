import './scss/styles.scss';
import React, { Suspense, useState, startTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import MyComponent from './components/MyComponent';
import ThemeToggle from './components/ThemeToggle';
import NavBar from './components/NavBar';

const SignupLazy = React.lazy(() => import('./account/SignUp'));
const SignInLazy = React.lazy(() => import('./account/SignIn'));

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleOpenSignIn = () => {
    startTransition(() => {
      setIsSignInOpen(true);
      navigate('/signin');
    });
  };

  const handleCloseSignIn = () => {
    startTransition(() => {
      setIsSignInOpen(false);
      navigate('/');
    });
  };

  const handleOpenSignUp = () => {
    startTransition(() => {
      setIsSignUpOpen(true);
      navigate('/signup');
    });
  };

  const handleCloseSignUp = () => {
    startTransition(() => {
      setIsSignUpOpen(false);
      navigate('/');
    });
  };

  return (
    <div className="App">
      <Header />
      <ThemeToggle /> {/* Move ThemeToggle outside of Routes */}
      <Routes>
        <Route path="/" element={<MyComponent />} />
        {isSignUpOpen && <Route path="/signup" element={<SignupLazy />} />}
        {isSignInOpen && <Route path="/signin" element={<SignInLazy />} />}
      </Routes>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <HeroSection />
          <MainContent />
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
