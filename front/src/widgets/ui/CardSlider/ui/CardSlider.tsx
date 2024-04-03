import React, { useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import Card from "@/entities/Card/ui/Card";

interface CardData {
  images: string;
  product_name: string;
  price: number;
  description: string;
}

const CardSlider: React.FC = () => {
  const [cards, setCards] = React.useState<CardData[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get<CardData[]>(
          "http://127.0.0.1:8000/store/products/"
        );
        setCards(response.data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchCards();
  }, []);

  console.log(cards);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    className: "mb-[63px]",
  };

  return (
    <div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              image={card.images}
              name={card.product_name}
              price={card.price}
              description={card.description}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
