import React, { Component } from 'react'

import Banner from '../../Banner/Banner'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card'


const bannerData = [
  {
    imagePath: 'assets/img/image-banner/#',
    alt: 'i-phone',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'assets/img/image-banner/#',
    alt: 'i-pad',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'assets/img/image-banner/#',
    alt: 'mac-book',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'assets/img/image-banner/#',
    alt: 'ear-buds',
    mainContent: 'SELL SMART & SAFE',
    subContent: '',
  },
  {
    imagePath: 'assets/img/image-banner/#',
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
                  <span> <i>Garrett Kite</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">To pay users' attention to the text of the testimonials, you can choose to show the text above the author details. For this, we have introduced Tiled Balloon template. It will place several testimonials per page and on the top of each one, usres will see the star rating - that’s how you can prove your appreciation.
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://elfsight.com/assets/testimonials-slider/2.jpg" />
                </div>
                <div className="ml-4">
                  <span> <i>Garrett Kite</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">To pay users' attention to the text of the testimonials, you can choose to show the text above the author details. For this, we have introduced Tiled Balloon template. It will place several testimonials per page and on the top of each one, usres will see the star rating - that’s how you can prove your appreciation.
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://elfsight.com/assets/testimonials-slider/2.jpg" />
                </div>
                <div className="ml-4">
                  <span> <i>Garrett Kite</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">To pay users' attention to the text of the testimonials, you can choose to show the text above the author details. For this, we have introduced Tiled Balloon template. It will place several testimonials per page and on the top of each one, usres will see the star rating - that’s how you can prove your appreciation.
              </div>
            </div>


            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://elfsight.com/assets/testimonials-slider/2.jpg" />
                </div>
                <div className="ml-4">
                  <span> <i>Garrett Kite</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">To pay users' attention to the text of the testimonials, you can choose to show the text above the author details. For this, we have introduced Tiled Balloon template. It will place several testimonials per page and on the top of each one, usres will see the star rating - that’s how you can prove your appreciation.
              </div>
            </div>

            <div className="mb-5 ml-2 mr-2">
              <div className="d-flex">
                <div>
                  <img className="slider-img" src="https://elfsight.com/assets/testimonials-slider/2.jpg" />
                </div>
                <div className="ml-4">
                  <span> <i>Garrett Kite</i> </span>
                  <div>Business strategist</div>
                </div>
              </div>
              <div class="mt-3">To pay users' attention to the text of the testimonials, you can choose to show the text above the author details. For this, we have introduced Tiled Balloon template. It will place several testimonials per page and on the top of each one, usres will see the star rating - that’s how you can prove your appreciation.
              </div>
            </div>

          </Carousel>
        </div>
        <div>
          <Banner bannerData={bannerData} />
        </div>
      </>
    )
  }
}

export default HomePage
