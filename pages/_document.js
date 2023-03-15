import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*  Google Tag Manager  */}
          <script
            defer
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
          />
          {/*  End Google Tag Manager  */}
          {/* Google tag (gtag.js)  */}

          <script
            defer
            src="https://www.googletagmanager.com/gtag/js?id=G-C0BTW9EXDK"
          />
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-C0BTW9EXDK');
              `,
            }}
          />
        </Head>

        {/* <Script
          strategy="beforeInteractive"
          src={`${process.env.NEXT_PUBLIC_URL}/plugins/jquery/jquery.min.js`}
        />
        <Script
          strategy="beforeInteractive"
          src={`${process.env.NEXT_PUBLIC_URL}/plugins/bootstrap/js/bootstrap.bundle.min.js`}
        />
        <Script
          strategy="beforeInteractive"
          src={`${process.env.NEXT_PUBLIC_URL}/dist/js/adminlte.js`}
        /> */}
        <body className="hold-transition sidebar-mini layout-fixed">
          {/*  Google Tag Manager (noscript)  */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TGXWKQ2"
              height="0"
              width="0"
              title="googletagmanager"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/*  End Google Tag Manager (noscript)  */}
          <Main />
          <NextScript />
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
          (function (w, d, s, c, r, a, m) {
            w["KiwiObject"] = r;
            w[r] =
              w[r] ||
              function () {
                (w[r].q = w[r].q || []).push(arguments);
              };
            w[r].l = 1 * new Date();
            a = d.createElement(s);
            m = d.getElementsByTagName(s)[0];
            a.async = 1;
            a.src = c;
            m.parentNode.insertBefore(a, m);
          })(
            window,
            document,
            "script",
            "https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=" +
              new Date().getTime(),
            "kiwi"
          );
          window.addEventListener("load", function () {
            kiwi.init("", "Ch1CAu6SCWM5ilsGbMxFEwd4qWTdvtby", {});
          });
        `,
            }}
          /> */}
          <script
            defer
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/jquery/jquery.min.js`}
          />
          <script
            defer
            src={`${process.env.NEXT_PUBLIC_URL}/plugins/bootstrap/js/bootstrap.bundle.min.js`}
          />
          <script
            defer
            src={`${process.env.NEXT_PUBLIC_URL}/dist/js/adminlte.js`}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
