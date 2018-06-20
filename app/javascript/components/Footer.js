import React, {Component} from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <main className="Footer" style={{
        height: "100vh"
      }}>
        <div className="d-flex justify-content-around align-items-center" style={{
          height: "50%"}}>
          <div className="HorLogo">
            <img src={require('../../assets/images/LogoHorizantal.png')} style={{
                width: "30vh"
              }}/>
          </div>

          <div className="Social display-4">
            <FontAwesomeIcon icon={['fab', 'facebook']}/>  
            <FontAwesomeIcon icon={['fab', 'instagram']}/>
            <FontAwesomeIcon icon={['fab', 'google']}/>
          </div>

          <div className="">
            <div>STMedi@STMedi.com</div>
          </div>
        </div>

        <div className="display-4 d-flex justify-content-center align-items-center">
          <div>Google Map</div>
          <div>
            <FontAwesomeIcon icon="check-square" />
            Favorite beverage: <FontAwesomeIcon icon="coffee" />
          </div>

        </div>
    </main>)
  }
}

export {
  Footer
};
