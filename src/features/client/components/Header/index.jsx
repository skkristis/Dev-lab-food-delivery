import { Link } from 'react-router-dom';
import React from 'react';

import './index.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <Link to="/">
          <img className="Header__logo" alt="logo" />
        </Link>
        <nav>
          <Link className="Header--interactive" to="/">
            My recipes
          </Link>
          <Link className="Header--interactive" to="/admin">
            Add new recipe
          </Link>
          <Link className="Header--interactive" to="/search">
            Let&apos;s find some recipes!
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
