import React from "react";
import Homepage from "./pages/homepage/homepage";
import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const resume = () => <div>new</div>;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/resume.pdf" component={resume} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
