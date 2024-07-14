import React from 'react';
import dotenv from 'dotenv';
import './App.css';
import Homepage from './pages/HomePage';

dotenv.config();

const apiUrl = process.env.REACT_APP_API_URL;

const App: React.FC = () => {
  return (
    <div className="App">
      <Homepage />
      {/* other components */}
      {/*  apiUrl */}
      <div>API URL: {apiUrl}</div>
    </div>
  );
};

export default App;
