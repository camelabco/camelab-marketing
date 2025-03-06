"use client"
import AnimatedImgSection from '@/app/component/animatedImgSection'
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

export default function page() {
  return (
    <div>
      <Header />
      <div className={`${SolutionsHeroSectionStyle['hero-section']} common-spacing`}>
        <AnimatedImgSection title='Gather On-Demand Insights with Community Powered' heighLight='Surveys & Polls' description='Harness real-time data collection to make informed decisions, adapt to changing trends, and keep your finger on the pulse of your audience’s preferences.' />
      </div>
      <Brands />
      {/* survey-section */}
      <div className={`${solutionCommonStyle['survey-section']} common-spacing`}>
        <div className="container">
          <div className={`${solutionCommonStyle['survey-content']}`}>
            <div>
              <p>"For the past 2.5 years, our creator community has been our go-to for everything. Their insights and engagement have been invaluable. We consistently receive messages about how much they love Camelab and being part of this network. It has played a crucial role in our growth strategy, activating and nurturing a passionate group of super fans."</p>
              <h6>– Aaliyah Rahman, Brand Strategy Manager, Camelab</h6>
            </div>
            <div className={`${solutionCommonStyle['survey-card']}`}>
              <h3>510k+</h3>
              <h4>Surveys Responses Collected</h4>
            </div>
          </div>
        </div>
      </div>
      {/* launch-Survey-section */}
      <div className={`common-spacing`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image src='/images/surveysandpolls/launch-Survey.png' width={536} height={604} layout='responsive' />
            </div>
            <div className="col-lg-6">
              <div className='d-flex flex-column justify-content-center h-100'>
                <h3 className='main-heading'>Launch a Survey or Poll in Minutes</h3>
                <p className='section-text'>From rapid feedback to in-depth audience analysis, Camelab enables you to launch comprehensive surveys or engaging polls in minutes—streamlining the process to collect valuable insights effortlessly.</p>
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
                <h3 className='main-heading'>Enhance Survey Quality and Personalize Surveys</h3>
                <p className='section-text'>Gain deeper insights with adaptive skip logic that tailors questions based on responses. Categorize and analyze data with precision, uncover patterns, and enhance your understanding of diverse audience segments with Camelab.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src='/images/Client-Testimonial-img.svg' width={536} height={604} layout='responsive' />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className={`common-spacing`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image src='/images/surveysandpolls/track-audience.svg' width={536} height={604} layout='responsive' />
            </div>
            <div className="col-lg-6">
              <div className='d-flex flex-column justify-content-center h-100'>
                <h3 className='main-heading'>Track Audience Behavior and Sentiment Over Time</h3>
                <p className='section-text'>Conduct longitudinal studies on targeted consumer groups, uncovering trends, behavioral shifts, and sentiment changes over time. Camelab provides a comprehensive understanding of evolving attitudes and actions, helping you stay ahead with data-driven insights.</p>
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
                <h3 className='main-heading'>Collect Actionable Feedback for Your Brand</h3>
                <p className='section-text'>Engage targeted supporters to co-create innovations, solve challenges, and uncover strengths—all at a fraction of the cost and time of traditional research with Camelab.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Image src='/images/surveysandpolls/phone-img.svg' width={536} height={604} layout='responsive' />
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className={`common-spacing`}>
        <div className="container">
          <div className="row gx-4">
            <div className="col-lg-6">
              <Image src='/images/surveysandpolls/Tertiary-Image.png' width={536} height={604} layout='responsive' />
            </div>
            <div className="col-lg-6">
              <div className='d-flex flex-column justify-content-center h-100'>
                <h3 className='main-heading'>Optimize Creative Concepts</h3>
                <p className='section-text'>Uncover intuitive consumer responses to messaging, imagery, and packaging with Camelab’s insights and analytics tools—enhancing creative effectiveness and impact.</p>
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
              <div className="col-lg-8">
                <div className='d-flex flex-column justify-content-center h-100'>
                  <h4>Sir Kensington’s Uses Community Surveys to Create Eater Profiles in Audience Targeting</h4>
                  <p className='section-text'>Unilever’s Sir Kensington’s brand launched its Taste Buds community and deploys surveys and polls often to understand its audience better and inform media targeting. See how they achieved more than 50,000 survey responses. </p>
                  <div className='d-flex justify-content-center justify-content-lg-start w-100'><button className='primary-button white'>View Case Study</button></div>
                </div>
              </div>
              <div className="col-lg-4">
                <Image src='/images/surveysandpolls/brands-trust-img1.png' width={336} height={380} layout='responsive' alt='img' />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Blogs Section */}
      <BlogsSection />
      {/* faq section */}
      <FAQ />

      {/* news letter */}
      <NewsletterSection smallNewsletter={true} />


      <Footer />
    </div>
  )
}
