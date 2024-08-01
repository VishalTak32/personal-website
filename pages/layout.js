import { AppBar, Toolbar, Typography, Container, Link as MuiLink, Box } from '@mui/material';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundImage:'none', boxShadow:'none', width: '100%', top: 0, left: 0 }}>
        <Toolbar sx={{ justifyContent: 'right' }}>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Link href="/" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }}>
                About
              </MuiLink>
            </Link>
            <Link href="/resume" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }}>
                Resume
              </MuiLink>
            </Link>
            <Link href="/contact" passHref>
              <MuiLink color="inherit" sx={{textDecoration: 'none', margin: '0 10px' }}>
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
