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
    ["/policies", /Booking Policies/],
  ];

  for (const [pathname, expected] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(await response.text(), expected, pathname);
  }
});

test("renders the approved appointment FAQ guidance and complete service guide", async () => {
  const response = await render("/faq");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Please arrive with clean lashes and no mascara/i);
  assert.match(html, /Please use the restroom before your service/i);
  assert.match(html, /personalized consultation before the service begins/i);
  assert.match(html, /how your natural lashes grow/i);
  assert.match(html, /what happens during the appointment/i);
  assert.match(html, /how to care for your lashes afterward/i);
  assert.match(html, /remove contact lenses before your lash service/i);
  assert.match(html, /A contact case can be provided if needed/i);
  assert.match(html, /Full Set/);
  assert.match(html, /3–5 Week Fill/);
  assert.match(html, /Fill From Another Lash Artist/);
  assert.match(html, /Korean Lash Lift &amp; Tint/);
  assert.doesNotMatch(html, /Approved preparation instructions will be added here/i);
  assert.doesNotMatch(html, /Approved contact-lens guidance will be added before launch/i);
});

test("renders approved appointment timing, experience, retention, and aftercare guidance", async () => {
  const response = await render("/faq");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /cozy heated lash bed, soft blankets, and calming music/i);
  assert.match(html, /How long will my appointment take\?/i);
  assert.match(html, /2–3 hours/i);
  assert.match(html, /Lash fill appointments typically take/i);
  assert.match(html, /How do I care for my lash extensions\?/i);
  assert.match(html, /Can I wear mascara with lash extensions\?/i);
  assert.match(html, /Can I swim with lash extensions\?/i);
  assert.match(html, /Can I get my lash extensions wet\?/i);
  assert.match(html, /What can affect lash retention\?/i);
  assert.match(html, /partnership between you and your lash artist/i);
  assert.doesNotMatch(html, /How long will I be there\?/i);
  assert.doesNotMatch(html, /Placeholder: Approved cleansing, brushing, and product guidance/i);
  assert.doesNotMatch(html, /Placeholder: Jen’s approved post-appointment timing/i);
});

test("renders approved fill maintenance and sensitivity guidance", async () => {
  const response = await render("/faq");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Most clients schedule their fills every/i);
  assert.match(html, /40% of your lash extensions remaining/i);
  assert.match(html, /Can Jen fill lashes applied by another artist\?/i);
  assert.match(html, /case-by-case basis/i);
  assert.match(html, /Sensitivities &amp; Safety/i);
  assert.match(html, /Are lash extensions safe\?/i);
  assert.match(html, /What if I have sensitive eyes or allergies\?/i);
  assert.match(html, /What is a reaction or contact dermatitis\?/i);
  assert.match(html, /a patch test cannot guarantee that a reaction will not occur/i);
  assert.match(html, /contact a healthcare professional for proper evaluation and treatment/i);
  assert.match(html, /Can I book with an eye condition or illness\?/i);
  assert.doesNotMatch(html, /Approved maintenance intervals and eligibility requirements/i);
  assert.doesNotMatch(html, /Approved sensitivity, consultation, and patch-test guidance/i);
  assert.doesNotMatch(html, /Approved safety guidance and referral language/i);
});

test("renders the approved booking policies without placeholders", async () => {
  const response = await render("/policies");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Booking Policies/i);
  assert.match(html, /\$50 deposit required to book/i);
  assert.match(html, /50% of the scheduled service/i);
  assert.match(html, /100% of the scheduled service/i);
  assert.match(html, /PLEASE PLAN AHEAD FOR PARKING AND RESTROOM USE/i);
  assert.match(html, /\$75 Special Appointment Fee/i);
  assert.match(html, /Trained service animals are welcome/i);
  assert.match(html, /All services are non-refundable/i);
  assert.match(html, /read, understood, and agreed to these policies/i);
  assert.doesNotMatch(html, /Placeholder policy/i);
  assert.doesNotMatch(html, /Prototype notice/i);
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
  assert.match(media, /keratin:\s*"\/images\/approved\/korean-lash-lift-tint\.jpg"/);
  assert.match(home, /BOOKING_CHOOSER_URL/);
  assert.match(home, /business\.locations/);
  assert.match(services, /business\.serviceMenu/);
  assert.doesNotMatch(home, /https:\/\/www\.vagaro\.com/);
  assert.doesNotMatch(services, /https:\/\/www\.vagaro\.com/);
});

test("does not render placeholder or prototype review copy on public pages", async () => {
  for (const pathname of ["/", "/about", "/faq", "/locations", "/policies", "/services"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    const html = await response.text();
    assert.doesNotMatch(html, /Placeholder:|Placeholder biography|Personal note placeholder|Credential placeholder|Advanced training placeholder|copyright year placeholder/i, pathname);
    assert.doesNotMatch(html, /This prototype organizes the questions clients ask most/i, pathname);
    assert.doesNotMatch(html, /Final answers will be reviewed and approved by Jen/i, pathname);
    assert.doesNotMatch(html, /copyright year placeholder/i, pathname);
  }
});
