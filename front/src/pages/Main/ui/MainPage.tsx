import React from "react";
import { Carousel } from "flowbite-react";
import Card from "@/entities/Card/ui/Card";

export default function MainPage() {
  return (
    <div className="pt-[60px] px-[90px]">
      <div className="mb-[63px]">
        <h1 className="mb-[35px] text-xl font-semibold">БЦ Есентай</h1>
        <div className="w-full">
          <img
            className="w-full"
            src="/main/esentay.png"
            alt="esentay address"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-[35px] text-xl font-semibold">Популярные продукты</h2>
        <div>
          <Card
            image="/card/Latte.png"
            name="Латте горячий "
            price={1600}
            description="Напиток на основе эспрессо и молока 
            с небольшим количеством молочной 
            пены."
          />
        </div>
      </div>
    </div>
  );
}
