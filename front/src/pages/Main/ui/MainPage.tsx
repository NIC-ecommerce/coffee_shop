"use client";
import React from "react";
import Card from "@/entities/Card/ui/Card";
import Slider from "react-slick";
import CardSlider from "@/widgets/ui/CardSlider/ui/CardSlider";
import Arrow from "@/shared/ui/Icons/Arrow/Arrow";
import Image from "next/image";
import { useRouter } from "next/router";
import { CardItems, SliderItems } from "./props";

const MainPage = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    className: "mb-[63px]",
  };

  return (
    <div className="py-[60px] px-[90px]">
      <Slider {...sliderSettings}>
        {SliderItems.map((item, index) => (
          <div className="rounded-[20px]" key={index}>
            <Image width={1260} height={400} src={item.imgUrl} alt={item.alt} />
          </div>
        ))}
      </Slider>
      <div className="mb-[63px]">
        <div className="flex justify-between">
          <h2 className="mb-[35px] text-2xl font-semibold">
            Популярные продукты
          </h2>
          <div className="relative transform -rotate-90 cursor-pointer w-[40px] h-[40px] border rounded-full bg-gray-200 flex justify-center items-center">
            <Arrow />
          </div>
        </div>

        <div>
          <CardSlider cards={CardItems} />
        </div>
      </div>
      <div className="mt-[63px]">
        <h2 className="mb-[35px] text-2xl font-semibold">Новинки и акции</h2>
        <div>
          <CardSlider cards={CardItems} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
