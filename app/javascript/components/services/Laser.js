import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Laser extends Component {
  render () {
    return (
      <main className="Laser middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">LASER HAIR REMOVAL</h4>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../assets/images/HairRemoval.png')}
                    style={{ width: "50%" }}/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <h4>Small Treatment Area</h4>
                  <p>
                    For one of the following areas: areola, lip, chin, cheeks,
                    nose, nape/neck, sideburns, navel line.
                  </p><br/>
                <h4>Medium Treatment Area</h4>
                  <p>
                    For one of the following areas: bikini, underarms, full face,
                    hands, feet.
                  </p><br/>
                <h4>Large Treatment Area</h4>
                  <p>
                    For one of the following areas: shoulder, brazilian bikini,
                    chest, abdomen, upper back or lower back, arms (elbow up) or
                    (elbow down), leg (knee up) or (knee down)
                  </p><br/>
                <br/>
                <br/>
                <p>Contact us to schedule your appointment today! </p>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="container-fluid color">
          <Container fluid id="information" style={{
              paddingTop: "5em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="user-clock" /> &nbsp;
                  <strong>Treatment Time</strong>
                  <p>&nbsp;&nbsp;&nbsp;<small> ~40 minutes</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="home" /> &nbsp;
                  <strong>DownTime</strong>
                  <p>&nbsp;&nbsp;&nbsp;<small>None</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="calendar" /> &nbsp;
                  <strong>Sessions Required</strong>
                  <p>&nbsp;&nbsp;&nbsp;<small>1 or more</small></p>
                </div>
              </Col>
              <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div>
                <FontAwesomeIcon icon="meh" /> &nbsp;
                <strong>Discomfort Level</strong>
                <p>&nbsp;&nbsp;&nbsp;<small>None</small></p>
              </div>
            </Col>
            </Row>
          </Container>
        </section>

        <div className="container-fluid">
          <Container fluid style={{ padding: "5em" }}>
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>FAQ</h4>
              </Col>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>Before & After</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    )
  }
}

export { Laser };
