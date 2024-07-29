import './scss/styles.scss';
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <MainContent />
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
