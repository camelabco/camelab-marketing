import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import CardsStyles from "@/app/styles/cards.module.css";
const commonCards = [
  {
    imageSrc: "/images/cards/card_9.svg",
    title: "Fast & Easy to Launch",
    description:
      "Launch a fully customizable owned community in 4 weeks, no coding required.",
  },
  {
    imageSrc: "/images/cards/card_10.svg",
    title: "20+ Survey Question Types",
    description:
      "Deliver tailored surveys to collect audience feedback.",
  },
  {
    imageSrc: "/images/cards/card_11.svg",
    title: "Dynamic Profiles & Grouping",
    description:
      "Survey data is linked to each consumer’s profile, enabling audience segmentation by traits.",
  },
  {
    imageSrc: "/images/cards/card_12.svg",
    title: "Survey Personalization",
    description: "Camelab’s survey platform adapts in real time to gather precise insights from the right audience.",
  }
]

const Cards = ({ heading = 'Smart & Personalized Surveys', cards = commonCards }) => {
  return (
    <section className={`${CardsStyles["card-section"]} common-spacing`}>
      <Container>
        <h3 className="main-heading text-center">{heading}</h3>
        <div className={CardsStyles["card-row"]}>
          {cards.map((card, index) => (
            <div key={index} className={CardsStyles["card"]}>
              <div className={CardsStyles['card-img-section']}>
                <Image
                  src={card.imageSrc}
                  alt="card image"
                  width={46}
                  height={46}
                  className={CardsStyles['card-img']}
                />
              </div>
              <h6 className={`${CardsStyles["card-title"]} text-center`}>
                {card.title}
              </h6>
              <p className={`${CardsStyles["card-description"]} text-center`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cards;
