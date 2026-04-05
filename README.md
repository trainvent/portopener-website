# PortOpener

PortOpener is a one-page concept site for a Trainvent startup idea.

The idea: make router port forwarding scriptable for server setup flows, instead of forcing people through router admin panels such as `fritz.box` and other vendor UIs.

Example command:

```bash
sudo order-portforward <router-username> <router-password> <port>/<protocol>
```

The site is built with vinext and deployed as a static export on GitHub Pages.

## Project Purpose

This is not a shipping product page for a released tool.

It presents PortOpener as an idea for:

- automating port forwarding during server installation
- simplifying homelab and self-hosted service setup
- reducing router UI friction for inbound networking tasks
- expanding later into broader local network automation features

## Local Development

Install dependencies:

```bash
npm ci
```

Start the vinext dev server:

```bash
npm run dev
```

Build the static Pages output:

```bash
npm run build
```

Preview the production build with vinext:

```bash
npm run start
```

Legacy Next.js scripts are still available if needed:

```bash
npm run dev:next
npm run build:next
npm run start:next
```

## GitHub Pages

GitHub Pages is configured in [.github/workflows/deploy-pages.yml](/home/leonmarq/Code/portopener-website/.github/workflows/deploy-pages.yml).

The workflow:

- installs dependencies with `npm ci`
- runs `npm run build`
- publishes `dist/client`

This works because vinext builds the site as a static export for this project.

## Important Config

- [package.json](/home/leonmarq/Code/portopener-website/package.json): vinext-first scripts
- [vite.config.ts](/home/leonmarq/Code/portopener-website/vite.config.ts): vinext Vite config
- [next.config.mjs](/home/leonmarq/Code/portopener-website/next.config.mjs): keeps `output: "export"` and applies `PAGES_BASE_PATH` at build time for GitHub Pages deployments

## Base Path Note

This repository is currently set up for custom-domain or other root-host deployments, so the GitHub Pages workflow leaves `PAGES_BASE_PATH` empty.

That means the exported site uses root asset paths such as:

```text
/assets/...
```

This is the correct mode for a custom domain like `https://example.com`, where asset URLs must stay root-based instead of using `/portopener-website/...`.

If you ever move back to the default GitHub Pages project URL, set `PAGES_BASE_PATH` in the workflow to:

```text
/portopener-website
```

`next.config.mjs` uses:

Example:

```js
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
};

export default nextConfig;
```

Do not hardcode the repository name in app code. Keep the deployment path in the workflow environment instead.

## Custom Domain Note

When GitHub Pages serves this site from a custom domain, add `public/CNAME` with the exact domain name as its only content so the deployment artifact includes it.

## Contact

- Trainvent: https://next.trainvent.com
- Email: hello@trainvent.com
