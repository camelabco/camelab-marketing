import Header from '../component/header'
import '../globals.css'
import contactStyles from '../styles/contact.module.css'
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import ContactForm from '../component/contactForm'

export default function Contact() {

  return (
    <>
      <Header />
      <div className={`${contactStyles['contact-section']}`}>
        <div className={`${contactStyles['contact-banner-section']}`}>
          <Container>
            <div className={`${contactStyles['contact-section-content']}`}>
              <h3 className='main-heading mb-3'>Contact Us</h3>
              <p>Connect with us at Camelab, your partner in digital transformation, and let's together turn challenges into opportunities for scalable and sustainable growth.</p>
            </div>
            <div>
              <div className={`${contactStyles['contact-mobile-image-section']}`}>
                <Image
                  src={require('../../assets/images/contact/contact-banner.png').default}
                  alt="contact banner image"
                  className={`${contactStyles['contact-img']}`}
                />
              </div>
              <Row>
                <Col lg={6}>
                  <div className={`${contactStyles['contact-form-section']}`}>
                    <ContactForm />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${contactStyles['contact-desktop-img-section']}`}>
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
            <Row className="justify-content-center">
              <Col lg={4} md={6} sm={12} className='common-animated-card'>
                <div className='card'>
                  <div className='card-image-div'>
                    <svg className='card-img ' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.004 19.95L34.324 8.84603C37.724 7.22603 41.272 10.776 39.654 14.178L28.55 37.496C27.032 40.682 22.432 40.486 21.192 37.18L19.14 31.702C18.9395 31.1676 18.6269 30.6823 18.2233 30.2787C17.8197 29.8751 17.3344 29.5625 16.8 29.362L11.32 27.308C8.01597 26.068 7.81797 21.468 11.004 19.95Z" stroke="#8224E3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='large-circle'></div>
                    <div className='small-circle'></div>
                  </div>
                  <div className='card-heading'>
                    <h6>Our Location</h6>
                  </div>
                  <div className='card-content'>
                    <Link href={'#'}>Ahmed Farouk
                      King Fahad Road, Riyadh - 13217</Link>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='common-animated-card'>
                <div className='card'>
                  <div className='card-image-div'>
                    <svg className='card-img' width="48" height="48" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_435_4235)">
                        <path d="M30.6667 34.6666C30.6667 35.0202 30.5262 35.3594 30.2762 35.6094C30.0261 35.8595 29.687 36 29.3334 36H10.6667C10.3734 36 10.0934 36.2666 9.85335 36.44L5.33335 40V18.6666C5.33335 18.313 5.47383 17.9739 5.72388 17.7238C5.97393 17.4738 6.31307 17.3333 6.66669 17.3333H11.8134V14.6666H6.66669C5.60582 14.6666 4.58841 15.0881 3.83826 15.8382C3.08811 16.5883 2.66669 17.6058 2.66669 18.6666V42.6666C2.66867 42.9143 2.73958 43.1564 2.87146 43.366C3.00333 43.5756 3.19098 43.7443 3.41335 43.8533C3.62759 43.9507 3.8638 43.9897 4.09799 43.9663C4.33217 43.9429 4.55598 43.8579 4.74669 43.72L11.6134 38.6666H29.5334C30.0387 38.6816 30.5417 38.5926 31.0113 38.4052C31.4809 38.2179 31.9069 37.9361 32.2632 37.5773C32.6194 37.2186 32.8982 36.7905 33.0823 36.3197C33.2664 35.8488 33.3518 35.3452 33.3334 34.84V33.3333H30.6667V34.6666Z" fill="#8224E3" />
                        <path d="M41.3334 5.33337H18.6667C17.6058 5.33337 16.5884 5.7548 15.8383 6.50495C15.0881 7.25509 14.6667 8.27251 14.6667 9.33337V25.3334C14.6667 26.3942 15.0881 27.4117 15.8383 28.1618C16.5884 28.9119 17.6058 29.3334 18.6667 29.3334H36.7334L43.1067 34.28C43.2962 34.4201 43.5194 34.5075 43.7536 34.5333C43.9878 34.559 44.2246 34.5223 44.44 34.4267C44.6669 34.3186 44.8587 34.1487 44.9931 33.9363C45.1276 33.724 45.1993 33.478 45.2 33.2267V9.33337C45.2006 8.29521 44.7975 7.29749 44.076 6.55106C43.3544 5.80464 42.3709 5.36798 41.3334 5.33337ZM42.6667 30.5867L38 26.9467C37.7673 26.7661 37.4813 26.6676 37.1867 26.6667H18.6667C18.3131 26.6667 17.9739 26.5262 17.7239 26.2762C17.4738 26.0261 17.3334 25.687 17.3334 25.3334V9.33337C17.3334 8.97975 17.4738 8.64061 17.7239 8.39057C17.9739 8.14052 18.3131 8.00004 18.6667 8.00004H41.3334C41.6898 8.03239 42.022 8.19393 42.2676 8.45425C42.5132 8.71456 42.6551 9.05569 42.6667 9.41337V30.5867Z" fill="#8224E3" />
                      </g>
                    </svg>
                    <div className='large-circle'></div>
                    <div className='small-circle'></div>
                  </div>
                  <div className='card-heading'>
                    <h6>Let's Talk</h6>
                    <div className='card-content'>
                      <Link href={'#'}>Phone:  +966 546 286 962</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12} className='common-animated-card'>
                <div className='card'>
                  <div className='card-image-div'>
                    <svg className='card-img' width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_435_4246)">
                        <path d="M44 42H5C2.51 42 0.5 39.99 0.5 37.5V10.5C0.5 8.01 2.51 6 5 6H44C46.49 6 48.5 8.01 48.5 10.5V37.5C48.5 39.99 46.49 42 44 42ZM5 9C4.16 9 3.5 9.66 3.5 10.5V37.5C3.5 38.34 4.16 39 5 39H44C44.84 39 45.5 38.34 45.5 37.5V10.5C45.5 9.66 44.84 9 44 9H5Z" fill="#8224E3" />
                        <path d="M24.4998 28.88C22.3998 28.88 20.4798 28.04 19.0398 26.51L3.28977 9.76999C2.71977 9.16999 2.74977 8.20999 3.34977 7.63999C3.94977 7.06999 4.90977 7.09999 5.47977 7.69999L21.2298 24.44C22.9398 26.27 26.0598 26.27 27.7698 24.44L43.5198 7.72999C44.0898 7.12999 45.0498 7.09999 45.6498 7.66999C46.2498 8.23999 46.2798 9.19999 45.7098 9.79999L29.9598 26.54C28.5198 28.07 26.5998 28.91 24.4998 28.91V28.88Z" fill="#8224E3" />
                      </g>
                    </svg>
                    <div className='large-circle'></div>
                    <div className='small-circle'></div>
                  </div>
                  <div className='card-heading'>
                    <h6>E-mail</h6>
                  </div>
                  <div className='card-content'>
                    <Link href={'#'}>ahmed@camelab.co</Link>
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
