import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Fonts are loaded here rather than with @import in globals.css. An @import
 * makes the browser fetch the CSS, parse it, then fetch a second stylesheet
 * before it can even start on the font files — a chain that is very noticeable
 * on mobile connections. Link tags plus preconnect start all of it in parallel.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
