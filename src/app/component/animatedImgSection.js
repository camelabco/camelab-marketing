import animatedImgStyles from '../styles/animatedImg.module.css'
import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function AnimatedImgSection() {
    return (
        <div className={`${animatedImgStyles['order-content-section']}`}>
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} className='d-flex align-items-center'>
                        <div className={`${animatedImgStyles['order-content-text-part']} px-3`}>
                            <h3 className='main-heading'>Our Content Creators are
                                ready to make Brand Collaboration</h3>
                            <p className='secondary-text'>Social is a user-generated content creation hub that connects brands with a community of over 17,000 Saudi based content creators. Brands can easily collaborate with these creators to produce authentic and engaging.</p>
                            <div className={`${animatedImgStyles['button-part']}`}>  <button className='primary-button mt-3'>Order Now</button></div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className={`${animatedImgStyles['order-image-section']}`}>
                            <div className={`${animatedImgStyles['order-img-div']}`}>
                                <div className={`${animatedImgStyles['like-section']}`}>
                                    <div className={`${animatedImgStyles['like-img']}`}>
                                        <Image
                                            src={require('../../assets/images/animated-img/like.svg').default}
                                            alt="like image"
                                        />
                                    </div>
                                    <div className={`${animatedImgStyles['like-text']}`}><h3>180k </h3></div>
                                </div>
                                <Image
                                    src={require('../../assets/images/animated-img/order-sec-img.png').default}
                                    alt="about order image"
                                    className={`${animatedImgStyles['order-img']}`}
                                />
                                <div className={`${animatedImgStyles['comment-section']}`}>
                                    <div className={`${animatedImgStyles['comment-img']}`}>
                                        <Image
                                            src={require('../../assets/images/animated-img/comment.svg').default}
                                            alt="comment image"
                                        />
                                    </div>
                                    <div className={`${animatedImgStyles['like-text']}`}><h3> 45k </h3></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}