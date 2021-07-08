import React from "react";
import "./footer.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <p className="footer">
      Made with &nbsp;
      <FontAwesomeIcon icon={faHeart} color="#202020" />
      &nbsp; by Nitish
    </p>
  );
};

export default Footer;
