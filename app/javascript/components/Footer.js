import React, {Component} from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <main className="Footer container-fluid" style={{
        height: "50vh"
      }}>
        <div className="d-flex justify-content-between" style={{
          height: "50%"}}>
          <div className="">
            <img src={require('../../assets/images/LogoHorizantal.png')} style={{
                height: "30px"
              }}/>
          </div>
          <div className="Social d-flex justify-content-between">
            <div className=""><FontAwesomeIcon icon={['fab', 'facebook']}/></div>
            <div><FontAwesomeIcon icon={['fab', 'instagram']}/></div>
            <div><FontAwesomeIcon icon={['fab', 'google']}/></div>
          </div>
          <div className="">
            <div>STMedi@STMedi.com</div>
          </div>
        </div>
      <div className="display-4 d-flex justify-content-center">Google Map</div>
    </main>)
  }
}

export {
  Footer
};
