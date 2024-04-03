import React from "react";
import Button from "@/shared/ui/Button/Button";

export default function MainPage() {
  return (


    <div className="px-[90px]">
      <div className="BLOCK-1 mb-[130px]">
        <div className="BLOCK-1__content pt-[70px] flex gap-[110px]">
          <div className="BLOCK-1__title-block w-[620px] h-[327px] py-[70px] ">
            <p className="text-[40px] font-semibold mb-[20px]">
            Добро пожаловать в Мир Ароматного Кофе!
            </p>
            <p className="text-lg font-medium  mb-[40px]">
            Приветствуем вас в мире настоящего кофейного наслаждения! 
            У нас вы найдете лучшие сорта кофе, которые подарят вам утреннюю энергию и вдохновение на весь день.
            </p>
            <Button
                className="w-[353px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
                label="Заказать прямо сейчас"
                labelStyle="text-[20px]"
              />          
          </div>
          <div className="w-[530px] h-[470px] BLOCK-1__coffee-pctr">
            <img src= "/main/coffee-cup.png" alt="" />
            </div>    
        </div>    
      </div>


      <div className="BLOCK-2">
        <div className="BLOCK-2__content flex gap-[160px]">
            <div className="BLOCK-2__pctr flex gap-[32px]">
              <div>
                <img className="mb-[26px]" src="/main/man.png" alt="" />
                <img src="/main/coffee-shop.png" alt="" />
              </div>
              <img src="/main/woman.png" alt="" />
            </div>
            <div className="BLOCK-2__title w-[585px] h-[317px] pt-[55px] pb-[82px]">
                <p className="text-[40px] font-semibold mb-[20px]">
                  О нас
                </p>
                <p className="mb-[50px] text-lg font-medium">
                Мы - команда страстных ценителей кофе, которые объединились, чтобы поделиться 
                с вами нашим восторгом от этого удивительного напитка. В нашем кофейном магазине 
                мы стремимся не просто предложить вам кофе, 
                а создать для вас настоящее кофейное путешествие, наполненное вкусом, ароматом и вдохновением.
                </p>
                <Button
                className="w-[260px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
                label="О нашем месте"
                labelStyle="text-[20px]"
              />

            </div>
        </div>
      </div>
    </div>
    
  );
}
