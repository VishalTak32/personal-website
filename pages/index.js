import Head from 'next/head';
import { Container, Typography, Box, Fab } from '@mui/material';
import About from './components/about';
import Contact from './components/contact';
import Experience from './experience';
import FadeInSection from './components/FadeInSection';
import styles from '../styles/Home.module.css';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Home() {
  const [showUpButton, setShowUpButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (router.pathname === '/') {
      history.pushState(null, null, `/`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/').then(() => {
        history.pushState(null, null, `/`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  return (
    <Container>
      <Head>
        <title>Vishal Tak - Senior Software Engineer</title>
        <meta
          name="description"
          content="Vishal Tak — Senior Software Engineer at Capital One building distributed systems, backend platforms, and applied AI/GenAI tooling."
        />
        <meta property="og:title" content="Vishal Tak - Senior Software Engineer" />
        <meta
          property="og:description"
          content="Senior Software Engineer at Capital One building distributed systems, backend platforms, and applied AI/GenAI tooling."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vishal-tak.com" />
        <meta property="og:image" content="https://vishal-tak.com/profile-pic.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://vishal-tak.com" />
      </Head>
      <main>
        <Box className={styles.container}>
          <Box className={styles.content}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={styles.title}
            >
              I like solving problems,
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className={styles.title2}
            >
              with creative solutions.
            </Typography>
          </Box>
          <Box className={styles.background} />
        </Box>
        <FadeInSection id="about" className={styles.aboutSection}>
          <About />
        </FadeInSection>
        <FadeInSection id="experience" className={styles.experienceSection}>
          <Experience />
        </FadeInSection>
        <FadeInSection id="contact">
          <Contact />
        </FadeInSection>
        {showUpButton && (
          <Fab
            color="primary"
            aria-label="up"
            onClick={scrollToTop}
            className={styles.upButton}
          >
            <ArrowUpwardIcon />
          </Fab>
        )}
      </main>
    </Container>
  );
}
