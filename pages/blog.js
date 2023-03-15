import axios from "axios";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Head from "next/head";
const BlogsArticles = dynamic(() => import("../Components/Blog/BlogsArticles"));
const Header = dynamic(() => import("../Components/layout/Header"));
const Footer = dynamic(() => import("../Components/layout/Footer"));
const CopyRightFooter = dynamic(() =>
  import("../Components/layout/CopyRightFooter")
);
const Blog = ({ data }) => {
  // console.log(data, "op");
  return (
    <div className="contact">
      <Head>
        <title>Pilates and Fitness - iKore Pilates Blog</title>

        <meta
          name="description"
          content="Read how Pilates can benefit everyone - physically, mentally and emotionally. Explore our latest Pilates tips, exercises, and information and stay informed with the iKorePilates blog."
        />
        <meta
          name="keywords"
          content="Pilates Blog, Fitness Blog, iKorePilates blog"
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
        <BlogsArticles data={data} />
        <Footer />
        <CopyRightFooter />
      </Suspense>
    </div>
  );
};

export default Blog;

Blog.getInitialProps = async () => {
  // console.log(ctx);
  // const { query } = ctx;

  const res = await axios(
    `${process.env.NEXT_PUBLIC_APP_Base_URLa}/enroll/blog`
  );
  // console.log(res, "IN");
  const json = res.data;
  return { data: json };
};
