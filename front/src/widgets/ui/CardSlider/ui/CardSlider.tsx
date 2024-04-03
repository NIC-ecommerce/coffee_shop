"use client";
import React from "react";
import Slider from "react-slick";
import Card from "@/entities/Card/ui/Card";

interface CardSliderProps {
  cards: {
    image: string;
    title: string;
    price: number;
    description: string;
  }[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    slidesToShow: 2.9,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Card
            image={card.image}
            name={card.title}
            price={card.price}
            description={card.description}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
