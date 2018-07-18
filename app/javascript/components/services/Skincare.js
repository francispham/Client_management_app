import React, { Component } from "react";
import {
  Container, Row, Col, NavLink, Card, CardImg, CardText, CardBody, CardTitle,
  CardSubtitle, Button
} from 'reactstrap';


class Skincare extends Component {
  render () {
    return (
      <div className="Skincare middle flex-column" style={{
        paddingTop:"10em",
        paddingBottom:"10em"
      }}>
        <section className="container-fluid">
          <h3 className="display-3 middle">SKINCARE</h3>
          <Container fluid id="skincare" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        Some quick example text to build on the card
                        title and make up the bulk of the card's content.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export { Skincare };
