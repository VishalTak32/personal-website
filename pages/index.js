import Head from 'next/head';
import { Container, Typography, Box, Fab } from '@mui/material';
import About from './components/about';
import Contact from './components/contact';
import Experience from './experience';
import styles from '../styles/Home.module.css';
import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Home() {
  const [showUpButton, setShowUpButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setShowUpButton(bottom);
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
        <title>Vishal Tak - Software Developer</title>
        <meta name="description" content="Vishal Tak's personal portfolio website" />
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
        <Box id="about" className={styles.aboutSection}>
          <About />
        </Box>
        <Box id="experience" className={styles.experienceSection}>
          <Experience />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
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
