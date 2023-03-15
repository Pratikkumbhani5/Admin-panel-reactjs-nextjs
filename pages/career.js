import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
const CareerBlocks = dynamic(() => import("../Components/Career/CareerBlocks"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Career = () => {
  return (
    <div className="contact">
      <Head>
        <title>Get a Rewarding Career Only at iKore Pilates</title>

        <meta
          name="description"
          content="Join the World of Pilates and build a fulfilling career helping others. Discover the benefits of Pilates training, certification options and job opportunities. Start your journey today!!"
        />
        <meta
          name="keywords"
          content="Pilates Jobs, Pilates Instructor, Pilates Vacancy, Fitness Instructor Vacancy"
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
        <CareerBlocks />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Career;
