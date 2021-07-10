import React, { useEffect } from "react";
import "./about.styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import resume from "../../assests/resume1.pdf";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="me" id="mine">
      <div data-aos="fade-right" className="me-left">
        <span className="me-background">{}</span>
        <span className="me-about">ABOUT</span>
        <span className="me-me">ME</span>
      </div>
      <div data-aos="fade-left" className="me-right">
        <p className="para">
          Hi, I'm Nitish! I am an aspiring web developer with a background in
          Electrical Engineering from Biju Pattnaik University of Technology,
          Odisha.
        </p>
        <p className="para">
          I have a passion of creating real elegant looking websites, always
          keeping it clean and simple with that added functionality of user
          interaction one would like to see.
        </p>
        <p className="para">
          I also run a page with the name of{" "}
          <span className="highlight">
            <a
              href="https://www.instagram.com/unfoldingindia.in/?hl=en"
              target="_blank"
            >
              Unfolding India
            </a>
          </span>
          , where I use my animation and graphic designing skills to visualize
          and explain complex data about India through maps, graphs and videos.
        </p>
        <p className="para">
          You can find my resume{" "}
          <span className="highlight">
            <a href={resume} target="_blank">
              here
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
