"use client"

import accordionStyle from "../styles/accordion.module.css"
import Image from "next/image";
import { Row, Col } from "react-bootstrap";


import React, { useState } from 'react';

const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };

  return (
    <div className={accordionStyle['horizontal-accordion']}>
      <div
        className={`${accordionStyle['accordion-item']} ${activeIndex === 0 ? accordionStyle['active'] : ''}`}
        onClick={() => toggleAccordion(0)}
      >
        <div className={accordionStyle['accordion-showText']}>
          <div className={accordionStyle['accordion-header']}>01</div>
          <div className={accordionStyle['accordion-subtitle']}>Download Camelab App</div>
        </div>
        <div className={accordionStyle['accordion-content']}>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={accordionStyle['text-part']}>
                <h3>
                  Download
                  Camelab App
                </h3>
                <p>Unlock the full potential of your imagination with Camelab – the ultimate platform for digital content creation.</p>
                <div className={accordionStyle['img-btn']}>
                  <Image
                    src={require('../../assets/images/creator/acco-app-store.svg').default}
                    alt="camelab-logo"
                  />
                  <Image
                    src={require('../../assets/images/creator/acco-google-play.svg').default}
                    alt="camelab-logo"
                  />
                </div>
              </div></Col>
            <Col md={6}>    <div className={accordionStyle['img-part']}>

              <Image
                src={require('../../assets/images/creator/phone-img.svg').default}
                alt="camelab-logo"
              />
            </div></Col>
          </Row>
        </div>
      </div>
      <div
        className={`${accordionStyle['accordion-item']} ${activeIndex === 1 ? accordionStyle['active'] : ''}`}
        onClick={() => toggleAccordion(1)}
      >
        <div className={accordionStyle['accordion-showText']}>
          <div className={accordionStyle['accordion-header']}>02</div>
          <div className={accordionStyle['accordion-subtitle']}>Select Campaign related</div>
        </div>

        <div className={accordionStyle['accordion-content']}>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={accordionStyle['text-part']}>
                <h3>
                  Download
                  Camelab App
                </h3>
                <p>Unlock the full potential of your imagination with Camelab – the ultimate platform for digital content creation.</p>
                <div className={accordionStyle['img-btn']}>
                  <Image
                    src={require('../../assets/images/creator/acco-app-store.svg').default}
                    alt="camelab-logo"
                  />
                  <Image
                    src={require('../../assets/images/creator/acco-google-play.svg').default}
                    alt="camelab-logo"
                  />
                </div>
              </div></Col>
            <Col md={6}>    <div className={accordionStyle['img-part']}>

              <Image
                src={require('../../assets/images/creator/phone-img.svg').default}
                alt="camelab-logo"
              />
            </div></Col>
          </Row>
        </div>





      </div>
      <div
        className={`${accordionStyle['accordion-item']} ${activeIndex === 2 ? accordionStyle['active'] : ''}`}
        onClick={() => toggleAccordion(2)}
      >
        <div className={accordionStyle['accordion-showText']}>
          <div className={accordionStyle['accordion-header']}>03</div>
          <div className={accordionStyle['accordion-subtitle']}>Upload your campaign</div>
        </div>



        <div className={accordionStyle['accordion-content']}>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={accordionStyle['text-part']}>
                <h3>
                  Download
                  Camelab App
                </h3>
                <p>Unlock the full potential of your imagination with Camelab – the ultimate platform for digital content creation.</p>
                <div className={accordionStyle['img-btn']}>
                  <Image
                    src={require('../../assets/images/creator/acco-app-store.svg').default}
                    alt="camelab-logo"
                  />
                  <Image
                    src={require('../../assets/images/creator/acco-google-play.svg').default}
                    alt="camelab-logo"
                  />
                </div>
              </div></Col>
            <Col md={6}>    <div className={accordionStyle['img-part']}>

              <Image
                src={require('../../assets/images/creator/phone-img.svg').default}
                alt="camelab-logo"
              />
            </div></Col>
          </Row>
        </div>
      </div>
      <div
        className={`${accordionStyle['accordion-item']} ${activeIndex === 3 ? accordionStyle['active'] : ''}`}
        onClick={() => toggleAccordion(3)}
      >
        <div className={accordionStyle['accordion-showText']}>
          <div className={accordionStyle['accordion-header']}>04</div>
          <div className={accordionStyle['accordion-subtitle']}>Get reward for your content</div>
        </div>


        <div className={accordionStyle['accordion-content']}>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={accordionStyle['text-part']}>
                <h3>
                  Download
                  Camelab App
                </h3>
                <p>Unlock the full potential of your imagination with Camelab – the ultimate platform for digital content creation.</p>
                <div className={accordionStyle['img-btn']}>
                  <Image
                    src={require('../../assets/images/creator/acco-app-store.svg').default}
                    alt="camelab-logo"
                  />
                  <Image
                    src={require('../../assets/images/creator/acco-google-play.svg').default}
                    alt="camelab-logo"
                  />
                </div>
              </div></Col>
            <Col md={6}>    <div className={accordionStyle['img-part']}>

              <Image
                src={require('../../assets/images/creator/phone-img.svg').default}
                alt="camelab-logo"
              />
            </div></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HorizontalAccordion;








