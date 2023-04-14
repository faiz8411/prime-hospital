import React from "react";

const Reviews = ({ review }) => {
  const { description, name, location, photo } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{description}</p>
        <div className="flex items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="" src={photo} alt="" />
            </div>
          </div>
          <div>
            <h5>{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
