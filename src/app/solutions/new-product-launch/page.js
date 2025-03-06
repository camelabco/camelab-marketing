"use client"
import SolutionsHeroSection from '@/app/component/solutionsHeroSection';
import Brands from '@/app/component/brands';
import Footer from '@/app/component/footer'
import Header from '@/app/component/header'
import SolutionsHeroSectionStyle from "@/app/styles/solutionsHeroSection.module.css";
import solutionCommonStyle from "@/app/styles/solutionCommon.module.css";
import React from 'react'
import Image from 'next/image';
import BlogsSection from '@/app/component/blogsSection';
import FAQ from '@/app/component/FAQ';
import NewsletterSection from '@/app/component/newsletterSection';
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
        imgSrc: '/images/blog/blog7.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog8.png',
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
    return (
        <div>
            <Header />
            <div className={`${SolutionsHeroSectionStyle['hero-section']} common-spacing`}>
                <SolutionsHeroSection title='Ensure a Successful Product Launch With' heighLight='Community Powered Marketing' description='Harness authentic UGC and reviews with Camelab to gain key insights and ensure go-to-market success, driving immediate sales impact.' src='/images/hero-section/new-product.png' />
            </div>
            <Brands />
            {/* survey-section */}
            <div className={`${solutionCommonStyle['survey-section']} common-spacing`}>
                <div className="container">
                    <div className={`${solutionCommonStyle['survey-content']}`}>
                        <div>
                            <p>"With every new launch, we move forward with confidence, knowing our community has already validated our ideas. At Camelab, we engage our dedicated creators and influencers to gain real insights, ensuring each innovation aligns with our brand and resonates with our audience."</p>
                            <h6>- Amira Al-Farsi, Brand Manager, Camelab</h6>
                        </div>
                        <div className={`${solutionCommonStyle['survey-card']}`}>
                            <h3>+34k</h3>
                            <h4>Community Members to Advocate for New Products</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* launch-Survey-section */}
            <div className={`common-spacing`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image src='/images/new-product/ContentImage.png' width={536} height={604} layout='responsive' />
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Establish Social Proof Before Your Product Hits the Market</h3>
                                <p className='section-text'>Transform your loyal consumers into passionate advocates, generating buzz for your product launches before they hit the shelves. Seamlessly run sampling campaigns and distribute UGC and reviews across key retail platforms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* enhance-Survey-section */}
            <section className={`${solutionCommonStyle['light-gradient-bg']} common-spacing`}>
                <div className="container">
                    <div className="row reverse-row gy-3">
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Integrate Ecommerce Into Your Community Experience</h3>
                                <p className='section-text'>Drive immediate sales of new products. With shoppable posts, add-to-cart features, tailored promotions, and rights-approved UGC distribution across your marketing mix, you can expedite conversion to your ecommerce channels.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image src='/images/new-product/e-commerce-img.png' width={536} height={604} layout='responsive' />
                        </div>
                    </div>
                </div>
            </section>
            {/*  */}
            <div className={`common-spacing`}>
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <Image src='/images/Client-Testimonial-img.svg' width={536} height={604} layout='responsive' />
                        </div>
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Optimize Creative Concepts and Accelerate Launch Velocity</h3>
                                <p className='section-text'>Gain real-time consumer insights with an always-on panel, keeping you connected to market trends. Gather competitive intelligence, product feedback, and crowdsourced ideas to drive successful launches while minimizing risk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className={`${solutionCommonStyle['light-gradient-bg']} common-spacing`}>
                <div className="container">
                    <div className="row reverse-row gy-3">
                        <div className="col-lg-6">
                            <div className='d-flex flex-column justify-content-center h-100'>
                                <h3 className='main-heading'>Increase Retention and Build Long-Term Brand Loyalty</h3>
                                <p className='section-text'>Deliver consistent hyper-personalized experiences with engaging brand activities that build excitement around your brand and grow anticipation for your new product launches.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image src='/images/new-product/phone-img.png' width={536} height={604} layout='responsive' />
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
                            <div className="col-lg-8">
                                <div className='d-flex flex-column justify-content-center h-100'>
                                    <h4>Naomi Watt’s Stripes New Brand Launches with HotSpot Community</h4>
                                    <p className='section-text'>To drive awareness, engagement, and advocacy, Stripes launched the Hot Spot community—a dedicated space for consumers to connect with the brand and find support in their midlife menopause journey.</p>
                                    <div className='d-flex justify-content-center justify-content-lg-start w-100'><button className='primary-button white'>View Case Study</button></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <Image src='/images/new-product/phone-img2.png' width={336} height={380} layout='responsive' alt='img' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Blogs Section */}
            <BlogsSection blogs={blogData}/>
            {/* faq section */}
            <FAQ />
            {/* news letter */}
            <NewsletterSection smallNewsletter={true} heading='Launch Products With Your Community' />
            <Footer />
        </div>
    )
}

