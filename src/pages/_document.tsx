import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { NEXT_PUBLIC_GOOGLE_MAP_APIKEY } = process.env;
  return (
    <Html lang="en">
      <Head>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${NEXT_PUBLIC_GOOGLE_MAP_APIKEY}&libraries=places`}
        ></script>
        <link
          rel="icon"
          href="favicon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <title>Learning Diary</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
