import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DesignConcept() {
  return (
    <div>
      <h1>Slider</h1>
      <Slider>
        <div>
          <img
            className="carouselImages"
            src="https://arenavs.com/slides/1.jpg"
            alt="soliders Image for carousel "
          />
        </div>
        <div>
          <img
            className="carouselImages"
            src="https://arenavs.com/slides/2.jpg"
            alt="soliders Image for carousel "
          />
        </div>
        <div>
          <img
            className="carouselImages"
            src="https://arenavs.com/slides/3.jpg"
            alt="soliders Image for carousel "
          />
        </div>
        <div>
          <img
            className="carouselImages"
            src="https://arenavs.com/slides/4.jpg"
            alt="soliders Image for carousel "
          />
        </div>
      </Slider>
    </div>
  );
}

export default DesignConcept;
