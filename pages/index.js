import Head from 'next/head';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Vishal Tak - Software Developer</title>
        <meta name="description" content="Vishal Tak's personal portfolio website" />
      </Head>
      <main>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi, I'm Vishal Tak
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom align='center'>
          Software Developer.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            style={{ height: 'auto' }}
          >
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/image1.jpg" 
                alt="Image 1" 
                style={{ width: '800px', height: 'auto', objectFit: 'cover' }} 
              />
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/image2.jpg" 
                alt="Image 2" 
                style={{ width: '500px', height: '600px', objectFit: 'cover' }} 
              />
            </SwiperSlide>
            <SwiperSlide style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/image3.jpg" 
                alt="Image 3" 
                style={{ width: '800px', height: 'auto', objectFit: 'cover' }} 
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </main>
    </Container>
  );
}
