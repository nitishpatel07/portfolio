import React from "react";
import Projects from "./pages/projects/projects";
import Intro from "./pages/intro/intro";
import Contact from "./pages/contact/contact";
import Footer from "./pages/footer/footer";
import About from "./pages/about/about";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
