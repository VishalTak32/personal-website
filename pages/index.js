import Head from 'next/head';
import { Container, Typography, Box } from '@mui/material';
import 'swiper/css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vishal Tak - Software Developer</title>
        <meta name="description" content="Vishal Tak's personal portfolio website" />
      </Head>
      <main>
        <Box
          sx={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'right',
            marginLeft: '-100px'
          }}
        >
          <Box
            sx={{
              flex: 1,
              transform: 'translateX(-60%)',
              position: 'absolute',
              zIndex: 1
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.9)' }}>
              I like problem solving,
            </Typography>
            <Typography variant="h2" component="h1" gutterBottom sx={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.9)' }}>
              with design & code.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              backgroundImage: 'url(/image3.jpg), radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.5) 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              width: '80%',
              height: '90%',
              marginRight: '-400px',
              opacity: 0.6,
              padding: '150px 200px',
              boxSizing: 'border-box',
              boxShadow: 'inset 0 0 70px 50px black'
            }}
          />
        </Box>
      </main>
    </Container>
  );
}
