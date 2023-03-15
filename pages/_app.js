import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/scss/modal-video.scss";
import "rc-tooltip/assets/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "../public/dist/css/adminlte.min.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/animate.min.css";
import "../public/assets/fontawesome/css/all.min.css";
import "../style/App.css";
import "../public/assets/css/default.css";
import "../public/assets/css/style.css";
import "../style/index.css";
import "../public/assets/css/responsive.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "../public/plugins/fontawesome-free/css/all.min.css";
// import "../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
// import "../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
// import "../public/plugins/jqvmap/jqvmap.min.css";
// import "../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
// import "../public/plugins/daterangepicker/daterangepicker.css";
// import "../public/plugins/summernote/summernote-bs4.css";
// import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <meta
          name="iKore - Top Rated Pilates Studio."
          content="Pilates Teacher Training Program is an internationally recognised Pilates certification program offering comprehensive MAT & EQUIPMENT training through academic ..."
        />
        <meta
          name="description"
          content="At iKore Pilates, we conduct Pilates Classes with World-Class equipment. We also offer International Certification in Pilates and run Pilates Teacher Training and Education programs. Join us today!!"
        />
        <meta
          name="keywords"
          content="Pilates, Pilates Classes Pune, Pilates Sessions, International Certification in Pilates, One to One Private Pilates Classes, Group Pilates Classes, Pilates Group Classes,Pilates Instructor Training, Pilates Teacher Training, Pilates Certification Courses, Pilates Education, Top Pilates Classes, Best Pilates Classes, Leading Pilates Classes, India"
        />
        <title>iKore - Top Rated Pilates Studio.</title>
      </Head>
      {/* <Script
        id="google-tag-manager"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, "script", "dataLayer", "GTM-TGXWKQ2");
              `,
        }}
      /> */}

      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </SessionProvider>
    </>
  );
}

export default MyApp;
