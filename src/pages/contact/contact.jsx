import React from "react";
import "./contact.styles.scss";
import resume from "../../assests/resume.pdf";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <span className="background">{}</span>
        <span className="get-in">GET IN</span>
        <span className="touch">TOUCH</span>
      </div>
      <div className="contact-right">
        <div className="email">
          <h1 className="heading">Email</h1>
          <a href="">
            <span className="info">nitishkumarpatel07@gmail.com</span>
          </a>
        </div>
        <div className="github">
          <h1 className="heading">Github</h1>
          <a href="https://github.com/nitishpatel07" target="_blank">
            <span className="info">github.com/nitishpatel07</span>
          </a>
        </div>
        <div className="social">
          <h1 className="heading">Social</h1>
          <a href="https://www.linkedin.com/in/nitishpatel/" target="_blank">
            <span className="info">LinkedIn</span>
          </a>
          <a href="https://www.facebook.com/nitish.patel.9" target="_blank">
            <span className="info">Facebook</span>
          </a>
        </div>
        <div className="resume">
          <h1 className="heading">Resume</h1>
          <span className="info">
            You can find my resume
            <a className="here" href={resume} target="_blank">
              here
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
