import React from "react";
import "./intro.styles.scss";
import uilogo from "../../assests/main logo.png";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro">
      <img className="image" src={uilogo} alt="displayimage" />
      <span className="name">Nitish Kumar Patel</span>
      {/* <span className="post">Front-End Developer</span> */}
      <Typical
        className="post"
        steps={["", 500, "Front-End Developer.", 1500]}
        loop={1}
        wrapper="p"
      />
      <div className="down">
        <Link
          activeClass="active"
          to="mine"
          spy={true}
          smooth={true}
          offset={-70}
          duration={750}
        >
          <FontAwesomeIcon
            icon={faChevronCircleDown}
            color="#ffffff"
            size="3x"
          />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
