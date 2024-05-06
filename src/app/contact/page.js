"use client"

import Header from '../component/header'
import '../globals.css'
import contactStyles from '../styles/contact.module.css'
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <>
      <Header />
      <div className={`${contactStyles['contact-section']}`}>
        <div className={`${contactStyles['contact-banner-section']}`}>
          <Container>
            <div className={`${contactStyles['contact-section-content']}`}>
              <h3 className='main-heading'>Contact Us</h3>
              <p>Connect with us at Camelab, your partner in digital transformation, and let's together turn challenges into opportunities for scalable and sustainable growth.</p>
            </div>
            <div>
              <Row>
                <Col lg={6}>
                  <div className={`${contactStyles['contact-form-section']}`}>
                    <Form>
                      <Row>
                        <Col lg={6} sm={12}>
                        <Form.Group className="mb-3" >
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="name" placeholder="Enter your first name" />
                        </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                          <Form.Group className="mb-3" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="password" placeholder="Enter your last name" />
                          </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                          <Form.Group className="mb-3" >
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="tel" placeholder="Password" />
                          </Form.Group>
                        </Col>
                        <Col lg={6} sm={12}>
                          <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                          </Form.Group>
                        </Col>
                        <Col lg={12} sm={12}>
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Send Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='write something here..' />
                          </Form.Group>
                        </Col>
                        </Row>
                      <Button type="submit" className='primary-btn'>
                        Submit Now
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${contactStyles['contact-img-section']}`}>
                    <Image
                      src={require('../../assets/images/contact/contact-banner.png').default}
                      alt="contact banner image"
                      className={`${contactStyles['contact-img']}`}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className={`${contactStyles['contact-card-section']}`}>
          <Container>
            <Row>
              <Col>
                <div className='card'>
                  <div className='card-image-div'>
                    <Image
                      src={require('../../assets/images/contact/contact-card-location.png').default}
                      alt="location"
                      className='card-img'
                    />
                  </div>
                  <div className='card-heading'>
                    <h6>Our Location</h6>
                  </div>
                  <div className='card-content'>
                    <p>Ahmed Farouk
                      King Fahad Road, Riyadh - 13217</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='card'>
                  <div className='card-image-div'>
                    <Image
                      src={require('../../assets/images/contact/contact-card-chat.png').default}
                      alt="chat"
                      className='card-img'
                    />
                  </div>
                  <div className='card-heading'>
                    <h6>Let's Talk</h6>
                    <div className='card-content'>
                      <p>Phone:  +966 546 286 962</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='card'>
                  <div className='card-image-div'>
                    <Image
                      src={require('../../assets/images/contact/contact-card-mail.png').default}
                      alt="mail"
                      className='card-img'
                    />
                  </div>
                  <div className='card-heading'>
                    <h6>E-mail</h6>
                  </div>
                  <div className='card-content'>
                    <p>ahmed@camelab.co</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
