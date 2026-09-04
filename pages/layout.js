import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Link as MuiLink, Box } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../styles/layout.module.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: 'none',
          boxShadow: 'none',
          width: '100%',
          top: 0,
          left: 0,
          backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'right', 
          '@media (max-width: 600px)': {
            justifyContent: 'center'
          },
        }}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <MuiLink
              href="#about"
              color="inherit"
              sx={{ textDecoration: 'none' }}
              className={styles.link}
              onClick={(e) => handleNavClick(e, 'about', 'experience')}
            >
              About
            </MuiLink>
            <MuiLink
              href="#experience"
              color="inherit"
              sx={{ textDecoration: 'none' }}
              className={styles.link}
              onClick={(e) => handleNavClick(e, 'experience', 'contact')}
            >
              Experience
            </MuiLink>
            <MuiLink
              href="#contact"
              color="inherit"
              sx={{ textDecoration: 'none' }}
              className={styles.link}
              onClick={(e) => handleNavClick(e, 'contact', null)}
            >
              Contact
            </MuiLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          paddingTop: '64px'
        }}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </Container>
    </div>
  );
}
