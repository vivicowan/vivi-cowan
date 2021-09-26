import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";
import { FaCode, FaSearch, FaBolt } from "react-icons/fa";
import Resume from "../../../content/VC-Technical-Resume.pdf";

const About = (props) => {
  return (
    <Fade>
      <div id="wrapper2">
        <div id="one2">
          <div className="about-box">
            <h3 className="about-me">About Me:</h3>
            <div className="about-section">
              <p>
                I am a full-time student from San Diego. Currently a transfer
                student at the University of Texas in Arlington earning my
                degree in Software Engineering. I enjoy learning new things and
                take every challenge head-on. I have an eye for detail and a
                vivid imagination. I am very interested in the world of
                Full-Stack Web Development and UI/UX Designing and looking for
                an opportunity to start my career.
              </p>
            </div>
          </div>
        </div>
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
                <FaBolt size="2em" />
                <p>Creativity</p>
              </div>
              <div className="two">
                <FaCode size="2em" />
                <p>Web Development</p>
              </div>
              <div className="three">
                <FaSearch size="2em" />
                <p>Research</p>
              </div>
            </div>
          </div>
        </div>

        <div id="eleven2">
          <div className="buttons">
            <span className="click">
              <a className="click-btn" href="/contact">
                <Link to="/contact">Contact</Link>
              </a>
            </span>
            <span className="click">
              <a className="click-btn" href={Resume} download>
                Download Resume
              </a>
            </span>
          </div>
        </div>
        <div id="thirteen2">
          <div className="pixel-animation"></div>
        </div>

        <div id="sixteen2">
          {" "}
          <div className="school-box">
            <h3 className="school">Education:</h3>
            <div className="school-section">
              <p>
                University of Texas at Arlington: <br />
                <hr className="hr" />
                Granted Honors Scholarship <br />
                <mark data-entity="in progress">
                  Pursuing Bachelor of Science in Software Engineering (BSSE)
                </mark>{" "}
                <br />
              </p>
              <p>
                University of California, San Diego: <br />
                <hr className="hr" />
                Extension Online <br />
                <mark data-entity="complete">San Diego Coding Bootcamp</mark>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
