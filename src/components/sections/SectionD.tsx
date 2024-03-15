// src/components/sections/SectionB.tsx
import React from 'react';
import './SectionD.css';

interface SectionDProps {
  className?: string;
}

const SectionD: React.FC<SectionDProps> = ({ className }) => {
  return <div className={className}>Section B</div>;
};

export default SectionD;
