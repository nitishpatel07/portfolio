import React from "react";
import Projects from "./pages/projects/projects";
import Intro from "./pages/intro/intro";
import Contact from "./pages/contact/contact";
import Footer from "./pages/footer/footer";
import About from "./pages/about/about";
import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const resume = () => (
  <div>
    <h1>resume</h1>
  </div>
);

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
