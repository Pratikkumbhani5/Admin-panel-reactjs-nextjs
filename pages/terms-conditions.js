import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
const TermsData = dynamic(() => import("../Components/Policy/TermsData"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Terms = () => {
  return (
    <div className="home">
      <Head>
        <title>Terms and Conditions | iKore Pilates</title>
        <meta
          name="description"
          content="Please read our Terms and Conditions before using our website. By accessing/visiting our website, you agree to be bound by these terms and conditions."
        />
        <meta name="keywords" content="iKore Pilates Terms and Conditions" />
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
        <TermsData />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Terms;
