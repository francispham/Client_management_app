import React, { Component } from "react";
import { NavLink } from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

class FindUs extends Component {
  render () {
    return (
      <main className="FindUs">
        <section className="container-fluid">
          <h3 className="display-3">Find Us</h3>
          <Container fluid id="FindUs" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div id="fade">
                  <strong>Hours</strong>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div id="fade">
                  <strong>Contact Information</strong>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div id="fade">
                  <strong>Social Media</strong>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div id="fade">
                  <strong>Location</strong>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    )
  }
}

export { FindUs };
