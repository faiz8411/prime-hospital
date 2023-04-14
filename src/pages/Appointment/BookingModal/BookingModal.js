import { format } from "date-fns";
import React from "react";

const BookingModal = ({ setTreatment, treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      patient: name,
      treatment: name,
      email,
      phone,
      slot,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
            <input disabled value={date} type="text" placeholder="Type here" className="input input-bordered w-full " />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input name="name" type="text" placeholder="Your name" className="input input-bordered w-full " />
            <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full " />
            <input name="phone" type="text" placeholder="phone number" className="input input-bordered w-full " />
            <input type="submit" value="submit" className="bg-accent text-white input input-bordered w-full " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
