// HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">WELCOME OFIDO TECH SOLUTIONS BLOG</h1>
      <p className="hero-description">
        Ofido Community is an inclusive online platform that unites young people
        from diverse backgrounds, fostering engaging conversations and
        collaborative learning
      </p>
      <Link to="/learn-more" className="hero-button">
        Learn More
      </Link>
    </section>
  );
};

export default HeroSection;
