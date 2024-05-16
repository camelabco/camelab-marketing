"use client"

import React,{useState} from 'react'
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import accordionStyle from '../styles/accordion.module.css'

export default function VerticalAccordion() {
    const [activeKey, setActiveKey] = useState('0');
    const handleAccordionToggle = (eventKey) => {
        setActiveKey(eventKey === activeKey ? null : eventKey); // Toggle the active key
      };
    return (
        <>
            <Accordion activeKey={activeKey} onSelect={handleAccordionToggle} className={`${accordionStyle['vertical-accordion']} vertical-accordion`} defaultActiveKey="0">
                <Accordion.Item eventKey="0" className='collapse-horizontal'>
                    <Accordion.Header className={`${accordionStyle['accordion-header']}`}> <div className='d-flex justify-content-between'><h3>Download Camelab App</h3> <h4>01</h4></div>  </Accordion.Header>
                    <Accordion.Body className={`${accordionStyle['accordion-body']} collapse-horizontal`}>
                        <div className={accordionStyle['accordion-content']}>
                            <Row>
                                <Col lg={6} className="d-flex align-items-center">
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
                                <Col lg={6}>    <div className={accordionStyle['img-part']}>

                                    <Image
                                        src={require('../../assets/images/creator/accordion1-img.svg').default}
                                        width={"100%"}
                                        alt="camelab-logo"
                                    />
                                </div></Col>
                            </Row>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className={`${accordionStyle['accordion-header']}`}> <div className='d-flex justify-content-between'><h3>Select Campaign related</h3> <h4>02</h4></div> </Accordion.Header>
                    <Accordion.Body className={`${accordionStyle['accordion-body']}`}>
                    <div className={accordionStyle['accordion-content']}>
                            <Row>
                                <Col lg={6} className="d-flex align-items-center">
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
                                <Col lg={6}>    <div className={accordionStyle['img-part']}>

                                    <Image
                                       src={require('../../assets/images/creator/accordion2-img.svg').default}
                                        alt="camelab-logo"
                                    />
                                </div></Col>
                            </Row>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className={`${accordionStyle['accordion-header']}`}><div className='d-flex justify-content-between'><h3>Upload your campaign</h3> <h4>03</h4></div> </Accordion.Header>
                    <Accordion.Body className={`${accordionStyle['accordion-body']}`}>
                    <div className={accordionStyle['accordion-content']}>
                            <Row>
                                <Col lg={6} className="d-flex align-items-center">
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
                                <Col lg={6}>    <div className={accordionStyle['img-part']}>

                                    <Image
                                        src={require('../../assets/images/creator/accordion3-img.svg').default}
                                        alt="camelab-logo"
                                    />
                                </div></Col>
                            </Row>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className={`${accordionStyle['accordion-header']}`}> <div className='d-flex justify-content-between'><h3>Get reward for your content</h3> <h4>04</h4></div> </Accordion.Header>
                    <Accordion.Body className={`${accordionStyle['accordion-body']}`}>
                    <div className={accordionStyle['accordion-content']}>
                            <Row>
                                <Col lg={6} className="d-flex align-items-center">
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
                                <Col lg={6}>    <div className={accordionStyle['img-part']}>

                                    <Image
                                       src={require('../../assets/images/creator/accordion4-img.svg').default}
                                        alt="camelab-logo"
                                    />
                                </div></Col>
                            </Row>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}
