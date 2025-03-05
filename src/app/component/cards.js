import React from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import CardsStyles from "@/app/styles/cards.module.css";

const Cards = ({ heading, cards }) => {
  return (
    <section className= {`${CardsStyles["card-section"]} common-spacing`}>
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
