import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class BodyFX extends Component {
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
      <div className="BodyFX middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">BODY FX</h4>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../../assets/images/TeethCare.png')}
                    style={{ width: "50%" }}/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <p>
                  Starting with healthy teeth and gums, we can perfect your smile
                  through our Organic Teeth whitening treatment with zero peroxide.
                  One of the first things people notice is your smile. A beautiful
                  smile can brighten your life every day, professionally and socially.
                  And unlike plastic surgery, cosmetic dentistry isn't a major operation.
                  Imagine coming in for a single appointment or two and emerging
                  with the smile you've always wanted...no pain, no time taken away
                  from your busy life. The results are immediate and dramatic.
                </p>
                <p>
                  There are many ways we can give you a youthful, attractive,
                  natural looking smile! If you feel that chipped, stained, or
                  crooked teeth are "hiding" the real you, then smile design might
                  be something that you would like to consider. You can feel relax
                  and get excellent service, we know that going to the dentist
                  can be expensive and scary for some people, so we have include
                  friendly and attentive stuff to cater to your needs once you step
                  into.
                </p>
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
              <Col className="middle flex-column" sm={12} md={6} style={{ padding:"0px" }}>
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
                    Why do I need to have my teeth white?
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
                    When do I need to have my teeth white?
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
                          Client I
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                          >
                            Client II
                          </NavLink>
                        </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggle('3'); }}
                          >
                            Client III
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../../assets/images/TeethAlvin.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../../assets/images/TeethMina.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../../assets/images/TeethKarim.jpg')}
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

export { BodyFX };
