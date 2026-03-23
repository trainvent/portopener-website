# PortOpener

PortOpener is a one-page concept site for a Trainvent startup idea.

The idea: make router port forwarding scriptable for server setup flows, instead of forcing people through router admin panels such as `fritz.box` and other vendor UIs.

Example command:

```bash
sudo order-portforward <router-username> <router-password> <port>/<protocol>
```

The site is built with vinext and deployed as a static export on GitLab Pages.

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

## GitLab Pages

GitLab Pages is configured in [.gitlab-ci.yml](/home/leonmarq/Code/portopener-website/.gitlab-ci.yml).

The pipeline:

- installs dependencies with `npm ci`
- runs `npm run build`
- publishes `dist/client`

This works because vinext builds the site as a static export for this project.

## Important Config

- [package.json](/home/leonmarq/Code/portopener-website/package.json): vinext-first scripts
- [vite.config.ts](/home/leonmarq/Code/portopener-website/vite.config.ts): vinext Vite config
- [next.config.mjs](/home/leonmarq/Code/portopener-website/next.config.mjs): keeps `output: "export"` so the site stays static-export compatible

## Base Path Note

If this project is deployed on GitLab Pages under a project path instead of a custom domain, you may need to set `basePath` in [next.config.mjs](/home/leonmarq/Code/portopener-website/next.config.mjs).

Example:

```js
const nextConfig = {
  output: "export",
  basePath: "/portopener-website",
};

export default nextConfig;
```

If the site is served from its own domain or from a root-level Pages domain, this is usually not necessary.

## Contact

- Trainvent: https://next.trainvent.com
- Email: hello@trainvent.com
