import React from "react";
import LazyLoad from "react-lazyload";

const WhyChooseUs = () => {
  return (
    <section className="class-schedule-area pb-120 p-relative">
      <div className="section-overlay">
        <div className="container">
          <div className="whychooseus-padding">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title mb-50">
                  <h1 className="custom-h1">Why Us</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <p className="text-justify-whyus text-dark">
                  We are the premier Pilates Studio and Training Institute of
                  Pune, headed by India’s Master Trainer, Dr. Deepali Gupta who
                  is the Pilates Ambassador of India. We offer top-notch
                  services and a unique fitness experience with our
                  state-of-the-art equipment and experienced instructors who are
                  passionate about helping you reach your goals. We understand
                  that when it comes to fitness, everyone has different needs
                  and goals. That is why we strive to provide personalized
                  training plans for each of our clients. Our certified
                  instructors have years of experience in Pilates and can help
                  you reach your goals faster and more efficiently. With our
                  commitment to excellence, we guarantee that you will leave
                  feeling stronger, healthier, and more confident in your body.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="bg-color mt-5 d-flex justify-content-center">
                <LazyLoad once>
                  <img
                    loading="lazy"
                    src="assets/img/banner_logo.webp"
                    className="batches-img img-fluid"
                    alt="batches"
                    height="100%"
                    width="auto"
                  />
                </LazyLoad>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
