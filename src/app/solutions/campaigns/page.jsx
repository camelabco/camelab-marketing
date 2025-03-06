import React from "react";
import Header from "@/app/component/header";
import { Container } from "react-bootstrap";
import CampaignStyles from "@/app/styles/campaigns.module.css";
import Image from "next/image";
import Cards from "@/app/component/cards";
import Brands from "@/app/component/brands";
import NewsletterSection from "@/app/component/newsletterSection";
import Footer from "@/app/component/footer";
import ReviewSlider from "@/app/component/reviewSlider";

export default function page() {
  const commonCards =[
    {
      imageSrc: "/images/campaigns/card_1.svg",
      title: "Pre-built layouts",
      description:
        "Set up, customize, and launch within minutes using ready-to-go templates.",
    },
    {
      imageSrc: "/images/campaigns/card_2.svg",
      title: "No coding required",
      description:
        "Ready to build, no technical skills or developer resources required.",
    },
    {
      imageSrc: "/images/campaigns/card_3.svg",
      title: "Customizable",
      description:
        "Easily customize your page to match specific brand guidelines.",
    },
    {
      imageSrc: "/images/campaigns/card_4.svg",
      title: "Responsive",
      description: "Every page is designed to look great on any device.",
    },
    {
      imageSrc: "/images/campaigns/card_5.svg",
      title: "Pick Winners",
      description:
        "Easily export and download contest and campaign results to review and pick contest winners.",
    },
    {
      imageSrc: "/images/campaigns/card_6.svg",
      title: "Flexible UGC Galleries",
      description:
        "Camelab UGC galleries seamlessly integrate across multiple channels and web pages.",
    },
    {
      imageSrc: "/images/campaigns/card_7.svg",
      title: "Increase Participation",
      description:
        "Users can easily upload and submit content directly on the page.",
    },
    {
      imageSrc: "/images/campaigns/card_8.svg",
      title: "Direct Publishing",
      description:
        "Publish your experiences to the web with the push of a button.",
    },
  ]
  return (
    <div>
      <Header />
      <section className={`${CampaignStyles["experience-section"]} common-spacing`}>
        <Container>
          <div className={`${CampaignStyles["experience-info"]} text-center`}>
            <h3 className="main-heading">
              <span> Experience </span>Builder
            </h3>
            <p className="section-text">
              Create and launch highly engaging UGC experiences, social
              contests, and campaigns in minutes—no coding required. Drive
              engagement, spark conversations, and build your brand effortlessly
            </p>
            <div className={CampaignStyles["experience-info-button"]}>
              <button className="primary-button" variant="primary">
                Request For Demo
              </button>
            </div>
          </div>
          <div className={`${CampaignStyles["experience-img-section"]}`}>
            <Image
              src="/images/campaigns/experience.png"
              alt="experience image"
              width={800}
              height={456}
              layout="responsive"
            />
          </div>
        </Container>
      </section>
      <section className={`${CampaignStyles["build-section"]} common-spacing`}>
        <Container>
          <div className={`${CampaignStyles["build-info"]} text-center`}>
            <h3 className="main-heading">Build Immersive Experiences</h3>
            <p className="section-text">
              Generate awareness and grow your database. Visitors can easily
              enter information for a chance to win while viewing and
              interacting with real content from others.
            </p>
            <div
              className={`${CampaignStyles["build-small-card"]} d-flex justify-content-center align-items-center flex-wrap`}
            >
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_1.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Sweepstakes
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_2.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Launch Countdown
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_3.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Social Contests
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_4.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Social Galleries
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_5.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Polls & Upvotes
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_6.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Landing Pages
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_1.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Influencer Collaboration
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_1.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Tag-o-War
                </div>
              </div>
              <div
                className={`${CampaignStyles["build-small-card-info"]} d-flex justify-content-center align-items-center`}
              >
                <div className={CampaignStyles["build-small-card-img-section"]}>
                  <Image
                    src="/images/campaigns/small_card_1.svg"
                    alt="build small card img"
                    width={24}
                    height={24}
                    className={CampaignStyles["build-small-card-img"]}
                  />
                </div>
                <div className={CampaignStyles["build-small-card-text"]}>
                  Live Counter
                </div>
              </div>
            </div>
            <div className={`${CampaignStyles["build-travel"]}`}>
              <Image
                src="/images/campaigns/build-img.png"
                alt="build image"
                width={384}
                height={400}
                className={CampaignStyles["build-img"]}
              />
              <Image
                src="/images/campaigns/build-img.png"
                alt="build image"
                width={384}
                height={400}
                className={CampaignStyles["build-img"]}
              />
              <Image
                src="/images/campaigns/build-img.png"
                alt="build image"
                width={384}
                height={400}
                className={CampaignStyles["build-img"]}
              />
            </div>
            <div className={CampaignStyles["build-info-button"]}>
              <button className="primary-button" variant="primary">
                Discover More
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className={CampaignStyles["review-section"]}>
        <div className="container common-spacing">
          <div className={`row align-items-center gy-4 ${CampaignStyles["section-row"]}`}>
            <div className="col-lg-6">
              <div className={CampaignStyles["img-content"]}>
                <Image
                  src="/images/content-ai/client-testimonial.png"
                  alt="section image"
                  height={418}
                  width={536}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={CampaignStyles["text-content"]}>
                <p className="section-text">
                  "Camelab’s machine learning refines the search, helping me
                  find the most relevant user-generated content that we can
                  utilize, obtain rights for, and repurpose effectively."
                </p>
                <div className={CampaignStyles["review-slider"]}>
                  <ReviewSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cards
        heading="Everything you need to create powerful UGC campaigns"
        cards={commonCards}
      />

      <section className={CampaignStyles["client-section"]}>
        <div className="container common-spacing">
          <h4 className="main-heading text-center">Clients & Projects</h4>
          <p className="section-text text-center">
            Embark on transformative journeys with Camelab, exploring how our
            innovative solutions empower clients and partners to realize their
            business aspirations
          </p>
          <div className="common-spacing"></div>
          <Brands />
        </div>
      </section>

      <NewsletterSection
        heading="Don’t miss out on the power of user-generated content"
        description="With our advanced platform and a world-class team ready to help you, it’s easy to get started with TINT."
      />
      <Footer />
    </div>
  );
}
