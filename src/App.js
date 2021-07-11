import React from "react";
import Homepage from "./pages/homepage/homepage";
import "./App.scss";
import Resume from "./assests/resume.pdf";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const resume = () => (
  <div>
    <a href={Resume}>new</a>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/resume" component={resume} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
