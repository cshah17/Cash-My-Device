import React, { Component } from 'react'

import Slider from '../../Slider/Slider';
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card'


const bannerData = [
  {
    imagePath: 'https://cashmydevice-home-page-images.s3.amazonaws.com/iphone+11.jpeg',
    alt: 'i-phone',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'https://cashmydevice-home-page-images.s3.amazonaws.com/AppleTv.jpg',
    alt: 'i-pad',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'https://cashmydevice-home-page-images.s3.amazonaws.com/GooglePixel.png',
    alt: 'mac-book',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'https://cashmydevice-home-page-images.s3.amazonaws.com/AirPods.jpeg',
    alt: 'ear-buds',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'https://cashmydevice-home-page-images.s3.amazonaws.com/iwatch.jpeg',
    alt: 'smart-watch',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  superLargeDesktop: {
    breakpoint: { max: 1024, min: 600 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 600, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="mt-5 mb-5 my-own-custom-container">
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["mobile"]}
            containerClass="carousel-container"
            dotListClass="mt-4 custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex item-center">
                <div>
                  <img className="slider-img" src="https://elfsight.com/assets/testimonials-slider/2.jpg" />
                </div>
                <div className="ml-4">
                  <span> <i>Jason Bourne</i> </span>
                  <div>Business Analyst</div>
                </div>
              </div>
              <div class="mt-3">I sold my iPhone 11 Pro since I was getting paranoid that someone was tracking my location, so I  an offer better than what I paid for! The customer service was very helpful in letting me know where to the drop-off location is for my phone.
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp" />
                </div>
                <div className="ml-4">
                  <span> <i>Ashley B.</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">Was looking for a platform to sell my 5th generation, 2017 iPad and 10th generation iPhone and my 13” MacBook Pro(no touch bar). Cash My Device was a great option because I was able to get a great rating for my device and can now afford to upgrade the latest version in the product lineup! Thanks!
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
                </div>
                <div className="ml-4">
                  <span> <i>Gabe Barrett</i> </span>
                  <div>Account</div>
                </div>
              </div>
              <div class="mt-3">Great customer experience. The reps at Cash-My-Device gave me a quote and notified me how to deposit my device safely and securely. Easy to navigate website and timely service.
              </div>
            </div>


            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
                </div>
                <div className="ml-4">
                  <span> <i>Jason Bourne</i> </span>
                  <div>Professional trainer</div>
                </div>
              </div>
              <div class="mt-3">I sold my iPhone 11 Pro since I was getting paranoid that someone was tracking my location, so I  an offer better than what I paid for! The customer service was very helpful in letting me know where to the drop-off location is for my phone.
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" />
                </div>
                <div className="ml-4">
                  <span> <i>Mindy Swift</i> </span>
                  <div>Local influencer</div>
                </div>
              </div>
              <div class="mt-3">Great platform to sell our unused devices. I sold my iPhone 11 Pro, my  and for a better deal than what was offered at my local computer store. They came to the rescue in answering my question about getting the right quote.
              </div>
            </div>

          </Carousel>
        </div>
        <div>
          <Slider/>
        </div>
      </>
    )
  }
}

export default HomePage
