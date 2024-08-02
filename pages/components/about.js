import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', padding: '20px', color: '#d3d3d3' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" component="h1" gutterBottom sx={{ color: '#b0b0b0' , fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px', xl: '22px' } }}>
          About
        </Typography>
      </Box>
      <Box sx={{ flex: 3, maxWidth: '800px' }}>
        <Typography variant="body1" paragraph sx={{fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' }}}>
          I’m Vishal Tak, a passionate, driven, and creative Full-Stack Software Engineer from Austin, TX. Currently, I work at Capital One, where I leverage my technical skills to build impactful solutions. I graduated from the University of Texas at Austin with a BA in Computer Science in 2022, before embarking on my software engineering career with Capital One.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }}>
          In my role as a Software Engineer, I excel at solving real-world challenges through collaboration with business teams. I belive that by understanding customer needs, desires, and sentiments, I can deliver well-crafted and effective solutions.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }}>
          Outside of work, I am passionate about exploring new technologies and programming languages, as well as staying informed about the latest trends in software development. This continuous learning helps me stay current in the fast-paced tech industry and refine my technical skills.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px', xl: '20px' } }}>
          In my free time, I enjoy a variety of sports, including basketball, pickleball, and tennis. I also have a love for playing the piano, watching movies, and traveling, which adds a creative and adventurous dimension to my life.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
