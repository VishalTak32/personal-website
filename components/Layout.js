import { useEffect, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NodeField from './NodeField';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Layout.module.css';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const sentinel = useRef(null);
  const [stuck, setStuck] = useState(false);

  /**
   * The nav's stuck state is driven by a zero-height sentinel sitting at the
   * top of the document rather than by a scroll listener. The observer fires
   * twice per page life instead of on every frame, and it cannot oscillate
   * around a threshold the way a scrollY comparison can.
   */
  useEffect(() => {
    const node = sentinel.current;
    if (!node || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <div ref={sentinel} className={styles.sentinel} aria-hidden="true" />

      <NodeField />

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
            Résumé
          </a>
          <ThemeToggle />
        </nav>
      </header>

      <main id="main">
        <span id="top" />
        {children}
      </main>

      <footer className={styles.footer}>
        <span suppressHydrationWarning>© {new Date().getFullYear()} Vishal Tak</span>
        <span>Frisco, TX</span>
      </footer>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
