import React, { Component } from "react";

class Footer extends Component {
  render () {
    return (
      <main className="Footer d-flex flex-column justify-content-center align-items-center" style={{height: "40vh"}}>
        <div className="container">
          <div className="row align-items-start justify-content-around">
            <div className="column">
              <img src={require('../../assets/images/logo.png')} style={{height: "90px"}} />
            </div>
            <div className="column">Social Media: Facebook, Instagram...</div>
            <div className="column">Email</div>
          </div>
        </div>
        <div className="display-4">Google Map</div>
      </main>
    )
  }
}

export { Footer };
