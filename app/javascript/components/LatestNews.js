import React, { Component } from "react";

class LatestNews extends Component {
  render () {
    return (
      <main className="LatestNews" style={{paddingTop:"10em"}}>
          <h3 className="display-3 d-flex justify-content-center">LATEST NEWS</h3>
          <p className="middle" fluid>
            <img src={require('../../assets/images/LatestNews.jpg')} style={{
              width: "100vh"
            }}/>
          </p>
      </main>
    )
  }
}

export { LatestNews };
