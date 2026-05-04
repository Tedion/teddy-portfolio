# Teddy Abera Danamo — Portfolio

Personal portfolio site for Teddy Abera Danamo, DevOps & Platform Engineer based in Addis Ababa, Ethiopia.

## Tech Stack

- **Framework:** Astro 4 (static output, zero client-side JS)
- **Styling:** Vanilla CSS with custom properties
- **Typography:** Instrument Serif (display), IBM Plex Sans (body), IBM Plex Mono (code) — self-hosted WOFF2
- **Deploy:** Vercel (static)

## Design Direction

Ethiopian Editorial — restrained near-black background with warm off-white text and terracotta (#C2703E) accent. Emphasis on editorial typography, real architecture diagrams, and technical specificity over visual decoration.

Full design strategy documented in [DESIGN.md](./DESIGN.md).

## Performance

- **HTML:** ~39KB
- **CSS:** ~15KB
- **JS:** 0 bytes (scroll observer is the only script, inline)
- **Fonts:** ~128KB (7 WOFF2 files, preloaded critical path)
- **Total page weight:** ~310KB
- **Lighthouse:** Accessibility 100, Best Practices 100, SEO 100

## Local Development

```bash
npm install
npm run dev        # Dev server at localhost:4321
npm run build      # Build to ./dist/
npm run preview    # Preview production build
```

## Customization

### Content to update

- `src/pages/index.astro` — All portfolio content (hero, case studies, capabilities, timeline, about, contact)
- `src/styles/global.css` — Design tokens (colors, fonts, spacing)
- `src/layouts/Base.astro` — Meta tags, OG image URL, JSON-LD schema
- `astro.config.mjs` — `site` URL for sitemap and canonical URLs

### Links to verify

- LinkedIn URL: `https://www.linkedin.com/in/teddy-abera-danamo`
- GitHub URL: `https://github.com/Tedion`
- Email: `tedionabera@gmail.com`
- Phone: `+251 910 161 555`

### Assets to add

- `public/og-image.png` — Open Graph preview image (1200x630)
- `public/favicons/favicon-32.png` — 32x32 PNG favicon
- `public/favicons/apple-touch-icon.png` — 180x180 Apple touch icon
- `public/cv.pdf` — Downloadable CV (optional)

## Deployment

### Vercel (recommended)

1. Import repository on [vercel.com](https://vercel.com)
2. Framework preset: Astro (auto-detected)
3. No configuration needed — builds and deploys automatically on push

### GitHub Pages

1. Set repository Settings > Pages > Source to "GitHub Actions"
2. Add a GitHub Actions workflow for Astro (see [Astro docs](https://docs.astro.build/en/guides/deploy/github/))

## Project Structure

```
teddy-portfolio/
  public/
    fonts/           # Self-hosted WOFF2 font files
    favicons/        # Favicon set
    robots.txt       # Search engine directives
  src/
    assets/fonts/    # Source font files
    layouts/
      Base.astro     # HTML shell, meta tags, JSON-LD, font preload
    pages/
      index.astro    # Full portfolio page with all sections
    styles/
      global.css     # Design system (tokens, reset, typography, utilities)
  docs/
    screenshots/     # Lighthouse and responsive screenshots
  DESIGN.md          # Design strategy document
  astro.config.mjs   # Astro configuration
```

## License

Content is personal. Code structure is MIT.
