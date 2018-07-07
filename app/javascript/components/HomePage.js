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
      <Jumbotron className="d-flex flex-column justify-content-center align-items-center HomePage" fluid style={jumStyle}>
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

      <Jumbotron className="flex-column middle" fluid>
        <p className="lead">
          <span className="display-2">Welcome to our Spa</span>
        </p>
        <div className="container-fluid">
          <Container fluid id="about" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <div id="fade">
                  <strong>CONTOURING & CELLULITE TREATMENT</strong>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <div id="fade">
                  <strong>VOTIVA</strong>
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

      <section>
        <Container fluid id="services" style={{
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
                <strong>ORGANIC TEETH WHITENING</strong>
              </div>
            </Col>
            <Col style={{
              padding: "0px"
            }} sm={6} md={3}>
            <div id="fade">
              <strong>MANICURE</strong>
            </div>
          </Col>
          </Row>
        </Container>
      </section>

      <section >
        <Container fluid id="content" style={{
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
