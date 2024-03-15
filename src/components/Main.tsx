// main.tsx
import React from 'react';
import HeroSection from './HeroSection';
import SectionA from './sections/SectionA';

const Main: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SectionA />
    </div>
  );
};

export default Main;
