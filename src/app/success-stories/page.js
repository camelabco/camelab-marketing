'use client'

import React, { useState } from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import SolutionsHeroSection from '../component/solutionsHeroSection'
import Brands from '../component/brands'
import BlogsSection from '../component/blogsSection'
import ContainAiStyles from '@/app/styles/contentAi.module.css';
import ReviewSlider from '../component/reviewSlider'
import Image from 'next/image'
import NewsletterSection from '../component/newsletterSection'

const blogData = [
    {
        imgSrc: '/images/blog/blog10.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog11.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog12.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog13.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog14.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog9.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog10.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog11.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog12.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog13.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog14.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog9.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    }
]

export default function page() {
    const [blog, setblog] = useState(6);

    const loadMoreBlog = () => {
        setblog((prewBlog) => Math.min(prewBlog + 3, blogData.length))
    }
    return (
        <div>
            <Header />
            {/*  */}
            <div className='common-spacing'>
                <SolutionsHeroSection title='Here’s how Camelab empowers' heighLight='brands like yours' description='These 20+ brands drove engagement, boosted conversions, and scaled their marketing using Camelab' />
            </div>
            {/*  */}
            <Brands />
            <BlogsSection mainHeading='' blogs={blogData.slice(0, blog)} />
            {blog < blogData.length && <div className='d-flex justify-content-center common-spacing'><button onClick={loadMoreBlog} className="primary-button">Discover More</button></div>}
            {/*  */}
            <section className={ContainAiStyles['review-section']}>
                <div className='container common-spacing'>
                    <div className='mb-lg-5'>
                        <h3 className='main-heading text-center'>Reach your goals with Camelab</h3>
                        <p className='section-text text-center'>Hear how Lunaescent, Airnex, Impala Studios, and others used Camelab to create high-quality UGC videos that drive results.</p>
                    </div>
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
            {/*  */}
            <div>
                <NewsletterSection />
            </div>
            <Footer />
        </div>
    )
}
