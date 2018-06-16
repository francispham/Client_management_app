import React, { Component } from "react";
import {
  // When doing named imports, you can `as` to rename
  // an import in context of a file. As shown, below:
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { NavBar } from "./NavBar";
import HomePage from "./HomePage";
import { NotFoundPage } from "./NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )}
}

export default App;
