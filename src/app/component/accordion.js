"use client"
import React, { useEffect } from 'react';
import accordionStyle from "../styles/accordion.module.css"
import '../globals.css';

const HorizontalAccordion = () => {
    useEffect(() => {
        const handleClick = (card) => {
            const choiceArray = document.querySelectorAll(".choice");
            choiceArray.forEach((element) => {
                element.classList.remove("expand", "unset");
                element.classList.add('small');
            });
            card.classList.remove("small");
            card.classList.add('expand');
        };

        const choiceArray = document.querySelectorAll(".choice");
        choiceArray.forEach((card) => {
            card.addEventListener("click", () => handleClick(card));
        });

        return () => {
            // Clean up event listeners when component unmounts
            choiceArray.forEach((card) => {
                card.removeEventListener("click", () => handleClick(card));
            });
        };
    }, []);

    return (
        <>
            <div className="container horizontal-accordion">

                <div className="card choice unset text-dark mx-2">
                    <div className="card-body">
                        <h5 className="card-title">01</h5>
                        <h6 className="card-subtitle">Vertical Heading</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>

                <div className="card choice unset text-dark mx-2">
                    <div className="card-body">
                        <h5 className="card-title">02</h5>
                        <h6 className="card-subtitle">Vertical Heading</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>

                <div className="card choice unset text-dark mx-2">
                    <div className="card-body">
                        <h5 className="card-title">03</h5>
                        <h6 className="card-subtitle">Vertical Heading</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>

                <div className="card choice unset text-dark mx-2">
                    <div className="card-body">
                        <h5 className="card-title">04</h5>
                        <h6 className="card-subtitle">Vertical Heading</h6>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HorizontalAccordion;



// "use client";
// import accordionStyle from "../styles/accordion.module.css"

// // pages/index.js
// import React, { useState } from 'react';

// const HorizontalAccordion = () => {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const toggleAccordion = (index) => {
//         setActiveIndex(activeIndex === index ? 0 : index);
//     };

//     return (
//         <div className={accordionStyle['horizontal-accordion']}>
//             <div
//                 className={`${accordionStyle['accordion-item']} ${activeIndex === 0 ? accordionStyle['active'] : ''}`}
//                 onClick={() => toggleAccordion(0)}
//             >
//             <div className={accordionStyle['accordion-showText']}>
//                 <div className={accordionStyle['accordion-header']}>01</div>
//                 <div className={accordionStyle['accordion-content']}>Download Camelab App</div>
//                 </div>
//             </div>
//             <div
//                 className={`${accordionStyle['accordion-item']} ${activeIndex === 1 ? accordionStyle['active'] : ''}`}
//                 onClick={() => toggleAccordion(1)}
//             >
//               <div className={accordionStyle['accordion-showText']}>
//                 <div className={accordionStyle['accordion-header']}>02</div>
//                 <div className={accordionStyle['accordion-content']}>Select Campaign related</div>
//                 </div>
//             </div>
//             <div
//                 className={`${accordionStyle['accordion-item']} ${activeIndex === 2 ? accordionStyle['active'] : ''}`}
//                 onClick={() => toggleAccordion(2)}
//             >
//             <div className={accordionStyle['accordion-showText']}>
//                 <div className={accordionStyle['accordion-header']}>03</div>
//                 <div className={accordionStyle['accordion-content']}>Upload your campaign</div>
//             </div>
//             </div>
//             <div
//                 className={`${accordionStyle['accordion-item']} ${activeIndex === 3 ? accordionStyle['active'] : ''}`}
//                 onClick={() => toggleAccordion(3)}
//             >
//              <div className={accordionStyle['accordion-showText']}>
//                 <div className={accordionStyle['accordion-header']}>04</div>
//                 <div className={accordionStyle['accordion-content']}>Get reward for your content</div>
//             </div>
//             </div>
//         </div>
//     );
// };

// export default HorizontalAccordion;


