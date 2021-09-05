import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <a className="btn" href="/vivi-cowan">
              <Link to="/vivi-cowan">Home</Link>
            </a>
          </li>
          <li>
            <a className="btn" href="/about">
              <Link to="/about">About Me</Link>
            </a>
          </li>
          <li>
            <a className="btn" href="/work">
              <Link to="/work">Work</Link>
            </a>
          </li>
          <li>
            <a className="btn" href="/contact">
              <Link to="/contact">Contact</Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
