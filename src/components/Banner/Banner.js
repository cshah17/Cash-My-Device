import React, {useEffect, useState} from "react";
import { Carousel } from "react-responsive-carousel";

import ImageBanner from './ImageBanner';

const Banner = ({ bannerData }) => {
  const [currentBannerItem, setCurrentBannerItem] = useState({});

  useEffect(() => {
    setCurrentBannerItem(bannerData[0])
  }, []);

  return (
    <div className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <p className="pre-wrap masthead-subheading font-weight-light mb-0">
          GIVING NEW LIFE TO USED SMARTPHONES & OTHER DEVICES
        </p>

        <Carousel
          showArrows={false} emulateTouch autoPlay={true} showStatus={false} infiniteLoop={true} showIndicators showThumbs={false}
          dynamicHeight={true} className="carousel-banner mt-4"
          onChange={(e) => setCurrentBannerItem(bannerData[e])}
        >
          {bannerData.map(e =>
            <div className="carousel-image-banner-item">
              <ImageBanner image={e.imagePath}/>
            </div>
          )}
        </Carousel>

        <h1 className="masthead-heading mt-4">
          <strong>{currentBannerItem.mainContent}</strong>
          <p>{currentBannerItem.subContent}</p>
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"/>
          <div className="divider-custom-icon"><i className="fa fa-star"/></div>
          <div className="divider-custom-line"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
