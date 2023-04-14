import React from "react";

const InfoCard = ({ info }) => {
  const { name, description, photo, bgStyle } = info;
  return (
    <div className={`card card-side  shadow-xl ${bgStyle}`}>
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
