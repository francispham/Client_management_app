import React, { Component } from "react";
import { NavLink, Container, Row, Col } from 'reactstrap';

class About extends Component {
  render () {
    return (
      <main className="About container-fluid flex-column">
        <Container fluid>
          <h3 className="display-3">About St MEDI</h3>
          <Row>
            <Col className="image">
              <img src={require('../../assets/images/about.jpg')} style={{
                width: "100%",
                marginRight: "1em",
                padding:"2em"
              }}/>
            </Col>
            <Col style={{
              padding:"2em",
              marginTop:"5em"
            }}>
              <p>
                ST MEDI is a new special medical style skin and teeth care center
                serving men and women interested in maintaining their overall healthy
                look while also targeting the effects of aging. Our services focus on
                skin rejuvenation or photo facials, acne therapy, sunspot or hyperpigmentation,
                chemical peels for different skin type, optimal facials, microdermabrasion,
                hair removal and teeth whitening delivered in a comfortable environment
                designed to pamper and relax while also delivering effective results.
              </p>
              <br/>
              <p>
                We provide high quality treatments with consultation at a cost point
                that allows anyone to utilize our services, combined with a customized,
                personal experience that will delight and surprise.
              </p>
              <br/>
              <br/>

              <p><big>About Esthetician Expertise</big></p>
              <br/>

              <p>
                Your ST MEDI esthetician will be your trusted partner to assist you
                on your journey toward attaining confidence in your skin’s appearance.
                Our knowledgeable and trusted estheticians are experts in using our
                state-of-the-art technology and techniques. Our estheticians are all
                trained in hair removal and skin rejuvenation. Each esthetician is state
                board licensed and has extensive IPL and laser training. Additionally,
                estheticians receive continuing education on a regular basis.
              </p>
            </Col>
          </Row>
        </Container>
        <hr/>
        <NavLink className="d-flex justify-content-end" href="/app"><small>Employee Login</small></NavLink>
      </main>
    )
  }
}

export { About };
