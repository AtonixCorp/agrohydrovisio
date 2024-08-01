import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section bg-light p-2 rounded mb-2 shadow-sm">
      <section className="journey-section bg-white p-2 rounded shadow-sm">
        <h1 className="mb-2">Welcome to Hydrovisio</h1>

        <p>
          Whether you’re a seasoned pro or a curious beginner,{' '}
          <strong>Hydrovisio</strong> is your tech compass. Buckle up, explore,
          and let’s geek out together!
        </p>
        <p>
          👉{' '}
          <a href="#" className="btn btn-primary">
            Start Exploring
          </a>{' '}
          👈
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
