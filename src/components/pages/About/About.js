import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";
import { FaCode, FaSearch, FaBolt } from "react-icons/fa";

const About = () => {
  return (
    <Fade>
      <div id="wrapper2">
        <div id="one2">About</div>
        <div id="two2">
          <h1 className="greeting-typewriter2">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Who is Vivi?")
                  .pauseFor(200)
                  .deleteAll()
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div id="three2">
          <div className="skill-box">
            <h3 className="skills">Skills:</h3>
            <div className="icons">
              <div className="one">
                <FaBolt />
                <p>Creativity</p>
              </div>
              <div className="two">
                <FaCode />
                <p>Web Development</p>
              </div>
              <div className="three">
                <FaSearch />
                <p>Research</p>
              </div>
            </div>
          </div>
        </div>

        <div id="eleven2"></div>
        <div id="twelve2">12</div>
        <div id="thirteen2">
          <div className="pixel-animation"></div>
        </div>

        <div id="sixteen2">Education</div>
      </div>
    </Fade>
  );
};

export default About;
