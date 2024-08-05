import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import About from './components/about';
import Contact from './components/contact';
import styles from '../styles/Home.module.css';
import Experience from './experience';

export default function Home() {
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
      </main>
    </Container>
  );
}
