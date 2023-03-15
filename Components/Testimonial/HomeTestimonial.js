import React from "react";
import Carousel from "react-multi-carousel";

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

// use props
function TestimonialBox(props) {
  return (
    <div className="testimonial_box">
      <p className="testimonial_box_p">
        {props.testimonial_text.substring(0, 300)}
      </p>
      <br />
      <h6>{props.testimonial_name}</h6>
    </div>
  );
}

// end
const Testimonial = ({ data }) => {
  return (
    <section className="testimonial pd8 pd2" id="testimonials">
      <div className="container">
        {/* <div className="row"> */}
        <h2 className="headings text-center pd4">Testimonials</h2>
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          className="team-slider owl-theme h-100"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style "
          // customButtonGroup={<ButtonGroup />}
        >
          {data.map((val) => {
            return (
              <div className="col-md-10" key={val.id}>
                <TestimonialBox
                  testimonial_text={val.testimonial_text}
                  testimonial_name={val.testimonial_name}
                />
              </div>
            );
          })}
        </Carousel>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
