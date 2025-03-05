import Header from '@/app/component/header'
import ContainAiStyles from '@/app/styles/containAi.module.css';
import React from 'react';
import Image from 'next/image';
import ReviewSlider from '@/app/component/reviewSlider';
import Brands from '@/app/component/brands';
import Footer from '@/app/component/footer';
import NewsletterSection from '@/app/component/newsletterSection';

export default function ContainAiPage() {
    return (
        <div>
            <Header />
            <section className={ContainAiStyles['advance-ai-section']}>
                <div className='container common-spacing'>
                    <h2 className='main-heading text-center'>
                        <span>Advanced AI and Machine Learning </span><br />
                        for UGC Curation
                    </h2>
                    <p className='secondary-text text-center'>
                        The most powerful AI-driven engine to discover and curate stunning visual content.
                    </p>
                </div>
            </section>

            <section className={ContainAiStyles['visual-search-section']}>
                <div className='container common-spacing'>
                <div className={`row ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/visual-search.png' alt='visual search image' height={418} width={536} layout="responsive" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    Visual Search
                                </h3>
                                <p className='section-text'>
                                    Finding that perfect image is important. It’s also difficult. Frustrating. Time consuming.
                                </p>
                                <p className='section-text mt-3'>
                                    Camelab transforms content discovery. Find the perfect visuals every time with cutting-edge AI-powered UGC search technology.
                                </p>
                                <p className='section-text mt-3'>
                                    Select from existing UGC or upload an image to discover visually similar content. Camelab’s advanced Visual Search analyzes a 2048-dimensional space, delivering content with matching tones, landscapes, settings, landmarks, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['scoring-section']}>
                <div className='container'>
                    <div className={`row align-items-center ${ContainAiStyles['reverse-row']} ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    UGC Recommendation Scoring
                                </h3>
                                <p className='section-text'>
                                    Eliminate the guesswork in UGC moderation with AI-powered scoring. Camelab analyzes every post, providing recommendation scores to help you quickly filter, highlight the best content, and ensure brand alignment effortlessly.
                                </p>

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/scoring.png' alt='section image' height={318} width={536} layout="responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['personalized-section']}>
                <div className='container common-spacing'>
                <div className={`row align-items-center ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/personalized.svg' alt='section image' height={418} width={536} layout="responsive" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    Personalized Content Experiences
                                </h3>
                                <p className='section-text'>
                                    Camelab adapts to your moderation actions, building a unique profile based on content preferences. This enhances speed, depth, and scalability, enabling you to deliver engaging, personalized content experiences across any channel.
                                </p>
                            </div>
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
                                    "Camelab’s machine learning refines the search, helping me find the most relevant user-generated content that we can utilize, obtain rights for, and repurpose effectively."
                                </p>
                                <div className={ContainAiStyles['review-slider']}>
                                    <ReviewSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['analysis-section']}>
                <div className='container common-spacing'>
                <div className={`row align-items-center ${ContainAiStyles['reverse-row']} ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    AI-Powered Content Analysis
                                </h3>
                                <p className='section-text'>
                                    Camelab analyzes every post with AI-powered object detection and auto-tagging. Harness UGC with advanced artificial intelligence to enhance content analysis and unlock deeper insights.
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/analysis-img.png' alt='section image' height={318} width={536} layout="responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['scale-section']}>
                <div className='container'>
                <div className={`row align-items-cente ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/scale-img.png' alt='section image' height={418} width={536} layout="responsive" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    Personalized Content Experiences
                                </h3>
                                <p className='section-text'>
                                    Camelab streamlines searches to pinpoint the top 0.1% of high-quality content—eliminating the need to scroll through endless posts. Scale smarter UGC curation, build a library of engaging, trustworthy content, and showcase the best visuals across every stage of the buyer journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['visulize-section']}>
                <div className='container common-spacing'>
                <div className={`row align-items-center ${ContainAiStyles['reverse-row']} ${ContainAiStyles['section-row']}`}>
                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['text-content']}>
                                <h3 className='main-heading'>
                                    Visualize User Attention
                                </h3>
                                <p className='section-text'>
                                    Camelab’s Attention Score lets you see through the eyes of your audience, revealing what captures attention in visual content. Instantly test and optimize creatives before publishing to maximize engagement and drive desired actions.
                                </p>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className={ContainAiStyles['img-content']}>
                                <Image src='/images/content-ai/visulize.png' alt='section image' height={318} width={536} layout="responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ContainAiStyles['client-section']}>
                <div className='container common-spacing'>
                    <h4 className='main-heading text-center'>
                        Clients & Projects
                    </h4>
                    <p className='section-text text-center'>
                        Embark on transformative journeys with Camelab, exploring how our innovative solutions empower clients and partners to realize their business aspirations
                    </p>
                    <div className='common-spacing'></div>
                    <Brands />
                </div>
            </section>

            <NewsletterSection
                heading="Don’t miss out on the power of user-generated content"
                description="With our advanced platform and a world-class team ready to help you, it’s easy to get started with TINT."
            />
            <Footer />
        </div>
    )
}
