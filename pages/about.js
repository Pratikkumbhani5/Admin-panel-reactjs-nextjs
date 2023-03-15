import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutUsSection = dynamic(() =>
  import("../Components/About/AboutUsSection")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Test2 = () => {
  return (
    <div className="home">
      <Head>
        <title>Learn More About iKorePilates and Our Team</title>

        <meta
          name="description"
          content="iKore Pilates was founded by Dr Deepali Gupta, Pilates Brand Ambassador for India. She has gained Pilates knowledge from leading institutes around the World. Instructors trained by her vouch for her knowledge and teaching skills."
        />
        <meta
          name="keywords"
          content="iKore Pilates, Dr Deepali Gupta, Pilates, iKore Pilates Studio"
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
        <AboutUsSection />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Test2;
