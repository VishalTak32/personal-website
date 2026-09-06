import { Big_Shoulders_Display, Work_Sans, IBM_Plex_Mono } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * next/font downloads these at build time and serves them from our own origin,
 * so there is no render-blocking round trip to fonts.googleapis.com and no
 * second hop to fonts.gstatic.com. It also generates a metric-matched local
 * fallback, which is what keeps the swap from shifting layout.
 */
const display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  fallback: ['Arial Narrow', 'sans-serif'],
});

const body = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'monospace'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Declared here rather than in globals.css so the generated family
          names and the custom properties can never drift apart. */}
      <style jsx global>{`
        :root {
          --font-display: ${display.style.fontFamily};
          --font-body: ${body.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
