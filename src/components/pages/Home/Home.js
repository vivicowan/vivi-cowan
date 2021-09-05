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
                  <mark className="text">
                    A <mark data-entity="noun">Junior Engineer</mark> who has a
                    fascination for{" "}
                    <mark data-entity="verb">learning Technology</mark> <br />{" "}
                    along with working collaboratively on{" "}
                    <mark data-entity="skill">Web Development</mark> <br /> and{" "}
                    <mark data-entity="freelance">Designing Interfaces</mark>
                  </mark>
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
