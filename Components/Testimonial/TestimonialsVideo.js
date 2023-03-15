import React from "react";
// import "node_modules/video-react/dist/video-react.css";
// import { Player } from 'video-react';
import TestimonialVideoData from "./Data/TestimonialVideoData";

function TestimonialVideo(props) {
  return (
    <div className="video_box">
      <video loop poster={props.vdo_poster} className="video_tag" controls>
        <source src={props.vdo_src} type={props.vdo_type} />
      </video>
    </div>
  );
}
const Testimonialsvideo = () => {
  return (
    <section
      id="services"
      className="about-area about-p mt-185 mb-10 pb-80 p-relative "
    >
      <div className="container">
        <div className="row justify-content-center mt-25">
          <div className="col-lg-8">
            <div className="section-title center-align mb-60 text-center">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {TestimonialVideoData.map((val) => {
            return (
              <div className="col-lg-6" key={val.id}>
                <TestimonialVideo
                  vdo_src={val.vdo_src}
                  vdo_poster={val.vdo_poster}
                  vdo_type={val.vdo_type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonialsvideo;
