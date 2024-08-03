import './scss/styles.scss';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ThemeToggle from './components/ThemeToggle';
import NavBar from './components/NavBar';

import CustomHeader from './components/Custom/CustomHeader';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <div className="App">
      <NavBar />
      <CustomHeader />

      <ThemeToggle />

      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
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
