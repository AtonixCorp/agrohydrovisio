import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section bg-light p-2 rounded mb-2 shadow-sm">
      <section className="journey-section bg-white p-2 rounded shadow-sm">
        <h1 className="hero-section-title">
          <span className="color1">H</span>
          <span className="color2">y</span>
          <span className="color3">d</span>
          <span className="color4">r</span>
          <span className="color5">0</span>
          <span className="color6">v</span>
          <span className="color7">i</span>
          <span className="color8">s</span>
          <span className="color9">i</span>
          <span className="color10">0</span>
        </h1>

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
