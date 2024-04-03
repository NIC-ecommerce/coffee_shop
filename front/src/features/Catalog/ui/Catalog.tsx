"use client";
import React from "react";
import Button from "@/shared/ui/Button/Button";
import Arrow from "@/shared/ui/Icons/Arrow/Arrow";
import Input from "@/shared/ui/Input/Input";
import styles from "./styles.module.scss";

export default function Catalog() {
  const [buttonConsist, setButtonConsist] = React.useState<boolean>(false);
  const [showAdditionalText, setShowAdditionalText] = React.useState<boolean>(false);
  const [selectedButton, setSelectedButton] = React.useState<string | null>(null);

  const arrowClick = () => {
    setButtonConsist(!buttonConsist);
    setShowAdditionalText(!showAdditionalText);
    setSelectedButton(null);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(selectedButton === buttonName ? null : buttonName);
  };

  return (
    <div className="Catalog w-[386px] text-[20px] font-medium rounded-[15px] border-[1px] border-solid border-lightGray mb-[116px]">
      <div className="title py-[18px] px-[15px] border-b border-solid border-lightGray flex relative">
        <div>
          <p>Каталог</p>
          {showAdditionalText && (
            <p className="mt-[5px] text-base">НАПИТКИ НА ОСНОВЕ ЭСПРЕССО</p>
          )}
        </div>
        <div className="absolute left-[335px]">
          <button
            className={buttonConsist ? styles["arrow-clicked"] : styles.arrow}
            onClick={arrowClick}
          >
            <Arrow />
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
                className={`w-[137px] h-[55px] py-[10px] text-base px-[10px] border-[1px] border-black rounded-[5px] ${
                  selectedButton === "grande" && styles["selected-button"]
                }`}
                label="Гранде (473мл)"
                onClick={() => handleButtonClick("grande")}
              />
              <Button
                className={`w-[137px] h-[55px] py-[10px] text-base px-[10px] border-[1px] border-black rounded-[5px] ${
                  selectedButton === "venti" && styles["selected-button"]
                }`}
                label="Венти (591мл)"
                onClick={() => handleButtonClick("venti")}
              />
            </div>
          </div>
          <div className="title pl-[18px] pt-[15px] pb-[15px] border-b border-solid border-lightGray">
            <p className="mb-[5px]">Цена</p>
            <div className="flex gap-[54px]">
              <Input
                className="w-[96px] h-[30px] py-[5px] px-[10px] text-base border-[1px] border-black rounded-[5px]"
                placeholder="от"
              />
              <Input
                className="w-[116px] h-[30px] py-[5px] px-[10px] text-base border-[1px] border-black rounded-[5px]"
                placeholder="до 5000"
              />
            </div>
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
