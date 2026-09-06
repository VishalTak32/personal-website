# vishal-tak.com

Personal site and portfolio. Next.js (Pages Router), CSS Modules, no UI framework.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Layout

```
pages/
  _app.js        next/font setup, injects --font-* custom properties
  _document.js   theme no-flash script, favicon, theme-color
  index.js       the single page: metadata, JSON-LD, section order
components/      one component per section, plus shared behaviour
styles/          globals.css holds the tokens, one CSS Module per component
public/          og.jpg (link previews), resume.pdf, robots.txt, sitemap.xml
```

## Design tokens

Everything visual is driven by custom properties in `styles/globals.css`.

- `--accent` (`#b07419`) is the brand ochre, used for fills, rules, and large
  display type. It is the original `#b9791f` darkened by about 4%: at the
  source value the accent surname measured 2.84:1 on the sand ground, just
  under the 3:1 floor for large text. It now measures 3.08:1.
- `--accent-ink` (`#8a560f`) is the same hue taken further down to clear 4.5:1
  for body-size text. Small accent-coloured text uses this one.

Dark mode is defined twice on purpose: once under `prefers-color-scheme` for
visitors who have never chosen, and once under `[data-theme="dark"]` for those
who have used the toggle. The choice is stored in `localStorage` and applied by
an inline script in `_document.js` before first paint.

## Things worth knowing before editing

- **Fonts** come from `next/font` and are self-hosted. Do not add a
  `fonts.googleapis.com` link tag; it reintroduces a render-blocking round trip.
- **The nav's stuck state** is driven by an IntersectionObserver on a sentinel
  element, not a scroll listener.
- **The case studies are a sticky stack.** The cards must keep an opaque
  background or pinned cards show through each other. The stack degrades to
  normal flow below 760px and under `prefers-reduced-motion`.
- **Motion is opt-out everywhere.** Every animation has a
  `prefers-reduced-motion: reduce` branch.
- **`components/NodeField.js`** draws the background graph. Above 1120px it is
  a fixed canvas masked to the margins *outside* the reading column; below that
  it moves inside the Work section, where the case cards are opaque. Both
  placements exist so no field mark ever lands behind accent-coloured text,
  which would push it under its contrast floor.
- **The hero parallax** is a native CSS scroll-driven animation
  (`animation-timeline: scroll(root block)`), not a scroll listener. Browsers
  without support simply get no parallax.
- **`public/profile-pic.jpeg` is unreferenced.** Nothing on the site uses it
  since the portrait came out of the hero. Safe to delete.

## Deploying

Deployed on Vercel. Pushing to `main` ships it.
