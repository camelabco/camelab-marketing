
"use client";
import accordionStyle from "../styles/accordion.module.css"

// pages/index.js
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
                <div className={accordionStyle['accordion-content']}>Download Camelab App</div>
                </div>
            </div>
            <div
                className={`${accordionStyle['accordion-item']} ${activeIndex === 1 ? accordionStyle['active'] : ''}`}
                onClick={() => toggleAccordion(1)}
            >
              <div className={accordionStyle['accordion-showText']}>
                <div className={accordionStyle['accordion-header']}>02</div>
                <div className={accordionStyle['accordion-content']}>Select Campaign related</div>
                </div>
            </div>
            <div
                className={`${accordionStyle['accordion-item']} ${activeIndex === 2 ? accordionStyle['active'] : ''}`}
                onClick={() => toggleAccordion(2)}
            >
            <div className={accordionStyle['accordion-showText']}>
                <div className={accordionStyle['accordion-header']}>03</div>
                <div className={accordionStyle['accordion-content']}>Upload your campaign</div>
            </div>
            </div>
            <div
                className={`${accordionStyle['accordion-item']} ${activeIndex === 3 ? accordionStyle['active'] : ''}`}
                onClick={() => toggleAccordion(3)}
            >
             <div className={accordionStyle['accordion-showText']}>
                <div className={accordionStyle['accordion-header']}>04</div>
                <div className={accordionStyle['accordion-content']}>Get reward for your content</div>
            </div>
            </div>
        </div>
    );
};

export default HorizontalAccordion;


