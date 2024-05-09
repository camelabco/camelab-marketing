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
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    rtl:true,
    autoplayTimeout:1000,
    autoplaySpeed:1000,
    stagePadding:0,
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
        items: 4,
      },
    },
  };

  return (
    <div >
    <OwlCarousel className={`${sliderStyle['owlcarousel']}`}  loop  {...options}>
      <div className={`${sliderStyle['item']}`}>
        <div>
        <Image
             src={require('../../assets/images/slider/slider-img2.svg').default}
              alt="camelab-logo"
            />
        </div>
      </div>



      <div className={`${sliderStyle['item']}`}>
        <div className={`${sliderStyle['item-card']}`}>
        <Image
             src={require('../../assets/images/slider/slider-img2.svg').default}
              alt="camelab-logo"
            />
        </div>
      </div>


      <div className={`${sliderStyle['item']}`}>
        <div className={`${sliderStyle['item-card']}`}>
        <Image
             src={require('../../assets/images/slider/slider-img3.svg').default}
              alt="camelab-logo"
            />
        </div>
      </div>

      <div className={`${sliderStyle['item']}`}>
        <div className={`${sliderStyle['item-card']}`}>
        <Image
             src={require('../../assets/images/slider/slider-img1.svg').default}
              alt="camelab-logo"
            />
        </div>
      </div>
    </OwlCarousel>
    </div>
  );
};

export default Slider;





