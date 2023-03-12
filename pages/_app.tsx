import Script from "next/script";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import "../styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore */
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore */
    window.gtag = function () {
      // @ts-ignore */
      dataLayer.push(arguments);
    };
    // @ts-ignore */
    window.gtag("js", new Date());
    // @ts-ignore */
    window.gtag("config", "<GA-id>");
  }, []);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-602BMHPS6K"
      />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-602BMHPS6K`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-602BMHPS6K', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
