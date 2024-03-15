import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import './HomePage.css';
import Menu from '../components/Menu';

const Homepage: React.FC = () => {
  return (
    <div className="home-container" data-testid="home-container">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};

export default Homepage;
