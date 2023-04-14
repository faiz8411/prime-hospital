import { format } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import AvailableOptions from "./AvailableOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [options, setOptions] = useState([]);

  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("availableOptions.json")
      .then((res) => res.json())
      .then((data) => setOptions(data));
  }, []);
  return (
    <section>
      <div>
        <h1 className="text-primary text-2xl text-center">Available Services on {format(selectedDate, "PP")}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map((option) => (
          <AvailableOptions key={option.name} option={option} setTreatment={setTreatment}></AvailableOptions>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
    </section>
  );
};

export default AvailableAppointments;
