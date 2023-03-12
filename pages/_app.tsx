import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../styles/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {console.log("process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ")}
      {console.log(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)}
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
