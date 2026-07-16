# zetoon.dev

Marketing site for [Zetoon](https://zetoon.dev) apps: [Masbaha](https://zetoon.dev/masbaha/),
[ChromaShift](https://zetoon.dev/chromashift/), and [MyMemoryCards](https://zetoon.dev/mymemorycards/).

Built with [Astro](https://astro.build) (static output, zero client JS). Deployed on Netlify —
every push to `main` triggers a build (`npm run build`, publish `dist/`, see `netlify.toml`).

## Development

```sh
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/data/apps.ts` — one record per app (name, tagline, features, store links, status).
  Adding an app = one entry here + one page under `src/pages/`.
- `src/layouts/Base.astro` — shared shell (head/meta/OG, header, footer).
- `src/components/AppPage.astro` — renders a full app page from an `AppInfo` record.
- `src/styles/global.css` — design system: olive palette, automatic light/dark,
  RTL-safe logical properties (Arabic can be added without layout rework).
- `public/app-ads.txt` — required by AdMob; must stay at the site root.

## Notes

- Canonical domain is set in `astro.config.mjs` (`SITE_URL`).
- Domain is registered at Cloudflare Registrar; DNS records (grey-cloud CNAMEs)
  point at Netlify. Nameservers must stay with Cloudflare.
