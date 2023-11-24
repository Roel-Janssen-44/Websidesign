import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <meta
          property="og:url"
          content="https://www.websidesign.nl/og-image.png"
        />
        <meta
          property="og:image"
          content="https://www.websidesign.nl/images/meta-tags.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
