import { Link } from "react-router-dom";
import React from "react";

import "./index.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <Link to="/">
          <img className="Header__logo" alt="logo" />
        </Link>
        <nav>
          <Link className="Header--interactive" to="/">
            My restaurants
          </Link>
          <Link className="Header--interactive" to="/add-new">
            Add new restaurant
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
