import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="container">
      <div className="back"></div>
      <nav>
        <a href="/vivi-cowan">
          <Link to="/vivi-cowan">Home</Link>
        </a>
        <a href="/about">
          <Link to="/about">About Me</Link>
        </a>
        <a href="/work">
          <Link to="/work">Work</Link>
        </a>
        <a href="/contact">
          <Link to="/contact">Contact</Link>
        </a>
      </nav>
    </div>
  );
};

export default Menu;
