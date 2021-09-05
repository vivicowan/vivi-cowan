import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Toggle from "../Toggle/Toggle";
/* eslint-disable jsx-a11y/accessible-emoji */

const Footer = () => {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">Made by Vivi</p>
        <Toggle />
      </Fade>
    </div>
  );
};

export default Footer;
