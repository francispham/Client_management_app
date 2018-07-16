import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Laser extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render () {
    return (
      <div className="Laser middle flex-column" style={{paddingTop:"10em"}}>
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

        <section id="information" className="container-fluid color">
          <Container fluid style={{
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
            <Row>
              <Col>
                <div>
                  <Button color="light" id="toggler" style={{ marginBottom: '1rem' }}>
                    Why do I need to have LASER HAIR REMOVAL?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler1" style={{ marginBottom: '1rem' }}>
                    When do I need to have LASER HAIR REMOVAL?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                      <CardBody>
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </Col>
              <Col>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                          Alvin
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                          >
                            Mina
                          </NavLink>
                        </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggle('3'); }}
                          >
                            Karim
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../assets/images/TeethAlvin.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../assets/images/TeethMina.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../assets/images/TeethKarim.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export { Laser };
