import React, {Component} from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <main className="Footer container-fluid" style={{
        height: "40vh"
      }}>
        <div className="d-flex justify-content-between">
          <div className="">
            <img src={require('../../assets/images/logo.png')} style={{
                height: "90px"
              }}/>
          </div>
          <ul className="Social d-flex justify-content-between">
            <div><FontAwesomeIcon icon={['fab', 'facebook']}/></div>
            <div><FontAwesomeIcon icon={['fab', 'instagram']}/></div>
            <div><FontAwesomeIcon icon={['fab', 'google']}/></div>
          </ul>
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
