import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HomePage = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid style={{height: "70vh"}}>
          <h1 className="display-3 d-flex justify-content-center">Welcome to ST Medi Spa</h1>
          <p className="lead d-flex justify-content-center">This Landing Page needed Nav Bar and Other React Components</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
