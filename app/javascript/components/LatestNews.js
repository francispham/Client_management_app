import React, { Component } from "react";

class LatestNews extends Component {
  render () {
    return (
      <main className="LatestNews middle flex-column" style={{padding:"10em"}}>
          <h3 className="display-3">LATEST NEWS</h3>
          <span className="">
            <img src={require('../../assets/images/LatestNews.jpg')} style={{
              width: "100vh"
            }}/>
          </span>
      </main>
    )
  }
}

export { LatestNews };
