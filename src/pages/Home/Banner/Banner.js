import React from "react";
import banner from "../../../assets/images/chair.png";

import backBanner from "../../../assets/images/bg.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
  const bgBanner = {
    background: `url(${backBanner})`,
    backgroundBlendMode: "darken, luminosity",
  };
  return (
    <div style={bgBanner} className="hero  ">
      <div className="hero-content flex-col   lg:flex-row-reverse">
        <img src={banner} className="w-1/2 rounded-lg shadow-2xl" alt="banner" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
