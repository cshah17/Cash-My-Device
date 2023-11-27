import React from "react";

const imageBanner = ({ image }) => (
  <React.Fragment>
    <img className="masthead-avatar mb-5" src={image} alt=""/>
  </React.Fragment>
);

export default imageBanner;
