import React from "react";
import Header from "@/app/component/header";
import EnterpriseStyles from "@/app/styles/enterprise.module.css";
import Brands from "@/app/component/brands";
import Image from "next/image";
import NewsletterSection from "@/app/component/newsletterSection";
import { Row, Col } from "react-bootstrap";
import Footer from "@/app/component/footer";

const EnterprisePage = () => {
  return (
    <div>
      <Header />
      <section
        className={`${EnterpriseStyles["scale-section"]} common-spacing`}
      >
        <div className="container">
          <h2 className="main-heading text-center">
            Scale your ads with our <span> UGC videos </span>
          </h2>
          <p
            className={`${EnterpriseStyles["enterprise-para-text"]} section-text text-center`}
          >
            Get UGC videos engineered to convert from our network of 10k+ home
            studio creators and beyond. Lower your CPA and drive revenue.
          </p>
          <div className="d-flex justify-content-center">
            <button
              className={`${EnterpriseStyles["scale-section-btn"]} primary-button `}
            >
              Learn More
            </button>
          </div>
          <Brands />
        </div>
      </section>
      <section
        className={`${EnterpriseStyles["enterprise-section"]} common-spacing`}
      >
        <div className="container">
          <div>
            <h2 className="main-heading text-center">Enterprise</h2>
            <p className="section-text text-center">How does it work?</p>
          </div>
          <div
            className={`${EnterpriseStyles["enterprise-card"]} d-flex flex-wrap justify-content-center align-items-center`}
          >
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_1.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Schedule a free discovery call
              </h6>
              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                An intro call to discuss your custom needs and goals and see how
                Clip can help. Based on this, we'll create an offer for a test.
              </p>
              <div>
                <button
                  className={`${EnterpriseStyles["enterprise-btn"]} primary-button `}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_2.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Set up a test
              </h6>
              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                We'll set up a platform test starting at a minimum of $3,000,
                including sourcing creators, contracts, and campaign assistance.
              </p>
              <button
                className={`${EnterpriseStyles["enterprise-btn"]} primary-button `}
              >
                Learn More
              </button>
            </div>
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_3.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Sign contract and start working
              </h6>

              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                If we're happy with the test, we'll discuss a custom offering.
                Our enterprise pricing starts at a $10,000 commitment yearly.
              </p>
              <button
                className={`${EnterpriseStyles["enterprise-btn"]} primary-button `}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${EnterpriseStyles["creative-section"]}`}
      >
        <div className="container">
          <Row
            className={`${EnterpriseStyles["creative"]} justify-content-center align-items-center`}
          >
            <Col md={5}>
              <div className={`${EnterpriseStyles["creative"]} d-flex justify-content-center align-items-center`} >
                <Image
                  src="/images/enterprise/creative.svg"
                  alt="creative image"
                  width={536}
                  height={500}
                  className={EnterpriseStyles["creative-img"]}
                />
              </div>
            </Col>
            <Col md={7}>
              <div className={`${EnterpriseStyles["creative-info"]} `}>
                <h6 className={EnterpriseStyles["creative-heading"]}>
                  Creatives that scale
                </h6>
                <div>
                  <ul className={EnterpriseStyles["custom-list"]}>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      UGC videos proved to lower CPAs and drive revenue.{" "}
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Build a reliable pipeline of UGC videos to a/b test
                      constantly.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Delivered in just one week.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Repurpose content that doesn't perform.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={`${EnterpriseStyles["creative"]} justify-content-center align-items-center`}
          >
            <Col md={5}>
            <div className={`${EnterpriseStyles["creative"]} d-flex justify-content-center align-items-center`} >
                <Image
                  src="/images/enterprise/creative.svg"
                  alt="creative image"
                  width={536}
                  height={500}
                  className={EnterpriseStyles["creative-img"]}
                />
              </div>
            </Col>
            <Col md={7}>
              <div className={`${EnterpriseStyles["creative-info"]} `}>
                <h6 className={EnterpriseStyles["creative-heading"]}>
                  Custom video packages
                </h6>
                <div>
                  <ul className={EnterpriseStyles["custom-list"]}>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Flexible video count based on needs.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Custom video variations (hooks, bodies, CTAs).
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Tailored video length, from 15 to 60 seconds.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Multiple revisions included.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={`${EnterpriseStyles["creative"]} justify-content-center align-items-center`}
          >
            <Col md={5}>
             <div className={`${EnterpriseStyles["creative"]} d-flex justify-content-center align-items-center`} >
                <Image
                  src="/images/enterprise/creative.svg"
                  alt="creative image"
                  width={536}
                  height={500}
                  className={EnterpriseStyles["creative-img"]}
                />
              </div>
            </Col>
            <Col md={7}>
              <div className={`${EnterpriseStyles["creative-info"]} `}>
                <h6 className={EnterpriseStyles["creative-heading"]}>
                  Find the right creators
                </h6>
                <div>
                  <ul className={EnterpriseStyles["custom-list"]}>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Account manager who sources creators from our 10k+
                      database for your campaigns.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Source creators beyond our database using our in-house
                      software.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                      Assistance in creating campaigns, briefs and
                      communications.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            className={`${EnterpriseStyles["creative"]} justify-content-center align-items-center`}
          >
            <Col md={5}>
            <div className={`${EnterpriseStyles["creative"]} d-flex justify-content-center align-items-center`} >
                <Image
                  src="/images/enterprise/creative.svg"
                  alt="creative image"
                  width={536}
                  height={500}
                  className={EnterpriseStyles["creative-img"]}
                />
              </div>
            </Col>
            <Col md={7}>
              <div className={`${EnterpriseStyles["creative-info"]} `}>
                <h6 className={EnterpriseStyles["creative-heading"]}>
                Contracts & Licensing
                </h6>
                <div>
                  <ul className={EnterpriseStyles["custom-list"]}>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                    Fully licensed videos in perpetuity.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                    Custom contracts and licenses available.
                    </li>
                    <li className={EnterpriseStyles["custom-list-text"]}>
                    Flexible terms and conditions.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section
        className={`${EnterpriseStyles["enterprise-section"]} common-spacing`}
      >
        <div className="container">
          <div>
            <h2 className="main-heading text-center">Why Enterprise?</h2>
            <p className="section-text text-center">
              We connect your organization with top-tier creators inside and
              outside our network. Our tailored approach ensures your campaigns
              are always fueled with results-driven content.
            </p>
          </div>
          <div
            className={`${EnterpriseStyles["enterprise-card"]} d-flex flex-wrap justify-content-center align-items-center`}
          >
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_4.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Tailored approach
              </h6>
              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                We have a network of 10k creators ready to work at anytime but
                we can also source & invite creators to work with you outside
                our network using in-house software.
              </p>
            </div>
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_5.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Custom contracts & features
              </h6>
              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                We also have an in-house tech team that can build custom
                features to simplify your workflows. <br />
                Our team can create custom contracts and terms to meet your
                legal needs.
              </p>
            </div>
            <div
              className={`${EnterpriseStyles["enterprise-info"]} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={EnterpriseStyles["enterprise-img-section"]}>
                <Image
                  src="/images/enterprise/enterprise_6.svg"
                  alt="card image"
                  width={46}
                  height={46}
                  className={EnterpriseStyles["enterprise-img"]}
                />
              </div>
              <h6
                className={`${EnterpriseStyles["enterprise-title"]} text-center`}
              >
                Ongoing support & communication
              </h6>

              <p
                className={`${EnterpriseStyles["enterprise-text"]} text-center`}
              >
                A dedicated account manager who will assist not only with
                sourcing creators but also with campaign creation, communication
                with creators, content follow-up, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection
        heading="Ready to scale your ads?"
        description="Simplify influencer partnerships, expand your reach, unlock growth opportunities, and create meaningful connections with your audience."
        buttonText="Learn More"
        isButton= {true}
      />
      <Footer/>
    </div>
  );
};

export default EnterprisePage;
