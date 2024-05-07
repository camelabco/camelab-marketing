"use client";

import brandsStyles from "../styles/brands.module.css"
import Image from "next/image";
import { Row,Col ,Container } from "react-bootstrap";

function Brands() {
    return (
        <>
            <section className={`${brandsStyles['brands-section']}`}>
                <Container>
                <div className={`${brandsStyles['brands-content']}`}>
                    <Row  className={`${brandsStyles['all-brands']}`}>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image1.svg').default} alt="brands-img" /></Col>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image2.svg').default} alt="brands-img" /></Col>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image3.svg').default} alt="brands-img" /></Col>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image4.svg').default} alt="brands-img" /></Col>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image5.svg').default} alt="brands-img" /></Col>
                        <Col className={`${brandsStyles['brands-img']}`} sm={6} md={4}><Image src={require('../../assets/images/brands/image6.svg').default} alt="brands-img" /></Col>
                    </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Brands;