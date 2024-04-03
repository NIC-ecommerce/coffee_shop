import React from "react";
import AdvCard from "@/entities/AdvCard/ui/AdvCard";


export default function AdvCardList() {
  return (
    <>
        <AdvCard
            image="/card/badge 1.png"
            name="Прозрачность"
            description="Мы работаем непосредственно 
            с кофейными фермами, поддерживая справедливую 
            торговлю и устойчивое сельское хозяйство."
        />
        <AdvCard
            image="/card/best-price 1.png"
            name="Стремление к совершенству"
            description="Мы путешествуем по миру, открываем новые кофейные 
            плантации и экспериментируем с разными методами обжарки."
        />
        <AdvCard
            image="/card/cup 1.png"
            name="Вкусный кофе"
            description="Мы понимаем, что каждый человек уникален, как и 
            его вкусовые сосочки, поэтому мы предлагаем широкий выбор сортов кофе."
        />
    </>
  );
}