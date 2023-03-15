import React, { Fragment } from "react";
import TestimonialData from "./Data/TestimonialData";
import Carousel from "react-multi-carousel";
import LazyLoad from "react-lazyload";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonial = () => {
  return (
    <Fragment>
      <section
        id="testimonios"
        className="testimonial-area testimonial-p pt-80 pb-80 fix p-relative"
        style={{ background: "#fbfaff" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title center-align mb-60 text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>

          <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            className="team-slider owl-theme "
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style "
          >
            {TestimonialData.map((val) => {
              return (
                <div
                  className="testimonial-active single-testimonial"
                  key={val.id}
                >
                  <div className="single-testimonial-bg">
                    <div className="com-icon">
                      <LazyLoad once>
                        <img
                          src="assets/img/testimonial/qutation.webp"
                          alt="img"
                        />
                      </LazyLoad>
                    </div>
                    <div className="testi-author">
                      <div className="ta-info">
                        <h6>{val.testimonial_name}</h6>
                      </div>
                    </div>
                    <p>{val.testimonial_text}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
