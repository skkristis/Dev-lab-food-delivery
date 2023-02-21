import { Link } from "react-router-dom";
import React from "react";

import logo from "../../images/logo.svg";
import "./index.css";

function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <Link to="/">
          <img className="Header__logo" src={logo} alt="logo" />
        </Link>
        <nav>
          <Link className="Header--interactive" to="/">
            My recipes
          </Link>
          <Link className="Header--interactive" to="/add-new">
            Add new recipe
          </Link>
          <Link className="Header--interactive" to="/search">
            Let's find some recipes!
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
