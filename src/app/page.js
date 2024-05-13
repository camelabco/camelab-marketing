import styles from "./page.module.css";
import Header from '../app/component/header'
import Footer from '../app/component/footer';
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import Brands from "./component/brands";
import Slider from "./component/slider";
import ReviewSlider from "./component/reviewSlider";
import AnimatedImgSection from "./component/animatedImgSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`${styles['main']}`}>
      {/* Header */}
      <Header />
      {/* slider-section */}
      <section className={`${styles['slider-section']}`}>
        <Container>
          <div className={`${styles['banner-text']}`}>
            <h3>
              Empower your network and
              earn with <span> affiliate sales!</span>
            </h3>
          </div>
        </Container>
        <div className={`${styles['slider-container']}`}>
          <Row>
            <Col lg={6}>
              <div className={`${styles['left-content']}`}>
                <p className="secondary-text">
                  Share products/services you love, and get rewarded when others make purchases through your recommendations. Join our word-of-mouth commerce platform and turn your influence into income!"
                </p>
                <div className={`${styles['signup-part']}`}>
                  <button className="primary-button" >Sign up</button>
                  <Link href="#" className="underline mx-4"><h6>Become a creator</h6></Link>
                </div>
              </div>

            </Col>
            <Col lg={6}>
              <div className={`${styles['slider-content']}`}>
                <Slider />
              </div>
            </Col>
          </Row>
        </div>
        <Brands />
      </section>



      {/* our-core-value */}


      <section className={`${styles['our-value']}`}>
        <Container>
          <div className={`${styles['text-part']}`}>
            <h3 className="main-heading">
              Our Core Values
            </h3>
            <p className="secondary-text">We place immense trust in the synergy of People, Technology, and the empowerment of individual creators. These four pillars are the cornerstone of our digital transformation strategy, shaping our mission to drive businesses towards remarkable growth and prosperity.</p>
          </div>
          <div className='core-cards'>
            <Row>
              <Col lg={4} md={6} className='sub-card'>
                <div className='card-content'>
                  <div className='img-part'>
                    <Image src={require('../assets/images/landing/people.svg').default} width={48} height={48} alt="core-cards-img" />
                  </div>
                  <div className='text-part'>
                    <h5>People</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className='sub-card scale-up'>
                <div className='card-content'>
                  <div className='img-part'>
                    <Image src={require('../assets/images/landing/technology.svg').default} width={48} height={48} alt="core-cards-img" />
                  </div>
                  <div className='text-part'>
                    <h5>Technology</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className='sub-card'>
                <div className='card-content'>
                  <div className='img-part'>
                    <Image src={require('../assets/images/landing/individual.svg').default} width={43} height={45} alt="core-cards-img" />
                  </div>
                  <div className='text-part'>
                    <h5>Individual creators</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* creations-section */}
      <section className={`${styles['creations']}`}>
        <Container>
          <div className={`${styles['text-part']}`}>
            <h3 className="main-heading">
              Inspiring Creations
            </h3>
            <p className="secondary-text">Visualize a canvas where People, Process, and Technology converge effortlessly, guided by the hands of empowered creators. It's a space where ideas are born, nurtured, and transformed into reality.</p>
          </div>

          <div className={`${styles['creations-img']}`}>

            <div className={`${styles['img-part']}`}>
              <div className={`${styles['img-set']}`}>
                <div><Image src={require('../assets/images/landing/creation-img1.svg').default} alt="core-cards-img" /></div>
                <div><Image src={require('../assets/images/landing/creation-img2.svg').default} alt="core-cards-img" /></div>
              </div>
              <div className={`${styles['img-set']}`}>
                <div><Image src={require('../assets/images/landing/creation-img3.svg').default} alt="core-cards-img" /></div>
                <div><Image src={require('../assets/images/landing/creation-img4.svg').default} alt="core-cards-img" /></div>
              </div>
            </div>



            <div className={`${styles['img-part']}`}>
              <div className={`${styles['img-set-one']}`}>
                <div><Image src={require('../assets/images/landing/creation-img5.svg').default} alt="core-cards-img" /></div>
                <div><Image src={require('../assets/images/landing/creation-img6.svg').default} alt="core-cards-img" /></div>
              </div>
              <div className={`${styles['img-set-two']}`}>
                <div><Image src={require('../assets/images/landing/creation-img7.svg').default} alt="core-cards-img" /></div>
                <div><Image src={require('../assets/images/landing/creation-img8.svg').default} alt="core-cards-img" /></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className={`${styles['create-videos']}`}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className={`${styles['img-part']}`}>
                <Image src={require('../assets/images/landing/create-video-img.svg').default} width="100%" alt="create-video-img" />
              </div>
            </Col>
            <Col lg={7} className={`${styles['right-text-part']}`}>
              <div className={`${styles['text-part']}`}>
                <h3 className="main-heading">
                  Create your brand's video with Camelab
                </h3>
                <ul>
                  <li>Description about brand</li>
                  <li>Choose your creator</li>
                  <li>Make payment</li>
                </ul>
                <div className={`${styles['btn']}`}>
                <button className="primary-button" variant="primary">Order Now</button>
              </div>
              </div>
             
            </Col>
          </Row>
        </Container>
      </section>

      {/* content-creator */}

      <section className='content-creator'>
        <AnimatedImgSection />
      </section>




      {/* our client section */}



      <section className={`${styles['our-client']}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles['img-part']}`}>
                <Image src={require('../assets/images/landing/our-client-img.svg').default} width="100%" alt="create-video-img" />
              </div>
            </Col>
            <Col lg={6}>
              <div className={`${styles['text-part']}`}>
                <h3 className="main-heading">
                  What our Client
                  say about us
                </h3>
                <p className="secondary-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. </p>

                <div className={`${styles['cliet-review']}`}>
                  <ReviewSlider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </main>

  );
}

