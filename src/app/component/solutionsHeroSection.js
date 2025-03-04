import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import animatedImgStyles from '../styles/animatedImg.module.css'


export default function SolutionsHeroSection({ reverse = false, src = '/images/hero-section/shopper-marketing.png', heighLight = "", title = "Our Content Creators are ready to make Brand Collaboration", description = "Social is a user-generated content creation hub that connects brands with a community of over 17,000 Saudi based content creators. Brands can easily collaborate with these creators to produce authentic and engaging." }) {
    return (
        <div className={`${animatedImgStyles['order-content-section']}`}>
            <Container>
                <Row className={reverse ? 'flex-row-reverse' : ''}>
                    <Col lg={6} md={12} sm={12} className='d-flex align-items-center'>
                        <div className={`${animatedImgStyles['order-content-text-part']} px-4`}>
                            <h3 className='main-heading'>{title} <span>{heighLight}</span></h3>
                            <p className='secondary-text'>{description}</p>
                            <div className={`${animatedImgStyles['button-part']}`}>  <button className='primary-button mt-3'>Order Now</button></div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className={`${animatedImgStyles['order-image-section']}`}>
                            <Image width={584} height={584} layout='responsive'
                                src={src}
                                alt="img"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
