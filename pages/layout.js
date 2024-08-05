import { AppBar, Toolbar, Typography, Container, Link as MuiLink, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();

  const handleNavClick = (e, section, section2) => {
    e.preventDefault();
    if (router.pathname === '/') {
      history.pushState(null, null, `#${section}`);
      scrollToSection(section, section2);
    } else {
      router.push('/').then(() => {
        history.pushState(null, null, `#${section}`);
        scrollToSection(section, section2);
      });
    }
  };

  const scrollToSection = (from, to) => {
    const fromSection = document.getElementById(from);
    const toSection = document.getElementById(to);

    if (fromSection) {
      const fromRect = fromSection.getBoundingClientRect();
      const scrollToY = fromRect.top + window.scrollY;

      if (toSection) {
        const toRect = toSection.getBoundingClientRect();
        const stopScrollBeforeTo = toRect.top + window.scrollY - window.innerHeight;

        const finalScrollY = Math.min(scrollToY, stopScrollBeforeTo);
        window.scrollTo({
          top: finalScrollY,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: scrollToY,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundImage: 'none', boxShadow: 'none', width: '100%', top: 0, left: 0 }}>
        <Toolbar sx={{ justifyContent: 'right', 
          '@media (max-width: 600px)': {
            justifyContent: 'center'
          },
        }}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Link href="#about" passHref scroll={false} className={styles.link}> 
              <MuiLink color="inherit"  sx={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, 'about', 'experience')}>
                About
              </MuiLink>
            </Link>
            <Link href="#experience" passHref scroll={false} className={styles.link}>
              <MuiLink color="inherit" sx={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, 'experience', 'contact')}>
                Experience
              </MuiLink>
            </Link>
            <Link href="#contact" passHref scroll={false} className={styles.link}>
              <MuiLink color="inherit" sx={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, 'contact', null)}>
                Contact
              </MuiLink>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          paddingTop: '64px'
        }}
      >
        {children}
      </Container>
    </div>
  );
}
