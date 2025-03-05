"use client"

import React from 'react'
import SolutionCreatorStyle from "@/app/styles/solutionCreatorPage.module.css";
import Header from '@/app/component/header';
import Footer from '@/app/component/footer';
import dynamic from "next/dynamic";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Brands from '@/app/component/brands';
import AnimatedImgSection from '@/app/component/animatedImgSection';
import FAQ from '@/app/component/FAQ';

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
          <h3 className={`main-heading text-center`}>
            Genuine Influencer Network to
            Amplify <span>Impact & Engagement</span>
          </h3>
          <h6 className={`section-text text-center`}>
            Curate, analyze, interact, and transform standout content from top creators & influencers—effortlessly collaborate and elevate your brand with Camelab.
          </h6>
        </div>
      </div>
      {/* curve-carousel */}
      <div className='curve-carousel-container'>
        <OwlCarousel className="owl-theme" {...options}>
          {images.map((image, index) => (
            <div className="item" key={index}>
              <Image width={220} height={400} src={image} alt={`Slide ${index + 1}`} className="slide-image" />
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
            <div className={`${SolutionCreatorStyle['profile-img-text']}`}><Image width={72} height={24} src="/images/solution-creator/profiles-logo.png" alt="logo" />
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
            <h3 className={`main-heading text-center`}>
              The Ultimate Hub for Gathering, Managing, and Amplifying Creator & Influencer Content
            </h3>
            <h6 className={`section-text text-center`}>
              Camelab brings together content from your favorite creators, influencers, and customers in one place—making access seamless and effortless.
            </h6>
          </div>
          <div className={`${SolutionCreatorStyle['hub-text-content']}`}>
            <div className={`${SolutionCreatorStyle['text-content']}`}>
              <div className={`${SolutionCreatorStyle['logo-img']}`}><Image width={48} height={48} src="/images/solution-creator/ultimate-hub-img1.svg" alt="logo img" /></div>
              <h4>Streamline Collaboration</h4>
              <p>Send briefs and collect content from your favorite creators and influencers to build trust with potential buyers.</p>
            </div>
            <div className={`${SolutionCreatorStyle['text-content']}`}>
              <div className={`${SolutionCreatorStyle['logo-img']}`}><Image width={48} height={48} src="/images/solution-creator/ultimate-hub-img1.svg" alt="logo img" /></div>
              <h4>Scale Engaging Content</h4>
              <p>Deliver the right content at the right time by smart tagging visual content, product recommendations, and more.</p>
            </div>
            <div className={`${SolutionCreatorStyle['text-content']}`}>
              <div className={`${SolutionCreatorStyle['logo-img']}`}><Image width={48} height={48} src="/images/solution-creator/ultimate-hub-img1.svg" alt="logo img" /></div>
              <h4>Analyze performance</h4>
              <p>Track and boost ROI across every step of the buyers' journey with advanced insights, analytics, and reporting.</p>
            </div>
          </div>


        </div>
      </section>

      {/* revolutionize section */}
      <div className={`${SolutionCreatorStyle['revolutionize-section']}`}>
        <div className="container">
          <div className='row gy-3'>
            <div className="col-lg-5">
              <div className='d-flex flex-column justify-content-center h-100'>
                <div className={`${SolutionCreatorStyle['text-content']}`}>
                  <h3 className={`main-heading`}>
                    Revolutionize Collaboration with Creators & Influencers
                  </h3>
                  <h6 className={`section-text`}>
                    Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.</h6>
                </div>
                <div className={`d-flex align-items-center justify-content-start`}>
                  <button className="primary-button mt-3">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={`${SolutionCreatorStyle['revolutionize-img']} d-flex align-items-center`}>
                <Image width={536} height={445} layout='responsive' src="/images/solution-creator/revolutionize.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${SolutionCreatorStyle['animated-section']}`}>
          <AnimatedImgSection reverse />
        </div>
      </div>

      <FAQ />


      <Footer />
    </div>
  )
}
