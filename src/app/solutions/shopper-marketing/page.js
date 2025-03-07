import Brands from '@/app/component/brands';
import Footer from '@/app/component/footer'
import Header from '@/app/component/header'
import solutionCommonStyle from "@/app/styles/solutionCommon.module.css";
import React from 'react'
import Image from 'next/image';
import BlogsSection from '@/app/component/blogsSection';
import FAQ from '@/app/component/FAQ';
import NewsletterSection from '@/app/component/newsletterSection';
import SolutionsHeroSection from '@/app/component/solutionsHeroSection';
import Cards from '@/app/component/cards';
const commonCards =[
  {
    imageSrc: "/images/cards/card_9.svg",
    title: "Fast & Easy to Launch",
    description:
      "Launch a fully customizable owned community in 4 weeks, no coding required.",
  },
  {
    imageSrc: "/images/cards/card_10.svg",
    title: "20+ Survey Question Types",
    description:
      "Deliver tailored surveys to collect audience feedback.",
  },
  {
    imageSrc: "/images/cards/card_11.svg",
    title: "Dynamic Profiles & Grouping",
    description:
      "Survey data is linked to each consumer’s profile, enabling audience segmentation by traits.",
  },
  {
    imageSrc: "/images/cards/card_12.svg",
    title: "Survey Personalization",
    description: "Camelab’s survey platform adapts in real time to gather precise insights from the right audience.",
  }
]

const blogData = [
    {
        imgSrc: '/images/blog/blog4.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog5.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog6.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    }
]

export default function page() {
    return (
        <div>
            <Header />
            <div className={`hero-section common-spacing`}>
                <SolutionsHeroSection title='Shopper Marketing Powered by' highLight='Community' description='Whether boosting in-store traffic, leveraging e-commerce, or balancing both, Camelab’s community platform maximizes your shopper marketing impact.' />
            </div>
            <Brands />
            {/* survey-section */}
            <div className={`${solutionCommonStyle['survey-section']} common-spacing`}>
                <div className="container">
                    <div className={`${solutionCommonStyle['survey-content']}`}>
                        <div>
                            <p>"Driving in-store sales through digital channels is challenging, but our community bridges the gap. By creating engaging missions, Camelab empowers consumers to take action at the retail level, boosting offline sales."</p>
                            <h6>– Layla Al-Farsi, Senior Brand Manager, Camelab</h6>
                        </div>
                        <div className={`${solutionCommonStyle['survey-card']}`}>
                            <h3>+30%</h3>
                            <h4>Higher-Than-Average Coupon Redemption Rate</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* launch-Survey-section */}
            <div className={`common-spacing`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src='/images/shopper-marketing/ContentImage.png' width={536} height={604} layout='responsive' />
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Amplify Retail Promotions and Increase Traffic</h3>
                                <p className='section-text'>Activate your brand community to boost awareness and sales during key promotions. With Camelab’s advanced audience segmentation, engage advocates and influencers to drive in-store and online purchases, generating impactful UGC and social advocacy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* enhance-Survey-section */}
            <section className={`${solutionCommonStyle['light-gradient-bg']} common-spacing pt-0`}>
                <div className="container">
                    <div className="row reverse-row gy-3">
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Track Audience Behavior and Sentiment Over Time</h3>
                                <p className='section-text'>Conduct longitudinal studies on targeted consumer groups, uncovering trends, behavioral shifts, and sentiment changes over time. Camelab provides a comprehensive understanding of evolving attitudes and actions, helping you stay ahead with data-driven insights.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image src='/images/surveysandpolls/track-audience.svg' width={536} height={604} layout='responsive' />
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <div className={`common-spacing`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src='/images/shopper-marketing/ClientImage.png' width={536} height={604} layout='responsive' />
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Create Buzz at Shelf for New Product Launches</h3>
                                <p className='section-text'>Camelab’s online community platform builds excitement for new product launches. From “shelfies” to retail scavenger hunts, mobilize consumers to boost visibility and drive sales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className={`${solutionCommonStyle['light-gradient-bg']} common-spacing`}>
                <div className="container">
                    <div className="row reverse-row gy-3">
                        <div className="col-lg-5">
                            <Image src='/images/surveysandpolls/phone-img.svg' width={536} height={604} layout='responsive' />
                        </div>
                        <div className="col-lg-7">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Seed Pre-Launch Ratings & Reviews at Key Retail Channels</h3>
                                <p className='section-text'>Generate and curate authentic reviews from trusted sources to build anticipation before launch. With Camelab’s integration to Bazaarvoice, seamlessly distribute reviews across key retail channels to enhance credibility and drive product success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Cards heading='Smart & Personalized Surveys' cards={commonCards} />

            {/* Brands Trust */}
            <div className={`${solutionCommonStyle['brands-trust']} common-spacing`}>
                <div className="container">
                    <h3 className='main-heading text-center'>Why Top Brands Trust Camelab</h3>
                    <div className={`${solutionCommonStyle['brands-content']}`}>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className='d-flex flex-column justify-content-center h-100'>
                                    <h4>Camelab Drives 30% Higher-Than-Average Redemption Rate</h4>
                                    <p className='section-text'>See how Veggies Made Great grew their VegHead community to drive retail conversion with a retail-specific Plant-A-Coupon campaign and ultimately drove a 20% lift in sales since launching their community.</p>
                                    <div className='d-flex justify-content-center justify-content-lg-start w-100'><button className='primary-button white'>View Case Study</button></div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <Image src='/images/shopper-marketing/client-trust.png' width={336} height={380} layout='responsive' alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blogs Section */}
            <BlogsSection blogs={blogData} />
            {/* faq section */}
            <FAQ />
            {/* news letter */}
            <NewsletterSection smallNewsletter={true} heading='Revolutionize Your Shopper Marketing Strategy' />
            <Footer />
        </div>
    )
}