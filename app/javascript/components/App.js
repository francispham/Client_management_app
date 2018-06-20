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
import { FindUs } from "./FindUs";
import { NotFoundPage } from "./NotFoundPage";
import { Footer } from "./Footer";

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

class App extends Component {
  render() {
    return (
      <Router basename="/">
      <div className="App">
        <NavBar/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/FindUs" component={FindUs} />
          <Route component={NotFoundPage} />
        </Switch>

        <Footer/>
      </div>
    </Router>
  )}
}

export default App;
