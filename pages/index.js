import Head from 'next/head';
import Hero from '../components/Hero';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

const SITE = 'https://vishal-tak.com';
const TITLE = 'Vishal Tak — Senior Software Engineer';
const DESCRIPTION =
  'Vishal Tak — Senior Software Engineer at Capital One building distributed systems, backend platforms, and applied AI tooling.';

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vishal Tak',
  url: SITE,
  image: `${SITE}/og.jpg`,
  jobTitle: 'Senior Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Capital One' },
  address: { '@type': 'PostalAddress', addressLocality: 'Frisco', addressRegion: 'TX', addressCountry: 'US' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'The University of Texas at Austin' },
  knowsAbout: ['Distributed systems', 'Backend engineering', 'Applied AI', 'Java', 'Spring Boot', 'AWS'],
  sameAs: [
    'https://www.linkedin.com/in/vishal-tak14/',
    'https://patents.google.com/patent/US12536176B2',
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={SITE} />
        <meta property="og:image" content={`${SITE}/og.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vishal Tak, Senior Software Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE}/og.jpg`} />
        <link rel="canonical" href={SITE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
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
