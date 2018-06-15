import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const HomePage = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome To ST Medi Spa</h1>
          <p className="lead">This Landing Page needed Nav Bar and Other React Components</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomePage;
