import Head from 'next/head';
import { Container, Typography, Box} from '@mui/material';
import styles from '../../styles/Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', padding: '20px', color: '#d3d3d3' }}>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h6" component="h1" gutterBottom sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px', xl: '22px' } }}>
        Contact
      </Typography>
    </Box>
    <Box className={styles.imgBox}>
        <Link href="mailto:vishal.tak14@gmail.com" color="primary" underline="none" className={styles.link}>
          <img  className={styles.imageEmail} src='/email2.png' alt='Email'/>
        </Link>
        <Link href="https://www.linkedin.com/in/vishal-tak14/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <img className={styles.imageLinkedIn} src='/linkedin2.png' alt='Linked-In'/>
        </Link>
    </Box>
  </Container>
  );
}
