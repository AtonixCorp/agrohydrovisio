import React from 'react';
import './Main.css';

interface MainProps {
  className?: string;
}

const Main: React.FC<MainProps> = ({ className }) => {
  return (
    <main className={className}>
      <h1>Welcome to Robby's Portfolio</h1>
      <p>This is a simple portfolio website built using React and Express.</p>
      <p>Feel free to explore the projects and get in touch!</p>
    </main>
  );
};

export default Main;
