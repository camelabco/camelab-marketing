
import React from 'react'
import Header from '@/app/component/header'
import SolutionsHeroSection from '@/app/component/solutionsHeroSection'
import Brands from '@/app/component/brands'
import creatorStyles from '@/app/styles/becomeCreator.module.css'
import ReviewSlider from '@/app/component/reviewSlider';
import ContainAiStyles from '@/app/styles/contentAi.module.css';
import Image from 'next/image'
import NewsletterSection from '@/app/component/newsletterSection'
import BlogsSection from '@/app/component/blogsSection'
import FAQ from '@/app/component/FAQ';
import Footer from '../component/footer'

export default function BecomeCreatorPage() {
    return (
        <div>
            <Header />
            <section className='common-spacing'>
                <SolutionsHeroSection title='Are you a video ' highLight='creator?' description='Earn cash and free products by creating short videos for the brands you love. No need to be an influencer, just bring your video skills and creativity' buttonText='Create free account' src='/images/enterprise/creative.svg' />
            </section>
            <section className={creatorStyles['brands-part']}>
                <Brands />
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


            <section className={`${creatorStyles["passion-section"]} common-spacing`}>
        <div className="container">
          <div>
            <h2 className="main-heading text-center">
              Do you have a passion for making videos?
            </h2>
            <p className="section-text text-center">
              Earn rewards and free products by creating short videos for your
              favorite brands.
            </p>
          </div>
          <div
            className={`${creatorStyles["passion-card"]} d-flex flex-wrap justify-content-center`}
          >
            <div
              className={`${creatorStyles["passion-info"]} d-flex flex-column`}
            >
              <div className={creatorStyles["passion-img-section"]}>
                <p className={creatorStyles["passion-head"]}>1.</p>
              </div>
              <h6 className={creatorStyles["passion-title"]}>
                Sign-up for a free account.
              </h6>
              <p className={creatorStyles["passion-text"]}>
                Create an account in less than three minutes, and tell us basic
                information about you and the brands you’re looking for.
              </p>
            </div>
            <div
              className={`${creatorStyles["passion-info"]} d-flex flex-column `}
            >
              <div className={creatorStyles["passion-img-section"]}>
                <p
                  className={`${creatorStyles["passion-head"]} d-flex flex-column `}
                >
                  2.
                </p>
              </div>
              <h6 className={creatorStyles["passion-title"]}>
                Pitch your talent.
              </h6>
              <p className={creatorStyles["passion-text"]}>
                Upload a 30 second video to showcase your video creation skills
                and how comfortable are you in front of a camera.
              </p>
            </div>
            <div
              className={`${creatorStyles["passion-info"]} d-flex flex-column`}
            >
              <div className={creatorStyles["passion-img-section"]}>
                <p
                  className={`${creatorStyles["passion-head"]} d-flex flex-column`}
                >
                  3.
                </p>
              </div>
              <h6 className={creatorStyles["passion-title"]}>
                Start shooting content.
              </h6>
              <p className={creatorStyles["passion-text"]}>
                Receive the products at your door and start shooting content.
                You get to keep the products and get paid per video.
              </p>
            </div>
          </div>
          <div
            className={`${creatorStyles["passion-btn"]} d-flex justify-content-center align-items-center`}
          >
            <button className=" primary-button">Learn More</button>
          </div>
        </div>
      </section>

      <section
        className={`${creatorStyles["inspiration-section"]} common-spacing`}
      >
        <div className="container">

        <div>
            <h2 className="main-heading text-center">Inspiration</h2>
            <p className="section-text text-center">Intro videos from fellow creators</p>
          </div>

          <div className={`${creatorStyles["inspiration-images"]} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${creatorStyles["inspiration-img-section"]} d-flex flex-nowrap`}
            >
            <div>
                <Image
                  src="/images/become-creator/inspiration_1.svg"
                  alt="inspiration image"
                  width={205}
                  height={360}
                  layout="responsive"
                />
              </div>
              <div>
              <Image
                src="/images/become-creator/inspiration_2.svg"
                alt="inspiration image"
                width={513}
                height={360}
                layout="responsive"
              /> </div>
               <div>
              <Image
                src="/images/become-creator/inspiration_3.svg"
                alt="inspiration image"
                width={205}
                height={360}
                layout="responsive"
              />  </div>
              <div>
              <Image
                src="/images/become-creator/inspiration_4.svg"
                alt="inspiration image"
                width={205}
                height={360}
                layout="responsive"
              /></div>
            </div>
            <div   className={`${creatorStyles["inspiration-img-section"]} d-flex flex-nowrap`}>
                <div>
              <Image
                src="/images/become-creator/inspiration_5.svg"
                alt="inspiration image"
                width={423}
                height={360}
                layout="responsive"
              /> </div> <div>
              <Image
                src="/images/become-creator/inspiration_6.svg"
                alt="inspiration image"
                width={205}
                height={360}
                layout="responsive"
              /></div> <div>
              <Image
                src="/images/become-creator/inspiration_7.svg"
                alt="inspiration image"
                width={524}
                height={360}
                layout="responsive"
              /></div>
            </div>
          </div>
          <div
            className={`${creatorStyles["inspiration-btn"]} d-flex justify-content-center align-items-center`}
          >
            <button className=" primary-button">Sign up a creator</button>
          </div>
        </div>
      </section>


            <div className='common-spacing d-flex flex-column gap-lg-5 gap-2'>
                <section>
                    <div className='container'>
                        <h4 className='main-heading text-center'>Why use Clip?</h4>
                        <p className='section-text text-center'>Get compensated for your time and creativity and get to keep the products.</p>
                        <div className='row  align-items-center'>
                            <div className='col-lg-6'>
                                <Image src='/images/become-creator/section1.png' alt='section img' height={510} width={536} layout='responsive' />
                            </div>
                            <div className='col-lg-6'>
                                <h4 className='main-heading'>Find fantastic brands looking for video creators</h4>
                                <p className='section-text'>Our brands are on the hunt for video creators like you. Pick your favourites and create video content for them.</p>
                                <div className='pt-2 d-flex justify-content-lg-start justify-content-center'>
                                    <button className='primary-button'>Create free account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section >
                    <div className='container'>
                        <div className='row  align-items-center reverse-row'>
                            <div className='col-lg-6'>
                                <h4 className='main-heading'>Get paid to create videos</h4>
                                <p className='section-text'>You get paid directly in your PayPal for the videos you create. You get to keep the product and also receive payment ranging from $20 to $100 based on the length of the video and other factors.</p>
                                <div className='pt-2 d-flex justify-content-lg-start justify-content-center'>
                                    <button className='primary-button'>Sign up for free</button>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image src='/images/become-creator/section2.png' alt='section img' height={510} width={536} layout='responsive' />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='row  align-items-center'>
                            <div className='col-lg-6'>
                                <Image src='/images/become-creator/section3.png' alt='section img' height={510} width={536} layout='responsive' />
                            </div>
                            <div className='col-lg-6'>
                                <h4 className='main-heading'>You get to keep the products</h4>
                                <p className='section-text'>Have you ever wanted to get all the products you love for free? Now you can. Brands on Clip will deliver the products at your door, and you can keep them at no extra cost.</p>
                                <div className='pt-2 d-flex justify-content-lg-start justify-content-center'>
                                    <button className='primary-button'>Create free account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section >
                    <div className='container'>
                        <div className='row  align-items-center reverse-row'>
                            <div className='col-lg-6'>
                                <h4 className='main-heading'>Clip is free for video creators</h4>
                                <p className='section-text'>Clip is free for video creators, you won’t get any better deal than this.</p>
                                <div className='pt-2 d-flex justify-content-lg-start justify-content-center'>
                                    <button className='primary-button'>Sign up for free</button>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <Image src='/images/become-creator/section4.png' alt='section img' height={510} width={536} layout='responsive' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>                                                         
            <FAQ />
            <BlogsSection />
            <NewsletterSection heading='Revolutionize Collaboration with Creators & Influencers' description='Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience.' />
            <Footer />
        </div>
    )
}
