// Header.tsx
import React from 'react';
import './Header.css';
import NavBar from './NavBar';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <img src="logo.png" alt="Logo" className="logo" />
      <h1>Robby</h1>
      <NavBar />
    </header>
  );
};

export default Header;
