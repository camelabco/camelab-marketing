"use client";
import styles from "../page.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const ReviewSlider = () => {
    const options = {
        margin: 20,
        loop:true,
        rtl:true,
        responsiveClass: true,
        nav: true,
        navClass: [`${styles['circle-btn']} ${styles['left-btn']}`, `${styles['circle-btn']} ${styles['right-btn']}`],
        dots: false,
        autoplay: false,
        stagePadding: 0,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <div>
            <OwlCarousel className={`${styles['owlcarousel']} ${styles['review-owlcarousel']}`} rtl={true}  navText={["", ""]} loop  {...options}>
                <div className={`${styles['item']}`}>
                    <div className={`${styles['cliet-photo']}`}>
                        <Image src={require('../../assets/images/landing/client-photo.png').default} loading="eager"  width="100%" alt="create-video-img" />
                    </div>
                    <div className={`${styles['cliet-name']}`}>
                        <h4>Hannah Schmitt</h4>
                        <p>Growth Marketing Consultant</p>
                        <div className={`${styles['review-star']}`}>
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                        </div>
                    </div>
                </div>
                <div className={`${styles['item']}`}>
                    <div className={`${styles['cliet-photo']}`}>
                        <Image src={require('../../assets/images/landing/client-photo.png').default} loading="eager" width="100%" alt="create-video-img" />
                    </div>
                    <div className={`${styles['cliet-name']}`}>
                        <h4>Hannah Schmitt</h4>
                        <p>Growth Marketing Consultant</p>
                        <div className={`${styles['review-star']}`}>
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                            <Image src={require('../../assets/images/landing/star.svg').default} loading="eager" width={20} height={20} alt="star" />
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default ReviewSlider;
