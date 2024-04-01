import React from "react";
import Card from "@/entities/Card/ui/Card";
import Button from "@/shared/ui/Button/Button";

const data = [
  {text: "Каталог"},
  {text: "Выберите объем напитка"},
  {text: "Цена"},
  ]
let a = [1,2,3,4]
export default function BasketPage() {
  return (
    <div>
      <div className="Shop__content pt-[60px] px-[90px]">
        <div className="Catalog w-[386px] text-[20px] font-medium rounded-[15px] border-[1px] border-solid border-lightGray mb-[116px]">
          {
            data.map(({ text } , index) =>(
              <div key={index} className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray flex gap-[235px]">
                <p className="whitespace-nowrap">
                  {text}
                </p>
                <button>
                  {text === 'Каталог' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                <path d="M-4.76837e-07 1.27611L1.1775 0L9.4175 8.93006C9.57389 9.09949 9.78596 9.19467 10.0071 
                9.19467C10.2282 9.19467 10.4403 9.09949 10.5967 8.93006L18.8208 0.0153641L20 1.29328L11.7758 
                10.2062C11.3067 10.7145 10.6705 11 10.0071 11C9.34371 11 8.70749 10.7145 8.23834 10.2062L-4.76837e-07 
                1.27611Z" fill="black"/>
                </svg> : ""}
                  </button>
              </div>
            ))
          }
          <div className="title pl-[18px] pt-[15px] pb-[15px]">
            <Button
              className="py-[15px] bg-black text-white text-[16px] font-semibold px-[130px] border-[1px] border-black rounded-[5px]"
              label="Показать"
            />
          </div> 
        </div>

        <div className="flex gap-[7px] mb-[60px]">
          {
            a.map(({},index) => (
              <div key = {index}>
                <Card
                image="/card/Latte.png"
                name="Латте горячий "
                price={1600}
                description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной 
                пены." 
                />
              </div>
            ))
          }
        </div>
        <div className="flex gap-[7px] mb-[97px]">
          {
            a.map(({},index) => (
              <div key = {index}>
                <Card
                image="/card/Latte.png"
                name="Латте горячий "
                price={1600}
                description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной 
                пены." 
                />
              </div>
            ))
          }
        </div>         
      </div>
    </div>
  );
}
