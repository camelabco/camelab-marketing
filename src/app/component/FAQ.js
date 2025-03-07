"use client"

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import creatorStyle from "../styles/creator.module.css"
import Container from 'react-bootstrap/Container';

export default function FAQ() {
  return (
    <section className={`${creatorStyle['faq-section']} faq-section`}>
    <Container>
        <div className={`${creatorStyle['heading-part']}`}>
            <h3 className="main-heading">FAQ</h3>
        </div>

        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How to use Camelab for user?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>Where can I see my video submission?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>Where can I can see graph in dashboard?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How make payment?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="4">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How create new campaign?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
                <Accordion.Header className={`${creatorStyle['accordion-header']}`}> <h3>How check bill receipt?</h3> </Accordion.Header>
                <Accordion.Body className={`${creatorStyle['accordion-body']}`}>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>

</section>
  )
}
