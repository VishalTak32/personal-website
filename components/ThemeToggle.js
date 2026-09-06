import { useEffect, useState } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';
import styles from '../styles/Layout.module.css';

/**
 * Light and dark are both first-class here: the palette is the brand, and the
 * warm sand ground reads very differently from the dark one, so visitors get
 * an explicit choice rather than only whatever their OS decided.
 *
 * No theme is assumed during render. The button stays unlabelled until the
 * effect has read the real state, because server-rendering "dark" for someone
 * whose system is light would ship a wrong icon and a wrong aria-label.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem('theme');
      } catch (e) {
        return null;
      }
    })();

    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
      return undefined;
    }

    // No stored choice: follow the system, and keep following it if it changes.
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => setTheme(query.matches ? 'dark' : 'light');
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Preference just will not persist. The page still works.
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Switch colour mode'}
    >
      {isDark ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
    </button>
  );
}
