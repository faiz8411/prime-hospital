import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import DentalAd from "../DentalAd/DentalAd";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import TestiMonials from "../TestiMonials/TestiMonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalAd></DentalAd>
      <MakeAppointment></MakeAppointment>
      <TestiMonials></TestiMonials>
    </div>
  );
};

export default Home;
