import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Runs before first paint so a stored theme choice is applied to <html> while
 * the document is still parsing. Without it the page paints in the system
 * theme and then flips, which is the flash every manual toggle has to solve.
 * Wrapped in try/catch because localStorage throws outright in some privacy
 * modes, and a theme preference is never worth breaking the page over.
 */
const NO_FLASH = `
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Tells the browser chrome (address bar, form controls) which mode we
            are in, per theme, so native UI matches the page. */}
        <meta name="theme-color" content="#ede3d1" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#201b14" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
