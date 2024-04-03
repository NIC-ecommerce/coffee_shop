"use client";
import React, { PointerEventHandler } from "react";
import Card from "@/entities/Card/ui/Card";
import Slider from "react-slick";
import CardSlider from "@/widgets/ui/CardSlider/ui/CardSlider";
import Arrow from "@/shared/ui/Icons/Arrow/Arrow";
import Image from "next/image";
import { useRouter } from "next/router";
import { CardItems, SliderItems } from "./props";

import axios from "axios";

interface ProductData {
  name: string;
  price: number;
  image: string;
}

const ProductDisplay: React.FC<{ product: ProductData }> = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

const PlacePage = () => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    className: "mb-[63px]",
  };

  const [product, setProduct] = React.useState<ProductData | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get<ProductData>(
        "http://127.0.0.1:8000/store/products/"
      );
      setProduct(response.data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch product.");
    }
  };
  return (
    <div className="py-[60px] px-[90px]">
      <div>
        <button onClick={fetchProduct}>Fetch Product</button>
        {error && <p>{error}</p>}
        {product && <ProductDisplay product={product} />}
      </div>

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
          <CardSlider />
        </div>
      </div>
      <div className="mt-[63px]">
        <h2 className="mb-[35px] text-2xl font-semibold">Новинки и акции</h2>
        <div>
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default PlacePage;
