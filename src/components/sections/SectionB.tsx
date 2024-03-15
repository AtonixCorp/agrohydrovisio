// src/components/sections/SectionB.tsx
import React from 'react';
import './SectionB.css';

interface SectionBProps {
  className?: string;
}

const SectionB: React.FC<SectionBProps> = ({ className }) => {
  return <div className={className}>Section B</div>;
};

export default SectionB;
