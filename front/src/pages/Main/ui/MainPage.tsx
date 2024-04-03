import React from "react";
import Button from "@/shared/ui/Button/Button";

export default function MainPage() {
  return (


    <div className="px-[90px]">
      <div className="BLOCK-1 mb-[130px]">
        <div className="BLOCK-1__content pt-[70px] flex gap-[110px]">
          <div className="BLOCK-1__title-block w-[620px] h-[327px] py-[70px] ">
            <p className="text-[40px] font-semibold">
            Добро пожаловать в Мир Ароматного Кофе!
            </p>
            <p className="text-lg font-medium pt-[20px]">
            Приветствуем вас в мире настоящего кофейного наслаждения! 
            У нас вы найдете лучшие сорта кофе, которые подарят вам утреннюю энергию и вдохновение на весь день.
            </p>
            <div className="pt-[40px]">
            <Button
                className="w-[353px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
                label="Заказать прямо сейчас"
                labelStyle="text-[20px]"
              />
            </div> 
          </div>
          <div className="w-[530px] h-[470px] BLOCK-1__coffee-pctr">
            <img src= "/main/coffee-cup.png" alt="" />
            </div>    
        </div>    
      </div>


      <div className="BLOCK-2">
        <div className="BLOCK-2__content">
            <div className="BLOCK-2__pctr flex gap-[32px]">
              <div>
                <img className="mb-[26px]" src="/main/man.png" alt="" />
                <img src="/main/coffee-shop.png" alt="" />
              </div>
              <img src="/main/woman.png" alt="" />
            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
    
  );
}
