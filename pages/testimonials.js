import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
const TestimonialsText = dynamic(() =>
  import("../Components/Testimonial/TestimonialsText")
);
const TestimonialsVideo = dynamic(() =>
  import("../Components/Testimonial/TestimonialsVideo")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Testimonials = () => {
  return (
    <div className="testimonilasvdo">
      <Head>
        <title>Client Reviews & Testimonials –iKore Pilates</title>

        <meta
          name="description"
          content="Read the testimonials from our clients and what they have to say about their experience with iKore Pilates."
        />
        <meta
          name="keywords"
          content="iKore Pilates, Client Review, Testimonials"
        />
      </Head>
      <Header />
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              WebkitTransform: "translate(-50%, -50%)",
              transform: "translate(-50%, -50%)",
            }}
            // className="h-100 d-flex justify-content-center align-items-center"
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <TestimonialsVideo />
        <TestimonialsText />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Testimonials;
