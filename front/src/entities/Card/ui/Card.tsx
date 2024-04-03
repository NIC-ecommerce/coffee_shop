import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, name, description, price }) => {
  return (
    <div className="flex flex-col w-[310px] h-[400] py-[30px] px-[20px] border-lightGray border-[1px] rounded-[15px]">
      <Link href={`/routs/basket`}>
        <div className="mx-auto mb-[20px]">
          <img src={image} alt={name} />
        </div>
      </Link>

      <div className="flex flex-col gap-[10px] w-[270px] mb-[20px]">
        <p className="text-lg2 text-primary text-lg font-semibold">{name}</p>
        <p className="text-sm font-700 text-gray">{description}</p>
      </div>
      <div className="flex flex-col gap-[13px]">
        <p className="text-[20px] font-semibold text-green">{price} KZT</p>
        <div className="flex items-center gap-[5px]">
          <span className="text-primary text-base">97%</span>
          <span className="text-gray text-base">(500+)</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
