import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="container">
      <div className="back"></div>
      <nav>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About Me</Link>
        </a>
        <a>
          <Link to="/work">Work</Link>
        </a>
        <a>
          <Link to="/contact">Contact</Link>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
