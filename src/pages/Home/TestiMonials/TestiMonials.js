import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Reviews from "./Reviews";
const TestiMonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people1,
    },
    {
      id: 1,
      name: "Harry Magure",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people2,
    },
    {
      id: 3,
      name: "Winson song",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      photo: people3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h5 className="font-bold text-primary">Testimonial</h5>
          <h2 className="text-2xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} className="lg:w-48 w-24" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <Reviews key={review.id} review={review}></Reviews>
        ))}
      </div>
    </section>
  );
};

export default TestiMonials;
