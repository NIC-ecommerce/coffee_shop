import React from "react";
import Card from "@/entities/Card/ui/Card";

let row_index = [1, 2];
let card_position_index = [1, 2, 3, 4];

export default function CardList() {
  return (
    <>
      {row_index.map(({}, index) => (
        <div key={index} className="flex gap-[7px] mb-[60px]">
          {card_position_index.map(({}, index) => (
            <div key={index}>
              <Card
                image="/card/Latte.png"
                name="Латте горячий"
                price={1600}
                description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной пены."
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
