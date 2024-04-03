import React from "react";
import Slider from "react-slick";
import axios from "axios";
import Card from "@/entities/Card/ui/Card";

interface CardData {
  image: string;
  title: string;
  price: number;
  description: string;
}

const CardSlider: React.FC = () => {
  const [cards, setCards] = React.useState<CardData[]>([]);

  // React.useEffect(() => {
  //   const fetchCards = async () => {
  //     try {
  //       const response = await axios.get<CardData[]>(
  //         "http://127.0.0.1:8000/store/products/"
  //       );
  //       setCards(response.data);
  //     } catch (error) {
  //       console.error("Ошибка при загрузке данных:", error);
  //     }
  //   };

  //   fetchCards();
  // }, []);

  const settings = {
    slidesToShow: 2.9,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Card
            image={card.image}
            name={card.title}
            price={card.price}
            description={card.description}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
