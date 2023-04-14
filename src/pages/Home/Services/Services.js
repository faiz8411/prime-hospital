import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Teeth from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    { id: 1, name: "Fluoride Treatment", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: Fluoride },
    { id: 2, name: "Cavity Filling", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: Cavity },
    { id: 3, name: "Teeth Whitening", description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the", img: Teeth },
  ];
  return (
    <section className="mt-16">
      <div className="text-center">
        <h5 className="text-primary font-bold">OUR SERVICES</h5>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
