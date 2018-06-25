import React, { Component } from "react";
import { NavLink } from 'reactstrap';

class About extends Component {
  render () {
    return (
      <main className="About container-fluid">
        <h3>About St Medi Spa</h3>
        <p>
          ST MEDI SPA is a new special medical style skin and teeth care center
          serving men and women interested in maintaining their overall healthy
          look while also targeting the effects of aging. Our services focus on
          skin rejuvenation or photo facials, acne therapy, sunspot or hyperpigmentation,
          chemical peels for different skin type, optimal facials, microdermabrasion,
          hair removal and teeth whitening delivered in a comfortable environment
          designed to pamper and relax while also delivering effective results.
        </p>
        <p>
          We provide high quality treatments with consultation at a cost point
          that allows anyone to utilize our services, combined with a customized,
          personal experience that will delight and surprise.
        </p>
        <p><strong>Esthetician Expertise</strong></p>
        <p>
          Your ST MEDI SPA esthetician will be your trusted partner to assist you
          on your journey toward attaining confidence in your skin’s appearance.
          Our knowledgeable and trusted estheticians are experts in using our
          state-of-the-art technology and techniques. Our estheticians are all
          trained in hair removal and skin rejuvenation. Each esthetician is state
          board licensed and has extensive IPL and laser training. Additionally,
          estheticians receive continuing education on a regular basis.
        </p>
        <hr/>
        <NavLink className="d-flex justify-content-end" href="/app">Employee Login</NavLink>
      </main>
    )
  }
}

export { About };
