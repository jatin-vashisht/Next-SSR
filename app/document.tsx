import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/some-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Inline critical CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS here */
          body {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
          }
          .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
