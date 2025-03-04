"use client";

import Header from '../component/header'
import creatorStyle from "../styles/creator.module.css"
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../component/footer';
import React from 'react'
import HorizontalAccordion from '../component/horizontalAccordion';
import VerticalAccordion from '../component/verticalAccordion';
import FAQ from '../component/FAQ';

export default function Creator() {
    return (
        <>
            <Header />
            <section className={`${creatorStyle['banner-section']}`}>
                <Container>
                    <div className={`${creatorStyle['text-part']}`}>
                        <h3>Join our community of video creators</h3>
                        <p>Create short videos for the brands you love – get free products
                            and cash rewards. It’s super easy to join!</p>
                        <div className={`${creatorStyle['app-store']}`}>
                            <Image src={require('../../assets/images/creator/app-store.svg').default} alt="brands-img" />
                            <Image src={require('../../assets/images/creator/google-play.svg').default} alt="brands-img" />
                        </div>
                    </div>
                </Container>

            </section>

            <section className={`${creatorStyle['horizontal-accordion']}`}>
                <Container>


                    <div className={`${creatorStyle['text-part']}`}>
                        <h3 className='main-heading'>Start working with <span>creators</span> in
                            4 easy steps</h3>
                        <p className='secondary-text'>Every step is integrated into the platform to streamline your collaborations.</p>
                    </div>
                    <HorizontalAccordion />
                    <VerticalAccordion />
                </Container>

            </section>



            {/* inclusive-hub section */}
            <section className={`${creatorStyle['inclusive-hub']}`}>
                <Container>
                    <div className='text-part'>
                        <h3 className="main-heading">
                            Your all-inclusive hub for
                            forging creator partnerships
                        </h3>
                        <p className="secondary-text">Streamline your creator partnerships with our comprehensive platform, offering everything you need in one convenient location. From discovery to collaboration, we're your one-stop shop for seamless and successful creator collaborations.</p>
                    </div>

                    <div className='core-cards'>
                        <Row>
                            <Col lg={4} md={6} className='sub-card'>
                                <div className='card-content'>
                                    <div className='logo-part creator-logo-part'>
                                        <Image src={require('../../assets/images/creator/video.svg').default} width={80} height={80} alt="core-cards-img" />
                                    </div>
                                    <div className='text-part'>
                                        <h5>Create video</h5>
                                        <p>Transform ideas into captivating visuals with our dynamic video creation tool.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} className='sub-card scale-up'>
                                <div className='card-content'>
                                    <div className='logo-part creator-logo-part'>
                                        <Image src={require('../../assets/images/creator/rewards.svg').default} width={80} height={80} alt="core-cards-img" />
                                    </div>
                                    <div className='text-part'>
                                        <h5>Rewards</h5>
                                        <p>Unlock exclusive rewards by unleashing your creativity through video creation.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={12} className='sub-card'>
                                <div className='card-content'>
                                    <div className='logo-part creator-logo-part'>
                                        <Image src={require('../../assets/images/creator/setting.svg').default} width={80} height={80} alt="core-cards-img" />
                                    </div>
                                    <div className='text-part'>
                                        <h5>Marketing at one Place</h5>
                                        <p>Elevate your video marketing strategy with our all-in-one platform.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>




            {/* faq section */}
            <FAQ />


            <Footer />
        </>
    )
} 
