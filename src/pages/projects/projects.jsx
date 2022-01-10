import React from "react";
import "./projects.styles.scss";
import ProjectItem from "../projects-item/projectsitem";
import PORTFOLIO_PROJECTS from "./Projects.data";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: PORTFOLIO_PROJECTS,
    };
  }
  render() {
    return (
      <div className="projects">
        <div className="heading">
          <span className="heading-background">{}</span>
          <span className="heading-about">SELCTED</span>
          <span className="heading-me">PROJECTS</span>
        </div>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <ProjectItem key={id} {...otherSectionProps}></ProjectItem>
        ))}
      </div>
    );
  }
}

export default Projects;
