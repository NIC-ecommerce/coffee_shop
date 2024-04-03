import React from "react";
import Button from "@/shared/ui/Button/Button";
import AdvCardList from "../../../widgets/ui/AdvCardList/AdvCardList";
import Card from "@/entities/Card/ui/Card";
import styles from "./style.module.scss";
import Link from "next/link";

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
              Приветствуем вас в мире настоящего кофейного наслаждения! У нас вы
              найдете лучшие сорта кофе, которые подарят вам утреннюю энергию и
              вдохновение на весь день.
            </p>
            <Button
              className="w-[353px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
              label="Заказать прямо сейчас"
              labelStyle="text-[20px]"
            />
          </div>
          <div className="w-[530px] h-[470px] BLOCK-1__coffee-pctr">
            <img src="/main/coffee-cup.png" alt="" />
          </div>
        </div>
      </div>

      <div className="BLOCK-2 mb-[130px]">
        <div className="BLOCK-2__content flex gap-[160px]">
          <div className="BLOCK-2__pctr flex gap-[32px]">
            <div>
              <img className="mb-[26px]" src="/main/man.png" alt="" />
              <img src="/main/coffee-shop.png" alt="" />
            </div>
            <img src="/main/woman.png" alt="" />
          </div>
          <div className="BLOCK-2__title w-[585px] h-[317px] pt-[55px] pb-[82px]">
            <p className="text-[40px] font-semibold mb-[20px]">О нас</p>
            <p className="mb-[50px] text-lg font-medium">
              Мы - команда страстных ценителей кофе, которые объединились, чтобы
              поделиться с вами нашим восторгом от этого удивительного напитка.
              В нашем кофейном магазине мы стремимся не просто предложить вам
              кофе, а создать для вас настоящее кофейное путешествие,
              наполненное вкусом, ароматом и вдохновением.
            </p>
            <Link href={`/routs/place`}>
              <Button
                className="w-[260px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
                label="О нашем месте"
                labelStyle="text-[20px]"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="BLOCK-3 mb-[120px]">
        <div className="BLOCK-3__content">
          <div className="BLOCK-3__title mb-[70px] ">
            <p className="text-[40px] font-semibold text-center">
              Почему стоит выбрать нас ?
            </p>
          </div>
          <div className="flex justify-center gap-[50px]">
            <AdvCardList />
          </div>
        </div>
      </div>

      <div className="BLOCK-4 mb-[120px]">
        <div className="BLOCK-4__content">
          <div className="BLOCK-4__title mb-[70px] ">
            <p className="text-[40px] font-semibold text-center">
              Большой выбор кофе
            </p>
          </div>
          <div className="flex justify-center gap-[80px] mb-[50px]">
            <Card
              image="/card/Latte.png"
              name="Латте горячий"
              price={1600}
              description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной пены."
            />
            <Card
              image="/card/Latte.png"
              name="Латте горячий"
              price={1600}
              description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной пены."
            />
            <Card
              image="/card/Latte.png"
              name="Латте горячий"
              price={1600}
              description="Напиток на основе эспрессо и молока 
                с небольшим количеством молочной пены."
            />
          </div>
          <div className="flex justify-center">
            <Button
              className="w-[323px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
              label="Посмотреть больше"
              labelStyle="text-[20px]"
            />
          </div>
        </div>
      </div>
      <div className={` ${styles["BLOCK-5__bg-image"]}`}>
        <div className="BLOCK-5__content">
          <div className="BLOCK-5__title">
            <p>Стань частью нашего комьюнити !</p>
            <p>
              Присоединяйтесь к нам в этом увлекательном путешествии в мир
              настоящего кофе. Заказывай его часто и со скидкой !
            </p>
            <div>
              <Button
                className="w-[323px] h-[64px] px-[50px] py-[10px]  text-base font-medium border-[1px] border-black rounded-[5px]"
                label="Зарегистрироваться"
                labelStyle="text-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
