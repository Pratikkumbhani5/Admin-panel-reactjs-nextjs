import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
        </Head>
        <body className="hold-transition sidebar-mini layout-fixed">
          <Main />
          <NextScript />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jquery/jquery.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jquery-ui/jquery-ui.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/bootstrap/js/bootstrap.bundle.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/chart.js/Chart.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/sparklines/sparkline.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jqvmap/jquery.vmap.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jqvmap/maps/jquery.vmap.usa.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jquery-knob/jquery.knob.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/moment/moment.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/daterangepicker/daterangepicker.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/summernote/summernote-bs4.min.js`}
          />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js`}
          />
          <script src={`${process.env.NEXT_PUBLIC_URL}/dist/js/adminlte.js`} />
          <script
            src={`${process.env.NEXT_PUBLIC_URL}/dist/js/pages/dashboard.js`}
          />
          <script src={`${process.env.NEXT_PUBLIC_URL}/dist/js/demo.js`} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;