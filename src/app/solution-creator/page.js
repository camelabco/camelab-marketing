"use client"

import React from 'react'
import SolutionCreatorStyle from "../styles/solutionCreator.module.css";
import Header from '../component/header';
import Footer from '../component/footer';
import dynamic from "next/dynamic";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Brands from '../component/brands';

const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
  ssr: false,
});


export default function page() {
  const images = [
    '/images/solution-creator/slider-img1.png',
    '/images/solution-creator/slider-img2.png',
    '/images/solution-creator/slider-img3.png',
    '/images/solution-creator/slider-img4.png',
    '/images/solution-creator/slider-img5.png',
    '/images/solution-creator/slider-img6.png',
    '/images/solution-creator/slider-img7.png',
  ];
  const options = {
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className='heading-text-part'>
          <h3 className={`primary-heading`}>
            Genuine Influencer Network to
            Amplify <span>Impact & Engagement</span>
          </h3>
          <h6 className={`secondary-heading`}>
            Curate, analyze, interact, and transform standout content from top creators & influencers—effortlessly collaborate and elevate your brand with Camelab.
          </h6>
        </div>
      </div>
      {/* curve-carousel */}
      <div className='curve-carousel-container'>
        <OwlCarousel className="owl-theme" {...options}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <div className={`${SolutionCreatorStyle['banner-section-btn']} d-flex align-items-center justify-content-center`}>
        <button className="primary-button">Get Started</button>
      </div>
      <Brands />

      {/* new creator section */}
      <section>
        <div className="container">
          <div className={`${SolutionCreatorStyle['newcreator-section']}`}>
            <div className={`${SolutionCreatorStyle['profile-img-text']}`}><img src="/images/solution-creator/profiles-logo.png" alt="logo" />
              <h6>900K+ have become new creators</h6></div>
            <h4>Over 60% of marketers say influencer content not only boosts conversions but also enhances brand trust and authenticity.</h4>
            <button className={`${SolutionCreatorStyle['primary-button']} primary-button`}>Become a Creator</button>
          </div>
        </div>
      </section>

      {/* ultimate hub section */}
      <section className={`${SolutionCreatorStyle['ultimate-hub-section']}`}>
        <div className="container">
          <div className={`${SolutionCreatorStyle['ultimate-hub-heading']}`}>
            <h3 className={`primary-heading`}>
              The Ultimate Hub for Gathering, Managing, and Amplifying Creator & Influencer Content
            </h3>
            <h6 className={`secondary-heading`}>
              Camelab brings together content from your favorite creators, influencers, and customers in one place—making access seamless and effortless.
            </h6>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
