import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

import Landing from '../../assets/images/Landing1.jpg'

const jumStyle = {
  backgroundImage: `url(${Landing})`,
  height: "100vh"
};

class HomePage extends React.Component {
  render() {
    return (<div>
      <Jumbotron className="d-flex flex-column justify-content-center align-items-center HomePage" fluid="fluid" style={jumStyle}>
        <p className="lead">
          <img src={require('../../assets/images/logo.png')} style={{
              height: "50vh"
            }}/>
        </p>
        <p>
          <Button size="lg" style={{
              opacity: ".3",
              borderRadius: "0"
            }}>Learn More</Button>
        </p>
      </Jumbotron>

      <Jumbotron className="d-flex flex-column justify-content-center align-items-center" fluid="fluid">
        <p className="lead">
          <h1 className="display-2">Welcome to ST Medi Spa</h1>
        </p>
        <div className="container-fluid">
          <Container id="about" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <div id="fade">
                  <strong>SKIN CARE</strong>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <div id="fade">
                  <strong>LASER HAIR REMOVAL</strong>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <p>
          <Button size="lg" style={{
              opacity: ".3",
              borderRadius: "0"
            }}>Learn More</Button>
        </p>
      </Jumbotron>

      <section className="container-fluid">
        <Container id="services" style={{
            paddingTop: "1em"
          }}>
          <Row>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>SKIN CARE</strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>LASER HAIR REMOVAL</strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>MANICURE</strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>ORAGNIC TEETH WHITENING</strong>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-fluid">
        <Container id="content" style={{
            paddingTop: "1em"
          }}>
          <Row>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>NEW SERVICES
                </strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>USEFUL INFO</strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>WHO WE ARE</strong>
              </div>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div id="fade">
                <strong>NEWS & EVENT</strong>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>);
  };

}

export default HomePage;
