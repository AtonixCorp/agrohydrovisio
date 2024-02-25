import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import './HomePage.css';

const Homepage: React.FC = () => {
  return (
    <div className="home-container">
      <Header className="home-header" />
      <Main className="home-main" />
      <Footer className="home-footer" />
    </div>
  );
};

export default Homepage;
