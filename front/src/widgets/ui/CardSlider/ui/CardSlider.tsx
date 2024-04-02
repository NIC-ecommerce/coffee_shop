"use client";
import React from "react";
import Slider from "react-slick";

interface CardSliderProps {
  cards: React.ReactNode[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    slidesToShow: 2.9,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>{card}</div>
      ))}
    </Slider>
  );
};

export default CardSlider;
