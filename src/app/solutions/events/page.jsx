import React from 'react';
import eventStyles from '@/app/styles/event.module.css'
import Image from 'next/image';
import NewsletterSection from '@/app/component/newsletterSection';
import Header from '@/app/component/header';
import Footer from '@/app/component/footer';

export default function EventsPage() {
    return (

        <div>
            <Header />
            <section className={eventStyles['banner-section']}>
                <div className='container'>
                    <div>
                        <h6 className='main-heading text-white text-center'>
                            Camelab social walls are sunsetting as we evolve to offer more impactful engagement tools.
                        </h6>
                        <p className='section-text text-white text-center'>Camelab will continue to support existing event customers with scheduled and future events. Current customers should contact their customer success representative to schedule new or repeating events.</p>
                    </div>
                </div>
            </section>

            <section className={`${eventStyles['connection-section']} common-spacing`}>
                <div className='container my-xl-5'>
                    <div className='row align-items-center gy-5'>
                        <div className='col-lg-6'>
                            <div className={eventStyles['img-content']}>
                                <Image src='/images/events/connection.png' alt='section image' height={540} width={536} layout='responsive' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={eventStyles['text-content']}>
                                <h4 className='main-heading'>Reflecting on a Decade of Connection</h4>
                                <p className='section-text'>Since launch, Camelab social walls have connected communities, transforming events and marketing with authentic UGC. They became a stage for real stories, inspiring collaboration and creativity.</p>
                                <p className='section-text mt-3'>From global conferences to local fairs, weddings to product launches, countless moments came to life on Camelab social walls, highlighting the content that mattered most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${eventStyles['next-section']} common-spacing`}>
                <div className='container'>
                    <div className='row align-items-center gy-5 reverse-row'>
                        <div className='col-lg-6 '>
                            <div className={eventStyles['text-content']}>
                                <h4 className='main-heading'>What’s Next?</h4>
                                <p className='section-text'>While Camelab social walls may be retiring, we remain committed to helping you leverage UGC, community-driven content, and Zero Party Data with innovative marketing tools.</p>
                                <p className='section-text mt-3'>Have you explored Camelab’s solutions lately? If you valued social walls, you’ll love our advanced content curation, customizable campaigns, and deep analytics for actionable insights.</p>
                                <div className='mt-4 d-flex justify-content-lg-start justify-content-center'>
                                    <button className='primary-button '>
                                        Talk to a Camelab Community Marketing Specialist.
                                    </button>
                                </div>
                                <p className={`${eventStyles['note-text']} text-lg-left text-center`}>Here’s to the next decade of building connections and telling stories — together.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className={eventStyles['img-content']}>
                                <Image src='/images/events/next.png' alt='section image' height={540} width={536} layout='responsive' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <NewsletterSection heading='Revolutionize Collaboration with Creators & Influencers' description='Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.' />
            <Footer />
        </div>
    )
}
