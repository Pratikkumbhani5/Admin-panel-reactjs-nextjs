import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/plugins/fontawesome-free/css/all.min.css";
import "../public/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "../public/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../public/plugins/jqvmap/jqvmap.min.css";
import "../public/dist/css/adminlte.min.css";
import "../public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../public/plugins/daterangepicker/daterangepicker.css";
import "../public/plugins/summernote/summernote-bs4.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        <title>Queueloop Solutions LLP</title>
      </Head>

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
