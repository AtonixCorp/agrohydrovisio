// Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/chemistry">Chemistry</Link>
        </li>
        <li>
          <Link to="/physics">Physics</Link>
        </li>
        <li>
          <Link to="/datasource">Data Source</Link>
        </li>
        <li>
          <Link to="/developer">Developer</Link>
        </li>
        <li>
          <Link to="/Datavisualization">Datavisualization</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Menu;
