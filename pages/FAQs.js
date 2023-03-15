import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
const FaqsSection = dynamic(() => import("../Components/FAQs/FaqsSection"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Faqs = () => {
  return (
    <div>
      <Head>
        <title>Get Answers to Some Common Questions - iKore Pilates</title>

        <meta
          name="description"
          content="Find answers to some of the common questions about iKore Pilates."
        />
        <meta name="keywords" content="Pilates, FAQs, Questions." />
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
        <FaqsSection />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Faqs;
