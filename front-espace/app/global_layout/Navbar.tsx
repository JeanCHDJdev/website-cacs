
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/PoleEspace">Pôle Espace</a>
        </li>
        <li>
          <a href="/PoleHelics">Pôle HéliCS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
