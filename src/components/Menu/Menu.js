import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="container">
      <div className="title">A Sliding Menu Demo</div>
      <div className="menu-icon" id="menu-icon">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="menu">
        <div className="menu-wrap"></div>
        <div className="menu-overlay">
          <div className="menu-item">
            <a>
              <Link to="/">Home</Link>
            </a>
          </div>
          <div className="menu-item">
            <a>
              <Link to="/about">About Me</Link>
            </a>
          </div>
          <div className="menu-item">
            <a>
              <Link to="/work">Work</Link>
            </a>
          </div>
          <div className="menu-item">
            <a>
              <Link to="/contact">Contact</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
