import React, { Component } from "react";
import {
  Container, Row, Col, Collapse, Button, CardBody, Card
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class TeethCare extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render () {
    return (
      <div className="TeethCare middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">ORGANIC TEETH WHITENING</h4>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../assets/images/TeethCare.png')}
                    style={{ width: "50%" }}/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <p>
                  ST Medi Spa wants you to have healthy white teeth and gums. It is our
                  goal to perfect your smile. Imagine coming in for a single treatment
                  and emerging with the smile you’ve always wanted! With just one treatment
                  (~40 minutes) the results are immediate and dramatic.
                </p>
                <br/>
                <p>
                  We only use a <strong>100% organic, ZERO peroxide</strong> teeth whitening system.
                </p>
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
              <Col className="middle flex-column" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>FAQ</h4>
                <div>
                  <Button color="faded" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    Why do I need to have my teeth white?
                  </Button>
                  <Collapse isOpen={this.state.collapse}>
                    <Card>
                      <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </Col>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>Before & After</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export { TeethCare };
