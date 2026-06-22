# HS-AM Rebrand

Moderne mobile-first rebuild voor `hs-am.de`, opgezet met Vite en geoptimaliseerde `.webp` projectbeelden uit de bestaande site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

De repo bevat een GitHub Pages workflow in `.github/workflows/deploy.yml`.
Na een push naar `main` kan GitHub Pages de `dist/` output automatisch publiceren.
