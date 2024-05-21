"use client";
import footerStyles from '../styles/footer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <div className={`${footerStyles['main-content']}`}>
      <Container>
        <Row className={`${footerStyles['footer-content']}`} >
          <Col lg={7} className={`${footerStyles['col-content']}`}>
            <div className={`${footerStyles['left-col-content']}`}>
              <Image
                src={require('../../assets/images/footer/footer-logo.svg').default}
                width={220}
                height={70}
                alt="camelab-logo"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div>
                <Link href="#"><Image
                  className={`${footerStyles['social-icon']}`}
                  src={require('../../assets/images/footer/facebook.svg').default}
                  width={24}
                  height={24}
                  alt="facebook-logo"
                /></Link>
                <Link href="#"><Image
                  className={`${footerStyles['social-icon']}`}
                  src={require('../../assets/images/footer/instagram.svg').default}
                  width={24}
                  height={24}
                  alt="instagram-logo"
                /></Link>
                <Link href="#"><Image
                  className={`${footerStyles['social-icon']}`}
                  src={require('../../assets/images/footer/linkedin.svg').default}
                  width={24}
                  height={24}
                  alt="linkedin-logo"
                /></Link>
              </div>
            </div>
          </Col>
          <Col lg={2} className={`${footerStyles['col-content']}`}>
            <div className={`${footerStyles['list-content']}`}>
              <h5>Resources</h5>
                <Link href="#" className={`${footerStyles['resource-link']}`}><h6>Become a Creator</h6></Link>
                <Link href="#" className={`${footerStyles['resource-link']}`}><h6>About Us</h6></Link>
                <Link href="#" className={`${footerStyles['resource-link']}`}><h6>Contact Us</h6></Link>
            </div>
          </Col>
          <Col lg={3} className={`${footerStyles['col-content']}`}>
            <div className={`${footerStyles['list-content']}`}>
              <h5>Contact us</h5>
                <Link href="#" ><div className={`${footerStyles['list-icon']}`}><Image  src={require('../../assets/images/footer/phone.svg').default} width={18} height={18} alt="instagram-logo" /><h6>+966 546 286 962</h6></div></Link>
                <Link href="#" ><div className={`${footerStyles['list-icon']}`}><Image  src={require('../../assets/images/footer/messege.svg').default} width={18} height={18} alt="instagram-logo" /><h6>ahmed@camelab.co</h6></div></Link>
                <div href="#" className={`${footerStyles['address-style']}`}><div className={`${footerStyles['list-icon']}`}><Image  src={require('../../assets/images/footer/location.svg').default} width={18} height={18} alt="instagram-logo" /><h6>Ahmed Farouk
                  King Fahad Road, Riyadh - 13217</h6></div></div>
            </div>
          </Col>
        </Row>

        <div className={`${footerStyles['footer-apps']}`}>
          <p>Become a creator</p>
          <div className={`${footerStyles['apps-part']}`}>
            <Link href="#"><Image src={require('../../assets/images/footer/app-store.svg').default} width="100%" alt="instagram-logo" /></Link>
            <Link href="#" ><Image className={`${footerStyles['custom-mt']}`} src={require('../../assets/images/footer/google-play.svg').default} width="100%" alt="instagram-logo" /></Link>
          </div>
        </div>
      </Container>
      <hr className={`${footerStyles['horizontal-line']}`} />


      <Container>
        <div className={`${footerStyles['copy-right-part']}`}>
          <div><h6>Copyright 2024 <span><Link href="#">By Camelab</Link></span>. All Rights Reserved.</h6></div>
          <div className={`${footerStyles['right-text']} d-flex`}>
            <Link href="#"><h6 className='pe-5'>Privacy policy</h6></Link>
            <Link href="#"><h6>Terms of service</h6></Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;