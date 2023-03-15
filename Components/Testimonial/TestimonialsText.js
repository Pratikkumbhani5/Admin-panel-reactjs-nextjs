import React from "react";
import LazyLoad from "react-lazyload";
import TestimonialPageData from "./Data/TestimonialPageData";

const TestimonialsText = () => {
  return (
    <section
      id="services"
      className="about-area about-p mb-10 pb-80 p-relative"
    >
      <div className="container">
        {/* <div className="row justify-content-center mt-25">
          <div className="col-lg-8">
            <div className="section-title center-align mb-60 text-center">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div> */}
        <div className="row">
          {TestimonialPageData.map((val) => (
            <div className="col-md-4 mb-3 " key={val.id}>
              <div className="testimonial-active single-testimonial">
                <div className="single-testimonial-bg">
                  <div className="com-icon">
                    <LazyLoad height={41} once>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsText;
