import React from "react";

const Facts = ({ data }) => {
  return (
    <div className={`container class-schedule-area ${data} p-relative `}>
      <div className="row">
        <div className="col-md-3 text-center">
          <div className="fact_listing">
            <h3>2000+</h3>
            <h4>Influenced Fitness Preference of clients</h4>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="fact_listing">
            <h3>500+</h3>
            <h4>Back Pain/Neck Pain "Cured"</h4>
          </div>
        </div>
        <div className="col-md-3 text-center ">
          <div className="fact_listing">
            <h3>300+</h3>
            <h4>Trained Pilates Teachers</h4>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="fact_listing">
            <h3>20+</h3>
            <h4>Avoided Surgery</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
