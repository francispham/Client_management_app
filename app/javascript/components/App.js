import React, { Component } from "react";
import {
  // When doing named imports, you can `as` to rename
  // an import in context of a file. As shown, below:
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )}
}

export default App;
