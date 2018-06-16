import React, { Component } from "react";
import { NavLink } from 'reactstrap';

class About extends Component {
  render () {
    return (
      <main className="About">
        <h3>About St Medi Spa</h3>
        <NavLink href="/app">Employee Login</NavLink>
      </main>
    )
  }
}

export { About };
