import React from "react";
import "./Home.css";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Hey there!</h1>
              <h1 className="greeting-sub">
                I'm <mark data-entity="person">Vivianna Cowan</mark>
              </h1>
              <h1 className="greeting-typewriter">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full-Stack Developer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("Software Engineer")
                      .pauseFor(200)
                      .deleteAll()
                      .typeString("UI/UX Designer")
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
              <span className="greeting-text-span subTitle">
                <div className="entities">
                  A <mark data-entity="noun">Data Science practitioner</mark>{" "}
                  who thrives to{" "}
                  <mark data-entity="verb">leverage Startups</mark> <br /> using
                  AI-based solutions along with{" "}
                  <mark data-entity="skill">Web Development</mark> <br /> and a
                  blend of <mark data-entity="freelance">UI/UX Designing</mark>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Home;
