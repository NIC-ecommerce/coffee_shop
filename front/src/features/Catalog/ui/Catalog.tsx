"use client"
import React from "react";
import Button from "@/shared/ui/Button/Button";
import Arrow from "@/shared/ui/Icons/Arrow/Arrow";
import styles from "./styles.module.scss";

export default function Catalog() {
  const [buttonConsist, setButtonConsist] = React.useState<boolean>(false);
  const [showAdditionalText, setShowAdditionalText] = React.useState<boolean>(false);

  const arrowClick = () => {
    setButtonConsist(!buttonConsist);
    setShowAdditionalText(!showAdditionalText);
  };

  return (
    <div className="Catalog w-[386px] text-[20px] font-medium rounded-[15px] border-[1px] border-solid border-lightGray mb-[116px]">
      <div className="title py-[18px] px-[15px] border-b border-solid border-lightGray flex relative">
        <div>
        <p>Каталог</p>
        {showAdditionalText && <p className="mt-[5px] text-base">НАПИТКИ НА ОСНОВЕ ЭСПРЕССО</p>}
        </div>
        <div className="absolute left-[335px]">
          <button className= {buttonConsist ? styles["arrow-clicked"] : styles.arrow} onClick={arrowClick}>
            <Arrow/>
          </button>
        </div>
      </div>
      {!buttonConsist && (
        <>
          <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
            <p>Выберите объем напитка</p>
          </div>
          <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
            <p>Цена</p>
          </div>

          <div className="title pl-[18px] pt-[15px] pb-[15px]">
            <Button
              className="py-[15px] bg-black text-white text-[16px] font-semibold px-[130px] border-[1px] border-black rounded-[5px]"
              label="Показать"
            />
          </div>
        </>
      )}
      {buttonConsist && (
        <>
          <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
            <p className="mb-[20px]">Выберите объем напитка</p>
            <div className="flex gap-[7px]">
              <Button
                className="w-[137px] h-[55px] py-[10px] text-base px-[10px] border-[1px] border-black rounded-[5px]"
                label="Гранде (473мл)"
              />
              <Button
                className="w-[137px] h-[55px] py-[10px] text-base px-[10px] border-[1px] border-black rounded-[5px]"
                label="Венти (591мл)"
              />
            </div>
          </div>
          <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
            <p>Цена</p>
          </div>

          <div className="title pl-[18px] pt-[15px] pb-[15px]">
            <Button
              className="py-[15px] bg-black text-white text-[16px] font-semibold px-[130px] border-[1px] border-black rounded-[5px]"
              label="Показать"
            />
          </div>
        </>
      )}
    </div>
  );
}