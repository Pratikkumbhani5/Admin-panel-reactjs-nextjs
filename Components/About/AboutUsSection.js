import React from "react";
import Facts from "../common/Facts";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import LazyLoad from "react-lazyload";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="about-area about-p mt-185 mb-80 pt-120 pb-60 p-relative slidersection-padding"
    >
      <div className="container">
        <div className="row">
          {/* <Suspense
            fallback={
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  WebkitTransform: "translate(-50%, -50%)",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            }
          > */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            {/* <LazyLoad height={1080} once> */}
            <Image
              // loading="lazy"
              src="/assets/img/aboutus_img.webp"
              className="img-fluid mt-lg-0 mt-5 about-section-img"
              alt="cta"
              height="555"
              width="1080"
            />
            {/* </LazyLoad> */}
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12" rel="preload">
            <div className="about-content s-about-content ">
              <div className="section-title mb-110">
                <div className="about__content mb-3">
                  <h2 className="mb-3">DR. DEEPALI GUPTA</h2>
                  <h3 className="mb-3">
                    MD( Hom), PGDHM(London), PGDCP, ACSM(USA) NCPT(USA)
                  </h3>
                  <h5>
                    <strong>
                      International Pilates Master Instructor-Pilates Ambassador
                      India
                    </strong>
                  </h5>
                  <p className="text-justify">
                    Dr Deepali Gupta is the founder of iKore Pilates
                    Studio(earlier Be Fit Pilates), fully equipped Pilates
                    studio in the whole of India. She is Pilates Ambassador
                    India and Balanced Body Master Instructor-(Authorised
                    Teacher Training Center), International Pilates Coach.
                    Recently Awarded the Title of Internationally recognised
                    Nationally Certified Pilates Teacher (NCPT) by the
                    prestigious NPCP. A Fletcher Intensivist, The Garuda method
                    Practioner and YUR Back Coach. She holds a Master Degree in
                    Homeopathy Medicine. Specialization in Health and Fitness,
                    Diploma in Counselling Psychology. She has traveled across
                    the globe and learned Pilates from the best institutes in
                    the world. She has been coaching several celebrities,
                    athletes, industrialists, and working professionals. She
                    regularly conducts workshops and corporate training programs
                    to create awareness on Pilates and have helped many to lead
                    a painless life with it. She is a true Fitness Motivator and
                    Influencer. Being a doctor and having worked in Fitness
                    Industry for more than 10 years, a Counselling Psychologist,
                    Deepali is at her best to analyse the body and give an
                    exercise prescription. She is involved in Philanthropic
                    activities and is attached to several NGOs through CSR like
                    SOFOSH and Nirmalaya Trust.
                  </p>
                </div>
                <div className="about__content">
                  <h3>Mission</h3>
                  <p>
                    iKore Pilates is on a mission to empower people from all
                    walks of life to unlock the full potential of their bodies
                    and minds. We believe that Pilates is a powerful tool for
                    improving physical strength and flexibility, as well as
                    mental clarity and focus. Our team of transformational
                    coaches is committed to helping our clients feel their best
                    by providing quality instruction in a supportive atmosphere
                    with a state-of-the-art facility.
                  </p>
                  <h3>Vision</h3>
                  <p>
                    “To establish iKore Pilates as a pioneer in the Pilates
                    Fitness industry, reach the common masses as Pilates Brand
                    Ambassadors and promote the ideology of Pilates For All”
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Facts data="pb-120" />

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="section-title mb-40 mt-3">
              <h2 className="mb-3">Our Studio Tour</h2>
              <p className="mb-3">
                iKore Pilates was established in 2017 under the name Be Fit
                Pilates which was the first of its kind Pilates Studio in the
                entire country. We are among the first few pioneers who educated
                the people of India about “PILATES”. Our studio proudly houses
                the finest Pilates equipment and has an enthusiastic team of
                Internationally Certified Pilates Experts. The love we have been
                receiving from our clients has kept us on our toes and has
                motivated us to serve you with the BEST.
              </p>
              <p>
                Schedule your visit to experience one of the
                best fitness forms !
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="iframe-container">
              <LazyLoad height={312} once>
                <LiteYouTubeEmbed
                  muted={true}
                  params="rel=0"
                  id="pYi2dDbXJ3g"
                  title="Pilates studio-Where the magic happens"
                />
              </LazyLoad>

              {/* <iframe
                width="650"
                loading="lazy"
                className="mt-3 border-0"
                height="450"
                src={`https://www.youtube.com/embed/pYi2dDbXJ3g?mute=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />  */}
            </div>
          </div>
          {/* </Suspense> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
