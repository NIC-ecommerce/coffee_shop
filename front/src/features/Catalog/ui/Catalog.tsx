import React from "react";
import Button from "@/shared/ui/Button/Button";
import Arrow from "@/shared/ui/Icons/Arrow/Arrow";

export default function Catalog() {
  return (
    <div className="Catalog w-[386px] text-[20px] font-medium rounded-[15px] border-[1px] border-solid border-lightGray mb-[116px]">
            <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray flex gap-[235px]">
              <p>
                Каталог
              </p>
              <button>
               <Arrow />
              </button>
            </div>
            <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
              <p>
                Выберите объем напитка
              </p>
            </div>
            <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
              <p>
                Цена 
              </p>
            </div>

            <div className="title pl-[18px] pt-[15px] pb-[15px]">
              <Button
                className="py-[15px] bg-black text-white text-[16px] font-semibold px-[130px] border-[1px] border-black rounded-[5px]"
                label="Показать"
              />
            </div> 
    </div>
  );
}
