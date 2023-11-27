import React from "react";

function SliderContent({ activeIndex, sliderImage }) {

  const style={width:20, }
  return (
    <section>
      <div className={style}>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt={slide.urls} />
          
        </div>
      ))}
      </div>
      
    </section>
  );
}

export default SliderContent;
