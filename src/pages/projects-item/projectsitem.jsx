import React, { useEffect } from "react";
import "./projectsitem.styles.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectItem = ({
  imageSrc,
  title,
  about,
  stack,
  description,
  linkUrl,
}) => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div data-aos="fade-up" className="preview-item">
      <div className="top">
        {" "}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <img className="image" src={imageSrc} alt="" />
        </a>
      </div>

      <div className="bottom">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <span className="name">{title}</span>
        </a>

        <div className="details-footer">
          <span className="about">
            {about} • {stack}
          </span>
        </div>
        <div className="descriptions">{description}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
