import { Carousel } from "flowbite-react";

const sliderData = [
  {
    id: 1,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/esentay.png",
  },
  {
    id: 2,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/esentay.png",
  },
  {
    id: 3,
    title: "Следующая игра состоится 9 марта 2024",
    imgUrl: "/main/esentay.png",
  },
];

export default function Slider() {
  return (
    <Carousel
      slideInterval={5000}
      leftControl=" "
      rightControl=" "
      className="mmd:hidden"
    >
      {sliderData.map((item) => (
        <div key={item.id}>
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-covebr"
              src={item.imgUrl}
              alt="background"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
