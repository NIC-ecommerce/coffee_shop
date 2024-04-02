"use client";
import React from "react";
import Slider from "react-slick";

export default function CardSlider() {
  return (
    <Slider
      slidesToShow={3}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2000}
    ></Slider>
  );
}
