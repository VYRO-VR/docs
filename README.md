# VYRO-VR Documentation

Source for [docs.vyrovr.com](https://docs.vyrovr.com), the official documentation site for VYRO-VR's SlimeVR-compatible IBIS trackers, straps, and accessories.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Content is written in Markdown under `src/content/docs/`.

## Running locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

The site will be available at `http://localhost:4321`.

## Building

```sh
npm run build
```

Output goes to `dist/`.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy.yml`. The custom domain `docs.vyrovr.com` is configured via `public/CNAME`.

To enable deployment on a fresh repo:

1. Settings → Pages → Source = "GitHub Actions"
2. Settings → Pages → Custom domain = `docs.vyrovr.com`
3. DNS: `CNAME` record `docs` → `<owner>.github.io`

## Contributing

Open a PR against `main`. Every page has an "Edit this page" link in the footer.

## TODO — items needing VYRO input

- Add photos of the comfort (R2) straps and the three receiver designs; `src/assets/photos/` has the basic-strap and harness-mount shots already
- Confirm the unverified LED rows marked in `src/content/docs/trackers/led-codes.md` against current shipping firmware
- Confirm the exact Stay Aligned menu path in the current SlimeVR Server release (`src/content/docs/firmware/stay-aligned.md`)
- Pick a final accent color in `src/styles/custom.css`
- The website's `/setup` guide still recommends a wall charger for faster charging; the docs now recommend a PC port because cheap wall chargers have damaged trackers. Update the website to match.

## License

Documentation content © VYRO-VR. Site framework MIT.
