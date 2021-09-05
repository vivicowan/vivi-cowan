import React from "react";
import "./About.css";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <Fade>
      <div id="wrapper2">
        <div id="one2"></div>
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

        <div id="three2">3</div>

        <div id="eleven2"></div>
        <div id="twelve2">12</div>
        <div id="thirteen2">
          <div className="pixel-animation"></div>
        </div>

        <div id="sixteen2">16</div>
      </div>
    </Fade>
  );
};

export default About;
