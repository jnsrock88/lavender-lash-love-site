# Lavender Lash Love

Lavender Lash Love Prototype v1 is the approved interactive foundation for a
luxury lash artistry marketing website by Jen Shedrock.

Current public preview:
[lavender-lash-love-site-lub.pages.dev](https://lavender-lash-love-site-lub.pages.dev)

## Local development

Prerequisite: Node.js 22.13.0 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

Validation:

```bash
npm run lint
npm run build
```

## Approved sitemap

- Home
- Services
- Gallery
- The Experience
- About Jen
- Locations
- FAQ
- Contact
- Policies
- Branded 404

Book Now is a persistent action that points to a centrally configured external
booking URL. The prototype does not include a booking system, backend, CMS,
database, authentication, payments, or user accounts.

## Technology

- Next.js-compatible App Router architecture powered by vinext
- React and TypeScript
- Tailwind CSS with a project-specific responsive design system
- Cloudflare Workers-compatible build output
- Optimized responsive images
- Accessible navigation, accordions, gallery lightbox, keyboard controls,
  reduced-motion support, and persistent mobile booking access

## Protected logo

The supplied Lavender Lash Love logo in
`public/brand/logo-primary-transparent.png` is a protected brand asset. It must
be used exactly as provided:

- no redrawing or AI reinterpretation
- no font, color, spacing, or artwork changes
- no cropping or altered proportions
- proportional resizing only

## Temporary assets

Approved Jen and location photography is committed alongside remaining
current-site media and licensed stock placeholders. Each image is referenced
centrally in `app/media.ts` so it can be replaced individually without
redesigning layouts or components. Source and replacement details are
preserved in `ASSET_INVENTORY.md`.

## Remaining placeholders

- Approved biography, credentials, personal note, testimonials, FAQ answers,
  policies, and aftercare guidance
- Confirmed Thousand Oaks Google Maps directions URL
- Final client hero, service, gallery, mapping, FAQ, and social-preview photography

## Production boundary

This repository contains only the independent prototype. The current Lavender
Lash Love production website and production domain remain untouched and are
not connected to this project.

## Owner-friendly updates

- [Client instructions](CLIENT_INSTRUCTIONS.md)
- [Project rules for Codex](PROJECT_RULES.md)
- [Safe update examples](UPDATE_EXAMPLES.md)
- [Current project status](PROJECT_STATUS.md)
