# Lavender Lash Love

Lavender Lash Love Prototype v1 is the approved interactive foundation for a
luxury lash artistry marketing website by Jen Shedrock.

Current private preview:
[lavender-lash-love-preview.editoredgar.chatgpt.site](https://lavender-lash-love-preview.editoredgar.chatgpt.site)

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
`public/brand/lavender-lash-love-logo.jpeg` is a protected brand asset. It must
be used exactly as provided:

- no redrawing or AI reinterpretation
- no font, color, spacing, or artwork changes
- no cropping or altered proportions
- proportional resizing only

## Temporary assets

Current-site media and licensed stock photography are committed as temporary
prototype assets. They make the prototype realistic but are not the final
photography direction. Each image is referenced centrally in `app/media.ts` so
it can be replaced individually without redesigning layouts or components.
Source and replacement details are preserved in `ASSET_INVENTORY.md`.

## Remaining placeholders

- Final booking URL
- Approved phone, email, response-time, address, availability, and map details
- Final service names, descriptions, durations, pricing, and maintenance terms
- Approved biography, credentials, personal note, testimonials, FAQ answers,
  policies, and aftercare guidance
- Final brand campaign, service, gallery, Jen, experience, location, aftercare,
  contact, FAQ, and social-preview photography

## Production boundary

This repository contains only the independent prototype. The current Lavender
Lash Love production website and production domain remain untouched and are
not connected to this project.
