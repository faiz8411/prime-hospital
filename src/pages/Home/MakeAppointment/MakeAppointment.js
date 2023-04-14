import React from "react";
import appointmentBg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  const bgBack = {
    background: `url(${appointmentBg})`,
  };
  return (
    <section className="mt-32">
      <div style={bgBack} className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="w-1/2 -mt-32 rounded-lg " alt="" />
          <div>
            <h5 className="text-primary">Appointment</h5>
            <h1 className="text-3xl  text-white">Make an appointment Today</h1>
            <p className="py-6 text-white text-xs">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it
              has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
              packages and web page
            </p>
            <PrimaryButton>get started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
