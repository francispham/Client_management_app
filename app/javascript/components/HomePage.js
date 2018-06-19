import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HomePage = (props) => {
  return (
    <div>
      <Jumbotron className="d-flex flex-column justify-content-center align-items-center" fluid style={{height: "90vh"}}>
          <h1 className="display-4">Welcome to ST Medi Spa</h1>
          <p className="lead">This Landing Page needed Nav Bar and Other React Components</p>
          <p><Button size="lg" style={{opacity:".3"}}>Learn More</Button></p>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
