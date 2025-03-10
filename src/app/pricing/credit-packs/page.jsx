import Footer from '@/app/component/footer'
import Header from '@/app/component/header'
import React from 'react'
import pricingStyles from '@/app/styles/pricing.module.css'
import ContainAiStyles from '@/app/styles/contentAi.module.css';
import Image from 'next/image';
import ReviewSlider from '@/app/component/reviewSlider';
import NewsletterSection from '@/app/component/newsletterSection';
import BlogsSection from '@/app/component/blogsSection';

export default function CreditPacksPage() {
    return (
        <div>
            <Header />
            <section className={`${pricingStyles['banner-section']} ${pricingStyles['credit-packs-page']} common-spacing`}>
                <div className='container'>
                    <h2 className='main-heading text-center'>Credit <span>Packs</span></h2>
                    <p className='section-text text-center'>Save Up To 20% With Credit Packs</p>
                    <div className={`${pricingStyles['pricing-cards']} d-flex align-items-lg-start`}>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <h6 className={pricingStyles['price-text']}>Get $250 <span>bonus</span></h6>
                            <div className={pricingStyles['time-text']}>Starter</div>
                            <p>Best choice if you plan to order a few videos.</p>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                            </ul>
                            <h6 className={pricingStyles['price-text']}>Pay $1900</h6>
                            <p>Get $2150 in value</p>
                            <button className='primary-button white'>Order Now</button>

                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <h6 className={pricingStyles['price-text']}>Get $500 <span>bonus</span></h6>
                            <div className={pricingStyles['time-text']}>Pro</div>
                            <p>Best choice if you need fresh videos on a regular basis.</p>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                                <li>Exclusive stock footage</li>
                            </ul>
                            <h6 className={pricingStyles['price-text']}>Pay $3300</h6>
                            <p>Get $3800 in value</p>
                            <button className='primary-button white'>Order Now</button>

                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <h6 className={pricingStyles['price-text']}>Get $1250 <span>bonus</span></h6>
                            <div className={pricingStyles['time-text']}>Premium</div>
                            <p>Best choice if you want to double down on video marketing.</p>
                            <ul>
                                <li>Manually vetted creators</li>
                                <li>Fully licensed videos</li>
                                <li>High-quality audio tracks</li>
                                <li>Customizable video templates</li>
                                <li>Exclusive stock footage</li>
                                <li>Professional editing services</li>
                            </ul>
                            <h6 className={pricingStyles['price-text']}>Pay $6300</h6>
                            <p>Get $7550 in value</p>
                            <button className='primary-button white'>Order Now</button>

                        </div>
                        <div className={`${pricingStyles['pricing-card']}`}>
                            <h6 className={pricingStyles['price-text']}>Get $3100 <span>bonus</span></h6>
                            <div className={pricingStyles['time-text']}>Ultimate</div>
                            <p>Best choice if video marketing is growing your business like crazy.</p>
                            <ul>
                                <li>Custom video packages</li>
                                <li>Custom add-ons & variations</li>
                                <li>Outsource creators</li>
                                <li>Custom contracts & licenses</li>
                                <li>One round of revisions included</li>
                                <li>Tailored marketing strategies</li>
                                <li>Valid for one year</li>
                            </ul>
                            <h6 className={pricingStyles['price-text']}>Pay $12500</h6>
                            <p>Get $15600 in value</p>
                            <button className='primary-button white'>Order Now</button>

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

            <section className={`${pricingStyles['enterprice-section']} common-spacing`}>
                <div className='container'>
                    <div className={pricingStyles['enterprice-content']}>
                        <h6 >
                            Looking for an Enterprise offering?
                        </h6>
                        <p className='section-text text-white text-center'>If you're looking for tailored packages with multiple videos, revisions, add-ons and custom contracts, schedule a free discovery call.</p>
                        <div className={`${pricingStyles['chips']} d-flex justify-content-center flex-wrap`}>
                            <div className={pricingStyles['chip']}>Custom video packages</div>
                            <div className={pricingStyles['chip']}>Video add-ons & revisions</div>
                            <div className={pricingStyles['chip']}>Custom contracts & legal</div>
                            <div className={pricingStyles['chip']}>Dedicated Account Manager</div>
                            <div className={pricingStyles['chip']}>Multiple video variations</div>
                            <div className={pricingStyles['chip']}>Fully licensed videos</div>
                            <div className={pricingStyles['chip']}>Regular & Premium creators</div>
                        </div>
                        <div className='d-flex justify-content-center mt-lg-4 mt-3'>
                            <button className='primary-button white'>Enterprise learn More</button>
                        </div>
                    </div>

                </div>
            </section>

            <BlogsSection/>

            <NewsletterSection heading='Revolutionize Collaboration with Creators & Influencers' description='Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.' />

            <Footer />
        </div>
    )
}
