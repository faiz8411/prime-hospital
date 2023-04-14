import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const infos = [
    { id: 1, name: "Opening Hours", description: "Lorem Ipsum is simply dummy text of the pri", photo: clock, bgStyle: "bg-primary" },
    { id: 2, name: "Visit our location", description: "Brooklyn, NY 10036, United States", photo: marker, bgStyle: "bg-accent" },
    { id: 3, name: "Contact us now", description: "+000 123 456789", photo: phone, bgStyle: "bg-primary" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {infos.map((info) => (
        <InfoCard key={info.id} info={info}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
