import { AppBar, Toolbar, Typography, Container, Link as MuiLink, Box } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Layout({ children }) {
  const router = useRouter();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        scrollToAboutSection();
      });
    } else {
      scrollToAboutSection();
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (router.pathname !== '/') {
      router.push('/').then(() => {
        scrollToContactSection();
      });
    } else {
      scrollToContactSection();
    }
  };

  const scrollToContactSection = () =>{
    const contactSection = document.getElementById('contact-section');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about-section');
    const contactSection = document.getElementById('contact-section');

    if (aboutSection && contactSection) {
      const aboutRect = aboutSection.getBoundingClientRect();
      const contactRect = contactSection.getBoundingClientRect();
      
      const scrollToY = aboutRect.top + window.scrollY;

      // Ensure the bottom of the viewport does not show the contact section
      const stopScrollBeforeContact = contactRect.top + window.scrollY - window.innerHeight;

      const finalScrollY = Math.min(scrollToY, stopScrollBeforeContact);
      window.scrollTo({
        top: finalScrollY,
        behavior: 'smooth'
      });
    }
  };

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     if (url === '/') {
  //       scrollToAboutSection();
  //     }else if(url === '/contact'){
  //       scrollToContactSection();
  //     }
  //   };

  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router]);

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundImage:'none', boxShadow:'none', width: '100%', top: 0, left: 0 }}>
        <Toolbar sx={{ justifyContent: 'right', 
      '@media (max-width: 600px)': {
        justifyContent: 'center'
      },}}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Link href="/" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }} onClick={handleAboutClick}>
                About
              </MuiLink>
            </Link>
            <Link href="/work" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }}>
                Work
              </MuiLink>
            </Link>
            <Link href="/" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }} onClick={handleContactClick}>
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
