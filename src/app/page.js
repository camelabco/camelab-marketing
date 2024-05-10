import styles from "./page.module.css";
import Header from '../app/component/header'
import Footer from '../app/component/footer';
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap';
import Brands from "./component/brands";
import Slider from "./component/slider";
import ReviewSlider from "./component/reviewSlider";
import AnimatedImgSection from "./component/animatedImgSection";

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
                  <h6 className="mx-4">Become a creator</h6>
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
          <div className="text-part">
            <h3 className="main-heading">
              Our Core Values
            </h3>
            <p className="secondary-text">We place immense trust in the synergy of People, Technology, and the empowerment of individual creators. These four pillars are the cornerstone of our digital transformation strategy, shaping our mission to drive businesses towards remarkable growth and prosperity.</p>
          </div>
          <div className={`${styles['core-cards']}`}>
            <Row className={`${styles['all-cards']}`}>
              <Col lg={4} md={6} className={`${styles['sub-card']}`}>
                <div className={`${styles['card-content']}`}>
                  <div className={`${styles['img-part']}`}>
                    <Image src={require('../assets/images/landing/people.svg').default} width={48} height={48} alt="core-cards-img" />
                  </div>
                  <div className={`${styles['text-part']}`}>
                    <h5>People</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className={`${styles['sub-card']}`}>
                <div className={`${styles['card-content']}`}>
                  <div className={`${styles['img-part']}`}>
                    <Image src={require('../assets/images/landing/technology.svg').default} width={48} height={48} alt="core-cards-img" />
                  </div>
                  <div className={`${styles['text-part']}`}>
                    <h5>Technology</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} className={`${styles['sub-card']}`}>
                <div className={`${styles['card-content']}`}>
                  <div className={`${styles['img-part']}`}>
                    <Image src={require('../assets/images/landing/individual.svg').default} width={43} height={45} alt="core-cards-img" />
                  </div>
                  <div className={`${styles['text-part']}`}>
                    <h5>Individual creators</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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
          <AnimatedImgSection />
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
            <Col lg={7}>
              <div className={`${styles['text-part']}`}>
                <h3 className="main-heading">
                  Create your brand's video with Camelab
                </h3>
                <ul>
                  <li>Description about brand</li>
                  <li>Choose your creator</li>
                  <li>Make payment</li>
                </ul>
              </div>
              <div className={`${styles['btn']}`}>
                <button className="primary-button" variant="primary">Order Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* content-creator */}

      <section className={`${styles['content-creator']}`}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className={`${styles['text-part']}`}>
                <h3 className="main-heading">
                  Our Content Creators are
                  ready to make Brand Collaboration
                </h3>
                <p className="secondary-text">Social is a user-generated content creation hub that connects brands with a community of over 17,000 Saudi based content creators. Brands can easily collaborate with these creators to produce authentic and engaging.</p>
                <div className={`${styles['btn-part']}`}>
                  <button className="primary-button" variant="primary">Order Now</button>
                </div>
              </div>

            </Col>

            <Col lg={6}>
              <div className={`${styles['img-part']}`}>
                <Image src={require('../assets/images/landing/content-creator-img.svg').default} width="100%" alt="create-video-img" />
              </div>
            </Col>
          </Row>

        </Container>
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
