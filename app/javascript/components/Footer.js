import React, {Component} from "react";
import { Container, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" style={{
        height: "100vh",
        paddingTop: "40px"
      }}>
        <div className="middle flex-column" style={{ height: "25%" }}>
          <h3>920 Seymour Street, Vancouver BC</h3>
          <h3>V6B 3L9 Canada</h3>
        </div>

        <div className="container-fluid">
          <Row className="">
            <Col className="HorLogo middle">
                <img src={require('../../assets/images/LogoHorizantal.png')} style={{
                  width: "35vh"
                }}/>
            </Col>

            <Col className="Social display-4 middle color">
              <a target = "_blank" href = 'https://www.facebook.com/STMEDISPA/'>
                <FontAwesomeIcon icon={['fab', 'facebook']} pull="right" href="www.facebook.com"/>
              </a>
              <a target = "_blank" href = 'https://www.instagram.com/stmedispa/'>
                <FontAwesomeIcon icon={['fab', 'instagram']} pull="right"/>
              </a>
                <FontAwesomeIcon icon={['fab', 'google']} pull="right"/>
            </Col>

            <Col className= "middle">
              <a href = 'mailto:info@stmedispa.com'>
                <h2>
                  <FontAwesomeIcon icon='envelope' className="Mail color"/> &nbsp;
                  info@stmedispa.com
                </h2>
              </a>
            </Col>
          </Row>
        </div>
        <div className="middle" style={{paddingTop:"40px"}}>
          <h4>
            © 2018  |  PRIVACY POLICY
          </h4>
        </div>

        <div className="display-4 middle flex-column" style={{ height: "50%" }}>
          <div>Google Map</div>
          <div className="color">
            <FontAwesomeIcon icon="check-square" />
            Favorite beverage: <FontAwesomeIcon icon="coffee" transform={{ rotate: 42 }}/>
          </div>

        </div>
    </div>)
  }
};

export {
  Footer
};
