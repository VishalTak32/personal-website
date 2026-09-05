import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import styles from '../styles/Layout.module.css';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let frame = null;
    const read = () => {
      frame = null;
      // Separate on/off thresholds: once stuck it takes a real scroll back up
      // to unstick, so hovering around a single boundary can't oscillate.
      setStuck((prev) => (prev ? window.scrollY > 8 : window.scrollY > 36));
    };
    // Coalesce scroll events into one read per frame.
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header className={`${styles.nav} ${stuck ? styles.stuck : ''}`}>
        <a className={styles.mark} href="#top" aria-label="Back to top">
          VT/
        </a>
        <nav className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            className={styles.cta}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↓
          </a>
        </nav>
      </header>

      <main id="top">{children}</main>

      <footer className={styles.footer}>
        <span suppressHydrationWarning>© {new Date().getFullYear()} Vishal Tak</span>
        <span>Austin, TX</span>
      </footer>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
