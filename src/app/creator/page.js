"use client";

import Header from '../component/header'
import creatorStyle from "../styles/creator.module.css"
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../component/footer';
import Accordion from 'react-bootstrap/Accordion';

import React from 'react'
import HorizontalAccordion from '../component/accordion';

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
                    {/* <HorizontalAccordion /> */}
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
                                    <div className='logo-part'>
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
                                    <div className='logo-part'>
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
                                    <div className='logo-part'>
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


            <section className={`${creatorStyle['faq-section']}`}>
                <Container>
                    <div className={`${creatorStyle['heading-part']}`}>
                        <h3 className="main-heading">FAQ</h3>
                    </div>


                    <Accordion defaultActiveKey="0">


                        <Accordion.Item eventKey="0">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How to use Camelab for user?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>Where can I see my video submission?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="2">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>Where can I can see graph in dashboard?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="3">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How make payment?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="4">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How create new campaign?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>


                        <Accordion.Item eventKey="5">
                            <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How check bill receipt?</h3> </Accordion.Header>
                            <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </Accordion.Body>
                        </Accordion.Item>




                    </Accordion>


                </Container>

            </section>




            <Footer />
        </>
    )
} 
