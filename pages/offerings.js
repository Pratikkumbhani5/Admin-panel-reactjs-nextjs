import React, {  Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const SliderSectionClasses = dynamic(() =>
  import("../Components/Offerings/SliderSectionClasses")
);
const ClassMat = dynamic(() => import("../Components/Offerings/ClassMat"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Offerings = () => {
  return (
    <div className="home">
      <Head>
        <title>
          India’s Best Pilates Classes From Internationally Certified Pilates
          Instructors
        </title>

        <meta
          name="description"
          content="Join iKore Pilates classes to strengthen your core, improve posture and flexibility, and enhance the mind-body connection.Experience the benefits of this low-impact workout with our certified instructors. Sign up now."
        />
        <meta
          name="keywords"
          content="Pilates, Pilates Classes Pune, Pilates Sessions, International Certification in Pilates, One-to-One Private Pilates Classes, Group Pilates Classes, Pilates Group Classes, Pre-natal Pilates, Rehab Pilates"
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
        <SliderSectionClasses />
        <ClassMat />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Offerings;
