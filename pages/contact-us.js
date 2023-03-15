import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const HomeForm = dynamic(() => import("../Components/Modal/HomeForm"));
const ContactDetails = dynamic(() =>
  import("../Components/Contact/ContactDetails")
);
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);

const Contact = () => {
  return (
    <div className="contact">
      <Head>
        <title>Get in Touch with iKore Pilates Team!!</title>

        <meta
          name="description"
          content="Contact us to learn more about Pilates and how it can benefit you. Our team of experts are available to answer your questions and help you on your journey. Reach out today."
        />
        <meta
          name="keywords"
          content="iKore Pilates Address, iKore Pilates instagram handle, iKore Pilates Contact details, Contact Us, iKore Pilates"
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
        <ContactDetails />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-0 form_col_pd">
              <HomeForm />
            </div>
          </div>
        </div>
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Contact;
