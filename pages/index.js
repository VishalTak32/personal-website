import Head from 'next/head';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

const DESCRIPTION =
  'Vishal Tak — Senior Software Engineer at Capital One building distributed systems, backend platforms, and applied AI tooling.';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vishal Tak — Senior Software Engineer</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Vishal Tak — Senior Software Engineer" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishal-tak.com" />
        <meta property="og:image" content="https://vishal-tak.com/profile-pic.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vishal-tak.com" />
        <noscript>
          {/* Without JS the scroll-reveal never fires, so show everything up front. */}
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
      </Head>

      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}
