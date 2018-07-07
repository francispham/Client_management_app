import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';


class TeethCare extends Component {
  render () {
    return (
      <main className="TeethCare middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">ORGANICE TEETH WHITENING</h4>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "1em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../assets/images/STMediSpa-Skincare.png')}
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
              </Col>
            </Row>
          </Container>
        </div>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "1em" }}>
            <h4 className="middle">
              Information
            </h4>
          </Container>
        </div>

        <div className="container-fluid" style={{ paddingBottom: "5em" }}>
          <Container fluid style={{ paddingTop: "1em" }}>
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

export { TeethCare };
