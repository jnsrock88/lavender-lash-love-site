import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Lavender Lash Love homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Lavender Lash Love \| Luxury Lash Artistry by Jen Shedrock<\/title>/i);
  assert.match(html, /Enhance your natural beauty with luxurious lashes &amp; brows/i);
  assert.match(html, /Custom lashes/);
  assert.match(html, /designed for you\./);
  assert.match(html, /Book your appointment/i);
  assert.doesNotMatch(html, /Custom lash artistry/);
  assert.doesNotMatch(html, /Softness, shape, and light\./);
  assert.equal((html.match(/<figure/g) ?? []).length, 6);
  assert.ok(html.indexOf('id="locations"') < html.indexOf('id="services"'));
  assert.match(html, /Questions\? Everything you need to know is right here\./);
  assert.match(html, /href="\/faq"[^>]*>Explore FAQs/i);
  assert.doesNotMatch(html, /How do I know which lash style is right for me\?/);
  assert.match(html, /Korean Lash\/Brow Lift/);
  assert.match(html, /href="\/services#lifts-brows"/);
  assert.doesNotMatch(html, /<h3>Additional Services<\/h3>/);
  assert.match(html, />Testimonials<\/p>/);
  assert.match(html, /Angel<\/cite>/);
  assert.match(html, /Nicole<\/cite>/);
  assert.match(html, /Nyrie<\/cite>/);
  assert.equal((html.match(/<blockquote/g) ?? []).length, 3);
  assert.doesNotMatch(html, /Kind words|Placeholder testimonials|Client name placeholder/i);
  assert.match(html.replaceAll("<!-- -->", ""), /© 2012 Lavender Lash Love/);
  assert.doesNotMatch(html, /Copyright year placeholder/i);
  assert.match(html, /\/brand\/logo-primary-transparent-2026\.png/);
  assert.match(html, /<link[^>]+rel="stylesheet"[^>]+\/assets\/index-[^"]+\.css/i);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);
});

test("server-renders every approved primary route", async () => {
  const routes = [
    ["/services", /Find the service that feels like you\./],
    ["/gallery", /Portraits in softness, shape, and light\./],
    ["/about", /Artistry, precision, and personal care\./],
    ["/locations", /Your appointment, a little closer to home\./],
    ["/faq", /A little clarity, before you arrive\./],
    ["/contact", /A thoughtful answer is never far away\./],
    ["/policies", /Clear expectations create a more relaxed experience\./],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});

test("keeps business links and media centralized", async () => {
  const [content, media, home, services] = await Promise.all([
    readFile(new URL("../app/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/media.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/components/HomePage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/services/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(content, /https:\/\/www\.vagaro\.com\/lavenderlashlove/);
  assert.match(content, /https:\/\/www\.vagaro\.com\/us02\/lavlashluvgoddess/);
  assert.match(media, /logo:\s*"\/brand\/logo-primary-transparent-2026\.png"/);
  assert.match(home, /BOOKING_CHOOSER_URL/);
  assert.match(home, /business\.locations/);
  assert.match(services, /business\.serviceMenu/);
  assert.doesNotMatch(home, /https:\/\/www\.vagaro\.com/);
  assert.doesNotMatch(services, /https:\/\/www\.vagaro\.com/);
});
