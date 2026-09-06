import { useEffect, useRef, useState } from 'react';

/**
 * Reveals its children as they scroll into view.
 *
 * The observer fires ~140px *before* the element reaches the viewport, so the
 * fade is already underway by the time you can see it. Triggering exactly at
 * the edge is what makes reveals look like they pop or stutter. Falls back to
 * visible when IntersectionObserver is missing, and is disabled entirely under
 * prefers-reduced-motion (see globals.css).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      setSettled(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(node);
      },
      { threshold: 0.01, rootMargin: '0px 0px 140px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || settled) return undefined;
    const timer = setTimeout(() => setSettled(true), 700);
    return () => clearTimeout(timer);
  }, [visible, settled]);

  const classes = [
    'reveal',
    delay ? `delay-${delay}` : '',
    visible ? 'is-visible' : '',
    settled ? 'is-settled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
