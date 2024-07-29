import './scss/styles.scss';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analytics';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

const MainContent = lazy(() => import('./components/MainContent'));

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ height: '2px', backgroundColor: 'black' }}></div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* Add other routes here */}
          </Routes>
        </Suspense>
        <div>
          <div style={{ height: '2px', backgroundColor: 'black' }}></div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
