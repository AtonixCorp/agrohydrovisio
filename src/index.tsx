// src/index.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; // Import createRoot

const root = document.getElementById('root') as HTMLElement;
if (root !== null) {
  createRoot(root).render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  );
}

reportWebVitals;
