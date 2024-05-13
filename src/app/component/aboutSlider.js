"use client";
import aboutSlider from "../styles/aboutSlider.module.css";
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
const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
    ssr: false,
});


const AboutSlider = () => {
    const options = {
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        rtl:true,
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
                items: 4,
            },
        },
    };





    const optionsTwo = {
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
            <OwlCarousel className={`${aboutSlider['owlcarousel']}`} loop  {...options}>
                <div className={`${aboutSlider['item']}`}>
                        <Image
                            src={require('../../assets/images/aboutslider/slider1-img1.svg').default}
                            alt="camelab-logo"
                            width={'100%'}
                        />
                </div>
                <div className={`${aboutSlider['item']}`}>
                    <Image 
                        src={require('../../assets/images/aboutslider/slider1-img2.svg').default}
                        alt="camelab-logo"
                        width={'100%'}
                    />
                </div>
                <div className={`${aboutSlider['item']}`}>
                    <div className={`${aboutSlider['slider-text-part']}`}>
                        <h3>600k+</h3>
                        <h4>creator
                            with us</h4>
                    </div>
                </div>
                <div className={`${aboutSlider['item']}`}>
                    <Image
                        src={require('../../assets/images/aboutslider/slider1-img4.svg').default}
                        alt="camelab-logo"
                        width={'100%'}
                    />
                </div>
            </OwlCarousel>












            <OwlCarousel className={`${aboutSlider['owlcarousel']} mt-5`} loop  {...optionsTwo}>
                <div className={`${aboutSlider['item']}`}>
                        <Image
                            src={require('../../assets/images/aboutslider/slider2-img1.svg').default}
                            alt="camelab-logo"
                            width={'100%'}
                        />
                </div>



                <div className={`${aboutSlider['item']}`}>



                    <div className={`${aboutSlider['slider-text-part']}`}>
                        <h3>900k+</h3>
                        <h4>brand
                            with us</h4>
                    </div>

                </div>


                <div className={`${aboutSlider['item']}`}>
                    <Image
                        src={require('../../assets/images/aboutslider/slider2-img3.svg').default}
                        alt="camelab-logo"
                        width={'100%'}
                    />
                </div>


            </OwlCarousel>
        </div>
    );
};

export default AboutSlider;