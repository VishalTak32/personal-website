import Head from 'next/head';
import { Container, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Container>
      <Head>
        <title>Contact - Vishal Tak</title>
        <meta name="description" content="Contact Vishal Tak" />
      </Head>
      <main>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: 512-521-8600
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: vishal.tak14@gmail.com
        </Typography>
        <Typography variant="body1" gutterBottom>
          Location: Plano, TX
        </Typography>
        <Typography variant="body1" gutterBottom>
          <a href="https://gitlab.com/VishalTak14" target="_blank" rel="noopener noreferrer">
            GitLab
          </a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <a href="https://www.linkedin.com/in/vishal-tak14/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Typography>
      </main>
    </Container>
  );
}
