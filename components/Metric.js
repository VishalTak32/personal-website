import { useEffect, useLayoutEffect, useRef } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Counts up to `value` once scrolled into view.
 *
 * The final value is what renders server-side, so crawlers and no-JS visitors
 * always see the real number. The count itself is written straight to the DOM
 * node rather than through state. Re-rendering React 60x a second while the
 * page is also scrolling is what makes this kind of counter feel janky.
 */
export default function Metric({ value, suffix = '', className }) {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;
    // Reset before first paint so the real number never flashes then rewinds.
    el.textContent = `0${suffix}`;
    return undefined;
  }, [suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    let frame;
    const target = Number(value);
    const duration = 1100;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${Math.round(target * eased)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: '0px 0px 80px 0px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, suffix]);

  return (
    <div ref={ref} className={className}>
      {value}
      {suffix}
    </div>
  );
}
