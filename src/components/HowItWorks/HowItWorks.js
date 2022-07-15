import React from "react";

import './howItWork.css'

import icon01 from './Image/icon-01.png'
import icon02 from './Image/icon-02.png'
import icon03 from './Image/icon-03.png'

const HowItWorks = () => {
  return (
    <div>
      <div className="contact-top">
        <div className="container">
          <h2>DOES YOUR BUSINESS HAVE 10 OR MORE DEVICES TO SELL? <span>Quickly and conveniently sell your phones, tablets, MacBooks and iMacs in bulk</span></h2>
        </div>
      </div>
      <div className="contact-middle">
        <div className="container">
          <h3>HOW IT WORKS</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="middle-tab">
                <div className="middle-tab-icon"> <img src={icon01} alt="" className="img-fluid" /> </div>
                <p>Complete the information below. We’ll follow up and provide a quote.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="middle-tab">
                <div className="middle-tab-icon"> <img src={icon02} className="img-fluid" /> </div>
                <p>We ship you a box. You send your devices to us free of charge.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="middle-tab">
                <div className="middle-tab-icon"> <img src={icon03} className="img-fluid" /> </div>
                <p>You get paid.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
