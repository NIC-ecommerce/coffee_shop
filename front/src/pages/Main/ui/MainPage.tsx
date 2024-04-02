"use client";
import React from "react";
import Card from "@/entities/Card/ui/Card";
import Slider from "react-slick";
import CardSlider from "@/widgets/ui/CardSlider/ui/CardSlider";

{
  /* <Card
  image="/card/Latte.png"
  name="Латте горячий "
  price={1600}
  description="Напиток на основе эспрессо и молока 
            с небольшим количеством молочной 
            пены."
/>; */
}

export default function MainPage() {
  const cards = [
    <Card
      image="/card/Latte.png"
      name="Латте горячий "
      price={1600}
      description="Напиток на основе эспрессо и молока 
  с небольшим количеством молочной 
  пены."
    />,
    <Card
      image="/card/Latte.png"
      name="Латте горячий "
      price={1600}
      description="Напиток на основе эспрессо и молока 
    с небольшим количеством молочной 
    пены."
    />,
    <Card
      image="/card/Latte.png"
      name="Латте горячий "
      price={1600}
      description="Напиток на основе эспрессо и молока 
    с небольшим количеством молочной 
    пены."
    />,
  ];

  return (
    <div className="py-[60px] px-[90px]">
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        dots={true}
        className="mb-[63px]"
      >
        <div>
          <img src="/main/esentay.png" alt="Image 1" />
        </div>
        <div>
          <img src="/main/esentay.png" alt="Image 2" />
        </div>
        <div>
          <img src="/main/esentay.png" alt="Image 3" />
        </div>
      </Slider>
      <div className="mb-[63px]">
        <h2 className="mb-[35px] text-2xl font-semibold">
          Популярные продукты
        </h2>
        <div>
          <CardSlider cards={cards} />
        </div>
      </div>
      <div className="mt-[63px]">
        <h2 className="mb-[35px] text-2xl font-semibold">Новинки и акции</h2>
        <div>
          <CardSlider cards={cards} />
        </div>
      </div>
    </div>
  );
}
