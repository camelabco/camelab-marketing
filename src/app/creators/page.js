'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import SolutionsHeroSection from '../component/solutionsHeroSection'
import Styles from '@/app/styles/creators.module.css'
import CampaignStyles from "@/app/styles/campaigns.module.css";
import Image from 'next/image'
import Cards from '../component/cards'
import Brands from '../component/brands'
import FAQ from '../component/FAQ';
import NewsletterSection from '../component/newsletterSection';
const cardData = [
    { imgSrc: "/images/creators/small_card_7.svg", title: "Tourism" },
    { imgSrc: "/images/creators/small_card_8.svg", title: "Health & Wellness" },
    { imgSrc: "/images/creators/small_card_9.svg", title: "Apparel & Fashion" },
    { imgSrc: "/images/creators/small_card_10.svg", title: "Home & Lifestyle" },
    { imgSrc: "/images/creators/small_card_11.svg", title: "Apps & Digital Services" },
    { imgSrc: "/images/creators/small_card_12.svg", title: "Food & Beverage" },
    { imgSrc: "/images/creators/small_card_13.svg", title: "Automotive" },
    { imgSrc: "/images/creators/small_card_14.svg", title: "Cosmetics & Beauty" },
    { imgSrc: "/images/creators/small_card_15.svg", title: "Pets" },
];
const commonCards = [
    {
        imageSrc: "/images/cards/card_13.svg",
        title: "Grab attention"
    },
    {
        imageSrc: "/images/cards/card_14.svg",
        title: "Convey emotion"
    },
    {
        imageSrc: "/images/cards/card_15.svg",
        title: "Build trust"
    },
    {
        imageSrc: "/images/cards/card_16.svg",
        title: "Drive sales"
    }
]
export default function page() {
    return (
        <>

            <Header />
            <section className={`hero-section common-spacing`}>
                <SolutionsHeroSection title='900k+ creators ready to boost your' highLight='brand with Camelab' description='Find top creators for your niche, hand-picked for quality and performance on TikTok and Meta with Camelab.' buttonText='Discover More' />
            </section>
            {/*  */}
            <section className={`${Styles['creators-video-section']}`}>
                <div className="container">
                    <h3 className={`${Styles['']} main-heading text-center`}>Unlock the power of creators to amplify
                        your brand with Camelab.</h3>
                    <p className='section-text text-center'>Real Results from Leading Brands</p>

                    <div
                        className={`${CampaignStyles["build-small-card"]} d-flex justify-content-center align-items-center flex-wrap`}
                    >
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
                            >
                                <div className={CampaignStyles["build-small-card-img-section"]}>
                                    <Image
                                        src={card.imgSrc}
                                        alt={`${card.title} img`}
                                        width={24}
                                        height={24}
                                        className={CampaignStyles["build-small-card-img"]}
                                    />
                                </div>
                                <div className={CampaignStyles["build-small-card-text"]}>
                                    {card.title}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`${Styles['creators-video-part']}`}>
                        {/* video */}
                        <div className="row">
                            <div className="col-lg-4">
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className={`${Styles['creators-video']}`}>
                                        <video
                                            src="/images/creators/poster1.png"
                                            poster="/images/creators/poster1.png"
                                            className="w-full max-w-3xl rounded-lg shadow-lg"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                        <button className={`${Styles['play-btn']}`}><Image src='/images/creators/PlayButton.svg' width={64} height={64} alt='img' /></button>
                                    </div>
                                    <div className={`${Styles['video-details']}`}>
                                        <div><h4>Dubai Tours and Tourism </h4> <p>Dubai</p></div>
                                        <h6>5 <Image src='/images/creators/star.svg' width={16} height={16} alt='logo' /></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className={`${Styles['creators-video']}`}>
                                        <video
                                            src="/images/creators/poster2.png"
                                            poster="/images/creators/poster2.png"
                                            className="w-full max-w-3xl rounded-lg shadow-lg"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                        <button className={`${Styles['play-btn']}`}><Image src='/images/creators/PlayButton.svg' width={64} height={64} alt='img' /></button>
                                    </div>
                                    <div className={`${Styles['video-details']}`}>
                                        <div><h4>Dubai Tours and Tourism </h4> <p>Dubai</p></div>
                                        <h6>5 <Image src='/images/creators/star.svg' width={16} height={16} alt='logo' /></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className={`${Styles['creators-video']}`}>
                                        <video
                                            src="/images/creators/poster3.png"
                                            poster="/images/creators/poster3.png"
                                            className="w-full max-w-3xl rounded-lg shadow-lg"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                        <button className={`${Styles['play-btn']}`}><Image src='/images/creators/PlayButton.svg' width={64} height={64} alt='img' /></button>
                                    </div>
                                    <div className={`${Styles['video-details']}`}>
                                        <div><h4>Dubai Tours and Tourism </h4> <p>Dubai</p></div>
                                        <h6>5 <Image src='/images/creators/star.svg' width={16} height={16} alt='logo' /></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'><button className="primary-button" variant="primary">Discover More</button></div>

                </div>
            </section>
            {/*  */}
            <section className='common-spacing'>
                <Cards heading='Find your perfect creative match' cards={commonCards} />
                <div className={`${Styles['find-section-btn']} d-flex justify-content-center`}><button className="primary-button" variant="primary">Discover More</button></div>
            </section>
            {/*  */}
            <section className='common-spacing'>
                <Brands />
            </section>

            {/* slider */}
            <section className={`${Styles['success-slider-section']} common-spacing success-slider`}>
                <div className="container">
                    <h3 className='main-heading text-center pb-3'>Create a success stories with Camelab </h3>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 1 },
                            1000: { slidesPerView: 1 },
                        }}
                    >
                        {[1, 2, 3].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${Styles['slide-item']}`}>
                                    <div className={`${Styles['left-part']}`}>
                                        <Image src="/images/creators/slider-img.png" alt="img" width={373} height={557} />
                                    </div>
                                    <div className={`${Styles['right-part']}`}>
                                        <h4 className='section-text'>
                                            “Presenting real, everyday people to our customers has made a huge difference. The amount of people interacting with us and looking to purchase our product from these videos has gone up from somewhere between 30% and 50% in the past couple months.”
                                        </h4>
                                        <h5 className='section-text'>- Omar, Brand Reputation Manager</h5>
                                        <div className={`${Styles['persentages-part']}`}>
                                            <div>
                                                <h3>+10.75%</h3>
                                                <p>ROI increase with Camelab videos</p>
                                            </div>
                                            <div>
                                                <h3>+5%</h3>
                                                <p>increase in conversion rates on pages featuring Billo UGC</p>
                                            </div>
                                        </div>
                                        <div className={`${Styles['slider-btn']}`}><button className='transparent-btn'>Read full case study <Image src='/images/blog/arrow-up-right.svg' width={24} height={24} alt='img' /></button></div>
                                        <div className={`${Styles['desktop-nav']}`}>
                                            <div className="nav-container">
                                                <div className="swiper-button-next"></div>
                                                <div className="swiper-button-prev"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/*  */}
            <section className='common-spacing pt-0'>
                <div className="container">
                    <div className={`${Styles['button-container']} align-items-center d-flex justify-content-center`}><button className="primary-button">See Pricing</button><button className={`${Styles['light-btn']} primary-button`}>View more success stories</button></div>
                </div>
            </section>

            {/*  */}
            <section className='common-spacing'>
                <div className="container">
                    <h3 className='main-heading text-center'>Why choose a UGC creator?</h3>
                    <p className='section-text text-center pb-4'>Here’s how you benefit when you order high-performing Camelab videos</p>
                    <div className={Styles['table-part']}>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Camelab</th>
                                    <th>Influencers</th>
                                    <th>Production Agency</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Cost-effective</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Fast</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Easy</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Customizable</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/check-orange.svg' alt='orange check' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Scalable</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/check-orange.svg' alt='orange check' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Authentic</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/check-orange.svg' alt='orange check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td>Ready-to-launch</td>
                                    <td><Image src='/images/creators/check-white.svg' alt='white check' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/cross.svg' alt='cross' height={20} width={20} /></td>
                                    <td><Image src='/images/creators/check-orange.svg' alt='orange check' height={20} width={20} /></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button className='primary-button white'>Try Camelab now</button></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className={`common-spacing`}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <Image src='/images/creators/TestimonialImage.png' width={536} height={536} layout='responsive' />
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>What is a UGC creator?</h3>
                                <p className='section-text'>The term ‘UGC creator’ may sound like a modern trend, but its essence dates back to the early days of the internet. A UGC creator is someone who crafts and shares content across digital platforms, shaping the ever-evolving landscape of user-generated content.</p>
                                <div className='d-flex justify-content-center justify-content-lg-start'><button className='transparent-btn'>Read more<Image src='/images/blog/arrow-up-right.svg' width={24} height={24} alt='img' /></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Find creators */}
            <section className={` ${Styles['find-creators-section']} common-spacing`}>
                <div className="container">
                    <h3 className='main-heading text-center'>Find creators in other countries</h3>
                    <p className='section-text text-center'>Expand beyond UGC in the US with Camelab. Connect with creators and get high-quality videos for global markets.</p>
                    <div className={`${Styles['find-creators-cards']} row`}>
                        <div className='col-lg-4'>
                            <div className={`${Styles['card-part']}`}>
                                <div className={`${Styles['country-img']}`}><Image src='/images/creators/country-img1.png' width={100} height={100} /></div>
                                <h4>Canada</h4>
                                <p>Find talented creators in Canada and get authentic content for paid social.</p>
                                <button className='primary-button'>Learn more</button>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className={`${Styles['card-part']}`}>
                                <div className={`${Styles['country-img']}`}><Image src='/images/creators/country-img2.png' width={100} height={100} /></div>
                                <h4>United Kingdom</h4>
                                <p>Connect with UK creators and boost your brand with authentic video content.</p>
                                <button className='primary-button'>Learn more</button>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className={`${Styles['card-part']}`}>
                                <div className={`${Styles['country-img']}`}><Image src='/images/creators/country-img3.png' width={100} height={100} /></div>
                                <h4>Australia</h4>
                                <p>Collaborate with Australian creators and get UGC videos that drive results.</p>
                                <button className='primary-button'>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <FAQ />

            {/* news letter */}
            <NewsletterSection heading='Revolutionize Collaboration with Creators & Influencers' description='Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.' />

            <Footer />
        </>
    )
}
