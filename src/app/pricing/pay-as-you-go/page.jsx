import Footer from '@/app/component/footer'
import Header from '@/app/component/header'
import React from 'react'
import pricingStyles from '@/app/styles/pricing.module.css'
import ContainAiStyles from '@/app/styles/contentAi.module.css';
import Image from 'next/image';
import ReviewSlider from '@/app/component/reviewSlider';
import NewsletterSection from '@/app/component/newsletterSection';

export default function PayAsYouGoPage() {
    return (
        <div>
            <Header />
            <section className={`${pricingStyles['banner-section']} common-spacing`}>
                <div className='container'>
                    <h2 className='main-heading text-center'>Pay-as-you-go <span>pricing</span></h2>
                    <p className='section-text text-center'>Pricing designed for growing brands and agencies</p>
                    <div className={`${pricingStyles['pricing-cards']} d-flex align-items-lg-start`}>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <div className={pricingStyles['time-text']}>15-20 sec</div>
                            <p>Individual videos for growing brands & agencies</p>
                            <h6 className={pricingStyles['price-text']}>$124<span>/video</span></h6>
                            <button className='primary-button white'>Choose Plan</button>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                            </ul>
                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <div className={pricingStyles['time-text']}>20-40 sec</div>
                            <p>Individual videos for growing brands & agencies</p>
                            <h6 className={pricingStyles['price-text']}>$159<span>/video</span></h6>
                            <button className='primary-button white'>Choose Plan</button>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                                <li>Exclusive stock footage</li>
                            </ul>
                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <div className={pricingStyles['time-text']}>40-60 sec</div>
                            <p>Individual videos for growing brands & agencies</p>
                            <h6 className={pricingStyles['price-text']}>$199<span>/video</span></h6>
                            <button className='primary-button white'>Choose Plan</button>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                                <li>Exclusive stock footage</li>
                                <li>Professional editing services</li>
                            </ul>
                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <div className={pricingStyles['time-text']}>Custom</div>
                            <p>Custom packages & contracts for large organizations</p>
                            <h6 className={pricingStyles['price-text']}>Enterprise</h6>
                            <button className='primary-button white'>Choose Plan</button>
                            <ul>
                                <li>Custom video packages</li>
                                <li>Custom add-ons & variations</li>
                                <li>Outsource creators</li>
                                <li>Custom contracts & licenses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['review-section']}>
                <div className='container common-spacing'>
                <div className={`row align-items-center ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/client-testimonial.png' alt='section image' height={418} width={536} layout="responsive" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>

                                <p className='section-text'>
                                "Camelab makes it effortless for us to create visually stunning and impactful campaigns."
                                </p>
                                <div className={ContainAiStyles['review-slider']}>
                                    <ReviewSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NewsletterSection heading='Revolutionize Collaboration with Creators & Influencers' description='Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.'/>
            
            <Footer />
        </div>
    )
}
