// src/components/sections/SectionB.tsx
import React from 'react';
import './SectionC.css';

interface SectionCProps {
  className?: string;
}

const SectionC: React.FC<SectionCProps> = ({ className }) => {
  return <div className={className}>Section B</div>;
};

export default SectionC;
