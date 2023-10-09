import React from "react";
import Image from "next/image";

interface CaraouselCardsProps {
  title: string;
  imageURL: string;
}

const CaraouselCards = ({ title, imageURL }: CaraouselCardsProps) => {
  const cardStyle = {
    backgroundImage: 'url("https://picsum.photos/200/300")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex flex-col px-6">
      <div className="h-40 w-40 bg-blue-500 rounded-lg" style={cardStyle}></div>
      <div className="pt-4">{title}</div>
    </div>
  );
};

export default CaraouselCards;
