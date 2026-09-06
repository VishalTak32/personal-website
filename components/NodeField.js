import { useEffect, useRef } from 'react';
import styles from '../styles/NodeField.module.css';

/**
 * A directed graph flowing downward from a single origin node, with pulses
 * travelling along its edges. Same idea as the decisioning DAG in the third
 * case study, used as atmosphere rather than as a diagram.
 *
 * Two placements, one engine:
 *   - "page"   (default) fixed behind the whole document, masked to the
 *              margins outside the reading column, parallaxing and quickening
 *              as the page scrolls. Used above 1120px.
 *   - "inline" absolutely fills the box it is given. Below 1120px the margins
 *              are gone, so the field moves inside the Work section instead,
 *              where the case cards are opaque and the heading is plain ink.
 *              Nothing accent-coloured sits over it there.
 *
 * Cost control:
 *   - the static graph is rasterised once into an offscreen canvas, so a frame
 *     only blits that layer plus the live pulses.
 *   - the canvas is `position: fixed`, so scrolling never repaints the page.
 *   - scroll position is sampled inside the existing rAF loop. No scroll
 *     listener and no per-frame React state: either would cost far more than
 *     one `scrollY` read on a frame we are already drawing.
 *   - the loop stops when the tab is hidden, and the inline canvas also stops
 *     once it has scrolled out of view.
 *   - under prefers-reduced-motion the graph is drawn once and left still.
 */

// Row sizes, top to bottom. One origin, fanning out, drawing back in.
const ROWS = [1, 3, 5, 6, 6, 5, 4, 3];
const MAX_PULSES = 90;
const SPAWN_MS = 520;
const OVER_X = 1.08;
const OVER_Y = 1.45;

export default function NodeField({ inline = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return undefined;

    const host = inline ? canvas.parentElement : null;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scheme = window.matchMedia('(prefers-color-scheme: dark)');

    let width = 0;
    let height = 0;
    let fieldW = 0;
    let fieldH = 0;
    let dpr = 1;
    let nodes = [];
    let pulses = [];
    let layer = null;
    let raf = null;
    let last = 0;
    let sinceSpawn = 0;
    let accent = '#b07419';
    let neutral = '#8a7f6a';

    let lastScrollY = 0;
    let velocity = 0;
    let driftY = 0;
    let onScreen = true;

    const readPalette = () => {
      const cs = getComputedStyle(document.documentElement);
      accent = cs.getPropertyValue('--accent').trim() || accent;
      neutral = cs.getPropertyValue('--muted').trim() || neutral;
    };

    /** Rows stacked top to bottom; every edge points at the row below. */
    const build = () => {
      nodes = [];
      const padY = fieldH * 0.04;
      const span = (fieldH - padY * 2) / (ROWS.length - 1);

      ROWS.forEach((count, row) => {
        const y = padY + row * span;
        const usable = fieldW * 0.82;
        const left = fieldW * 0.09;
        const step = count > 1 ? usable / (count - 1) : 0;
        for (let i = 0; i < count; i += 1) {
          const x =
            count > 1
              ? left + i * step + (Math.random() - 0.5) * step * 0.34
              : fieldW * 0.5;
          nodes.push({ x, y, row, out: [] });
        }
      });

      for (let row = 0; row < ROWS.length - 1; row += 1) {
        const from = nodes.filter((n) => n.row === row);
        const to = nodes.filter((n) => n.row === row + 1);
        from.forEach((n) => {
          const picks = new Set();
          const want = Math.min(to.length, 1 + Math.floor(Math.random() * 3));
          while (picks.size < want) picks.add(to[Math.floor(Math.random() * to.length)]);
          n.out = [...picks];
        });
      }
    };

    const paintLayer = () => {
      layer = document.createElement('canvas');
      layer.width = Math.max(1, Math.floor(fieldW * dpr));
      layer.height = Math.max(1, Math.floor(fieldH * dpr));
      const g = layer.getContext('2d');
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      g.strokeStyle = neutral;
      g.globalAlpha = inline ? 0.26 : 0.2;
      g.lineWidth = 1;
      nodes.forEach((n) =>
        n.out.forEach((m) => {
          g.beginPath();
          g.moveTo(n.x, n.y);
          g.lineTo(m.x, m.y);
          g.stroke();
        })
      );

      // Square nodes, matching the zero-radius shape system used on the page.
      nodes.forEach((n) => {
        const origin = n.row === 0;
        g.globalAlpha = origin ? 0.72 : inline ? 0.42 : 0.34;
        g.fillStyle = origin ? accent : neutral;
        const s = origin ? 7 : 4;
        g.fillRect(n.x - s / 2, n.y - s / 2, s, s);
      });
    };

    const resize = () => {
      if (inline) {
        const box = host.getBoundingClientRect();
        width = Math.max(1, Math.round(box.width));
        height = Math.max(1, Math.round(box.height));
        fieldW = width;
        fieldH = height;
      } else {
        width = Math.max(1, window.innerWidth);
        height = Math.max(1, window.innerHeight);
        fieldW = width * OVER_X;
        fieldH = height * OVER_Y;
      }
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readPalette();
      build();
      paintLayer();
      pulses = [];
    };

    const spawn = () => {
      const origin = nodes.find((n) => n.row === 0);
      if (pulses.length >= MAX_PULSES || !origin || !origin.out.length) return;
      const to = origin.out[Math.floor(Math.random() * origin.out.length)];
      pulses.push({ from: origin, to, t: 0, speed: 0.13 + Math.random() * 0.11 });
    };

    const scrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const composite = (offY) => {
      ctx.clearRect(0, 0, width, height);
      if (layer) ctx.drawImage(layer, inline ? 0 : -(fieldW - width) / 2, offY, fieldW, fieldH);
    };

    const draw = (now) => {
      raf = requestAnimationFrame(draw);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Scroll sampling: no listener, no state, one read per drawn frame.
      const y = window.scrollY;
      velocity += (Math.abs(y - lastScrollY) - velocity) * 0.1;
      lastScrollY = y;

      if (!inline) {
        const target = -scrollProgress() * (fieldH - height);
        driftY += (target - driftY) * Math.min(1, dt * 3.5);
      }

      // Scrolling nudges the flow along. Capped low so it stays calm.
      const boost = 1 + Math.min(velocity / 55, 0.9);

      sinceSpawn += dt * 1000;
      if (sinceSpawn >= SPAWN_MS / boost) {
        sinceSpawn = 0;
        spawn();
      }

      composite(driftY);

      const next = [];
      ctx.lineCap = 'round';
      for (const p of pulses) {
        p.t += p.speed * boost * dt;
        if (p.t >= 1) {
          if (p.to.out.length && pulses.length + next.length < MAX_PULSES) {
            const branches = Math.random() < 0.24 ? 2 : 1;
            for (let i = 0; i < branches; i += 1) {
              const to = p.to.out[Math.floor(Math.random() * p.to.out.length)];
              next.push({ from: p.to, to, t: 0, speed: p.speed });
            }
          }
          continue;
        }

        const ox = inline ? 0 : -(fieldW - width) / 2;
        const px = p.from.x + (p.to.x - p.from.x) * p.t + ox;
        const py = p.from.y + (p.to.y - p.from.y) * p.t + driftY;
        const tailT = Math.max(0, p.t - 0.2);
        const tx = p.from.x + (p.to.x - p.from.x) * tailT + ox;
        const ty = p.from.y + (p.to.y - p.from.y) * tailT + driftY;

        // Fade in and out so pulses never pop at either end of an edge.
        const fade = Math.sin(Math.PI * p.t);

        ctx.globalAlpha = 0.34 * fade;
        ctx.strokeStyle = accent;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.globalAlpha = 0.7 * fade;
        ctx.fillStyle = accent;
        ctx.fillRect(px - 2, py - 2, 4, 4);

        next.push(p);
      }
      pulses = next;
      ctx.globalAlpha = 1;
    };

    const stop = () => {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
    };

    const start = () => {
      if (raf !== null || motion.matches || document.hidden || !onScreen) return;
      last = performance.now();
      lastScrollY = window.scrollY;
      raf = requestAnimationFrame(draw);
    };

    const still = () => composite(inline ? 0 : -scrollProgress() * (fieldH - height));

    const refresh = () => {
      readPalette();
      paintLayer();
      if (motion.matches) still();
    };

    const onMotionChange = () => {
      stop();
      if (motion.matches) still();
      else start();
    };

    // A theme swap changes --accent and --muted, so the static layer is stale.
    const themeObserver = new MutationObserver(refresh);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (motion.matches) still();
      }, 160);
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    // The inline canvas has no reason to run once it has scrolled away.
    let viewObserver = null;
    let boxObserver = null;
    if (inline) {
      if ('IntersectionObserver' in window) {
        viewObserver = new IntersectionObserver(
          ([entry]) => {
            onScreen = entry.isIntersecting;
            if (onScreen) start();
            else stop();
          },
          { threshold: 0 }
        );
        viewObserver.observe(canvas);
      }
      if ('ResizeObserver' in window) {
        boxObserver = new ResizeObserver(onResize);
        boxObserver.observe(host);
      }
    }

    resize();
    if (motion.matches) still();
    else start();

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onMotionChange);
    scheme.addEventListener('change', refresh);

    return () => {
      stop();
      clearTimeout(resizeTimer);
      themeObserver.disconnect();
      if (viewObserver) viewObserver.disconnect();
      if (boxObserver) boxObserver.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onMotionChange);
      scheme.removeEventListener('change', refresh);
    };
  }, [inline]);

  return (
    <canvas
      ref={ref}
      className={inline ? styles.inline : styles.field}
      aria-hidden="true"
    />
  );
}
