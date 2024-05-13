"use client";
import sliderStyle from "../styles/slider.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const Slider = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    rtl: true,
    loop: true,
    autoWidth: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    stagePadding: 0,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div >
      <OwlCarousel className={`${sliderStyle['owlcarousel']}`} loop  {...options}>


        <div className={`${sliderStyle['item']}`}>

          <div className={`${sliderStyle['sub-item']}`}>
            <Image
              src={require('../../assets/images/slider/slider-img1.svg').default}
              alt="camelab-logo" width={"100%"}
            />

          </div>

        </div>
        <div className={`${sliderStyle['item']}`}>

          <div className={`${sliderStyle['sub-item']}`}>
            <Image
              src={require('../../assets/images/slider/slider-img2.png').default}
              alt="camelab-logo" width={"100%"}
            />

          </div>

        </div>

        <div className={`${sliderStyle['item']}`}>
          <div className={`${sliderStyle['sub-item']}`}>
            <div className={`${sliderStyle['img-text-part']}`}>
              <Image
                src={require('../../assets/images/slider/slider-img3.png').default}
                alt="camelab-logo" width={"100%"}
              />
              <div className={`${sliderStyle['applications']}`}>
                <Image
                  src={require('../../assets/images/slider/right-logo.svg').default}
                  alt="camelab-logo"
                />
                <h4>9793 Applications</h4>
              </div>
            </div>
          </div>
        </div>


      </OwlCarousel>
    </div>
  );
};

export default Slider;





