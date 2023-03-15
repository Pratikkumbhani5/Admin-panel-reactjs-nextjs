import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Link from "next/link";
import WhyChooseUsData from "./Data/WhyChooseUsData";

const WhyPilates = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="services-area services-bg pt-80 pb-80 p-relative"
      style={{ background: "#fbfaff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title mb-50">
              <h1 className="custom-h1">Why Pilates</h1>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <LazyLoad once>
              <img
                loading="lazy"
                src="assets/img/why_pilates_logo_2.webp"
                className="batches-img whypilates-img"
                alt="batches"
                height="100%"
                width="auto"
              />
            </LazyLoad>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="row">
              {WhyChooseUsData.map((val) => {
                return (
                  <div className="col-lg-6 col-md-6 " key={val.id}>
                    <div
                      className={`s-single-services text-center height-service ${
                        active == val.id ? "active" : ""
                      }`}
                      onMouseEnter={() => {
                        setActive(val.id);
                      }}
                      onMouseLeave={() => {
                        setActive(null);
                      }}
                    >
                      <div className="services-icon">
                        <img src={val.imgsrc} alt="img" />
                      </div>
                      <div className="second-services-content">
                        <h5>
                          <Link href="/">{val.title}</Link>
                        </h5>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPilates;
