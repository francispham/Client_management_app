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
import { About } from "./About";
import { NotFoundPage } from "./NotFoundPage";
import { Footer } from "./Footer";

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={About} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer/>
      </div>
    </Router>
  )}
}

export default App;
