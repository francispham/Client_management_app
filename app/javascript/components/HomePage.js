import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import Landing from '../../assets/images/Landing1.jpg'

const jumStyle = {
  backgroundImage: `url(${Landing})`,
  height: "100vh"
};

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className="d-flex flex-column justify-content-center align-items-center HomePage" fluid style={ jumStyle }>
          <p className="lead"><img src={require('../../assets/images/logo.png')} style={{height:"50vh"}} />
</p>
          {/* <h1 className="display-1">Welcome to ST Medi Spa</h1> */}
          <p><Button size="lg" style={{opacity:".3", borderRadius:"0"}}>Learn More</Button></p>
        </Jumbotron>

        <section className="container-fluid">
          <h1 className="middle display-2" style={{ paddingTop: "1em" }}>SERVICES</h1>
          <section>
            <h1>SKIN CARE</h1>
          </section>
          <section>
            <h1>LASER HAIR REMOVAL</h1>
          </section>
          <section>
            <h1>MANICURE</h1>
          </section>
          <section>
            <h1>ORAGNIC TEETH WHITENING</h1>
          </section>

        </section>

        <section className="container-fluid">
          <h1 className="middle display-2">CONTENT</h1>
          <section>
            <h1>NEW SERVICES</h1>
          </section>
          <section>
            <h1>USEFUL INFO</h1>
          </section>
          <section>
            <h1>WHO WE ARE</h1>
          </section>
          <section>
            <h1>NEWS & EVENT</h1>
          </section>
        </section>

      </div>
    );
  };

}

export default HomePage;
