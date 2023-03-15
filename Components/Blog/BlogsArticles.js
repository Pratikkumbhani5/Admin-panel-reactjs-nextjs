import React, { Fragment } from "react";
import Link from "next/link";

const BlogsArticles = ({ data }) => {
  return (
    <Fragment>
      <section className="inner-blog pt-100 pb-50 mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-80">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data?.map((val, i) => (
              <div className="col-lg-4 col-md-12 text-justify" key={val.id}>
                <div className="single-post single-post-box mb-30 active">
                  <div className="blog-thumb">
                    <Link href={`/blog/${val.slug}`} state={{ id: i }}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_APP_Base_URLa}/uploads/blog/${val.imgsrc}`}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link href={`/blog/${val.slug}`} state={{ id: i }}>
                        {val.title.substring(0, 100)}
                        {val.title.length < 100 ? "" : "..."}
                      </Link>
                    </h4>
                    <p className="blog-content-p">
                      {val.pre_description.substring(0, 160)}{" "}
                      {val.pre_description.length < 160 ? "" : "..."}
                    </p>
                    <div className="blog-btn">
                      <Link href={`/blog/${val.slug}`} state={{ id: i }}>
                        Read More<i className="fas fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogsArticles;
