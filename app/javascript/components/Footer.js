import React, {Component} from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <main className="Footer" style={{
        height: "100vh"
      }}>
        <div className="middle flex-column" style={{ height: "25%" }}>
          <h3>920 Seymour Street, Vancouver BC</h3>
          <h3>V6B 3L9 Canada</h3>
        </div>

        <div className="container-fluid" style={{ height: "25%" }}>
          <div className="row middle">
            <div className="HorLogo col middle">
              <img src={require('../../assets/images/LogoHorizantal.png')} style={{
                width: "35vh"
              }}/>
            </div>

            <div className="Social col display-4 middle color">
                <FontAwesomeIcon icon={['fab', 'facebook']} pull="left"/>
                <FontAwesomeIcon icon={['fab', 'instagram']} pull="left"/>
                <FontAwesomeIcon icon={['fab', 'google']} pull="left"/>
            </div>
            <div>
            </div>

            <div className="col middle">
              <FontAwesomeIcon icon='envelope' pull="left" className="Mail color"/>
              STMedi@STMedi.com
            </div>
          </div>
        </div>

        <div className="display-4 middle flex-column" style={{ height: "50%" }}>
          <div>Google Map</div>
          <div>
            <FontAwesomeIcon icon="check-square" />
            Favorite beverage: <FontAwesomeIcon icon="coffee" transform={{ rotate: 42 }}/>
          </div>

        </div>
    </main>)
  }
}

export {
  Footer
};
