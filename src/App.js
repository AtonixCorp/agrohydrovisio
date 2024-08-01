import './scss/styles.scss';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

const Signup = React.lazy(() => import('./account/SignUp'));
const Login = React.lazy(() => import('./account/SignIn'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
            <MainContent />
            <div style={{ height: '2px', backgroundColor: 'black' }}></div>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
