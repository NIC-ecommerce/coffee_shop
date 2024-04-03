import React from "react";
import Image from "next/image";

interface AdvCardProps {
  image: string;
  name: string;
  description: string;
}

const AdvCard: React.FC<AdvCardProps> = ({ image, name, description}) => {
  return (
    <div className="flex flex-col w-[392px] h-[350px] py-[50px] px-[25px] border-lightGray border-[1px] rounded-[15px]">
      <div className="mb-[30px]">
        <p className="width-[292px] text-[20px] text-center text-primary font-semibold">{name}</p>
      </div>
      <div className="mx-auto mb-[50px]">
        <Image width={80} height={80} src={image} alt={name} />
      </div>
      <div className="flex flex-col gap-[13px]">
      <div className="mb-[30px]">
        <p className="text-base text-center text-gray font-medium">{description}</p>
      </div>
      </div>
    </div>
  );
};

export default AdvCard;
