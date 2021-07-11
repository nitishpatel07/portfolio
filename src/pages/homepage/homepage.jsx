import React from "react";
import Projects from "../projects/projects";
import Intro from "../intro/intro";
import About from "../about/about";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
