import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <>
      <header className="Header">
        <Link to="/">Audubon Society</Link>
      </header>
    </>
  );
}

export default Header;
