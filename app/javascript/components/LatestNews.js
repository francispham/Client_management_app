import React, { Component } from "react";

class LatestNews extends Component {
  render () {
    return (
      <div className="LatestNews middle flex-column" style={{padding:"10em"}}>
          <h3 className="display-3">LATEST NEWS</h3>
          <span className="">
            <img src={require('../../assets/images/LatestNews.jpg')} style={{
              width: "100vh"
            }}/>
          </span>
      </div>
    )
  }
}

export { LatestNews };
