import React from "react";

const AvailableOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <section>
      <div className="card  shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-primary text-xl text-center">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p>
            {slots.length}
            {slots.length > 1 ? " spaces" : " space"} available
          </p>
          <div className="card-actions justify-center">
            <label disabled={slots.length === 0} htmlFor="my-modal-3" className="btn btn-primary text-white" onClick={() => setTreatment(option)}>
              Book appointment
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableOptions;
