import appointmentBg from "../../../assets/images/bg.png";
import appointment from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const backBanner = {
    background: `url(${appointmentBg})`,
  };
  return (
    <section>
      <div style={backBanner} className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={appointment} className="w-1/2 rounded-lg " alt="" />
          <div>
            <DayPicker selected={selectedDate} mode="single" onSelect={setSelectedDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
