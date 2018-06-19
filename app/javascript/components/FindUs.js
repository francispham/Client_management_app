import React, { Component } from "react";
import { NavLink } from 'reactstrap';

class FindUs extends Component {
  render () {
    return (
      <main className="FindUs" style={{height: "40vh"}}>
        <div>
          <h2>Find Us</h2>
          <div>
            <h4>Hours</h4>
            <h4>Contact Information</h4>
            <h4>Social Media</h4>
            <h4>Location</h4>
          </div>
        </div>
      </main>
    )
  }
}

export { FindUs };
