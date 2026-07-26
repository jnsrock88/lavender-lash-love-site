# Lavender Lash Love — Project Rules for Codex

These rules apply to owner-requested maintenance work in this repository.

## General change rules

- Interpret clear natural-language requests without requiring technical vocabulary.
- Make only the requested change.
- Preserve unrelated layouts, copy, assets, styles, routes, and components.
- Do not perform broad cleanup, refactoring, dependency updates, or redesign during a simple content update.
- Ask one concise clarifying question only when multiple reasonable interpretations exist.
- Never claim a deployment succeeded unless it has been verified.

## Protected brand rules

- Never redraw, recolor, crop, distort, rearrange, simplify, or reinterpret the approved logo.
- Never introduce lavender flowers, petals, glitter, eyelash clip art, or decorative clutter.
- Preserve the approved cream, aubergine, champagne, and restrained mid-century design language unless the owner explicitly requests a broader redesign.

## Content rules

- Business facts, booking URLs, social URLs, pricing, and location information must remain centralized in `app/content.ts`.
- Media must remain centralized in `app/media.ts`.
- Update `ASSET_INVENTORY.md` whenever an image is added, replaced, removed, or reassigned.
- Do not invent hours, prices, testimonials, certifications, policies, addresses, or credentials.

## Image-replacement rules

When the owner says something like “replace the first homepage picture”:

- Interpret it as the homepage hero unless the current page structure makes another meaning more likely.
- Use the attached image and preserve the current layout.
- Art-direct desktop and mobile crops when necessary.
- Do not stretch or distort the image.
- Preserve faces, eyes, hands, and lash details.
- Give the asset a clear filename and register it centrally.
- Remove the old file only if it is not used elsewhere.
- Update `ASSET_INVENTORY.md`.

## Safe Git workflow

For approved changes:

1. Inspect the relevant files first.
2. Make the smallest reasonable change.
3. Run lint.
4. Run the production build.
5. Test the affected route.
6. Verify related links or images.
7. Commit with a concise descriptive message.
8. Push to `main`.
9. Verify the Cloudflare Pages redeployment.
10. Report the commit hash and live URL.

Do not:

- force-push or rewrite Git history
- delete the repository
- switch to an unrelated branch
- touch PolyPilot, Apollo, or any other project
- connect or alter the production domain without explicit approval

## Owner-friendly response format

After a successful simple update, respond with:

```text
Done.

Changed:
[plain-language description]

Live preview:
https://lavender-lash-love-site-lub.pages.dev

Commit:
[short commit hash]
```

If Cloudflare is still deploying, say so clearly and do not claim the change is
live yet.
