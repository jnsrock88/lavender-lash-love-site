import Image from "next/image";
import { BookingCTA, PageHero } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "About Jen | Lavender Lash Love",
  description: "Meet Jen Shedrock, the artist behind Lavender Lash Love.",
};

export default function AboutPage() {
  return (
    <main id="main" className="inner-page about-page">
      <PageHero
        eyebrow="Meet Jen Shedrock"
        title="Artistry, precision, and personal care."
        intro="Jen sees each appointment as a portrait and each client as a collaboration. This biography is placeholder copy awaiting Jen’s approved story."
        image={media.about.jenPortrait}
        imageAlt="Jen Shedrock, artist behind Lavender Lash Love"
        label="Temporary current-site portrait"
      />
      <section className="about-story section-pad">
        <div className="about-statement">
          <p className="eyebrow">The artist behind the experience</p>
          <h2>“I want every client to feel seen before a single lash is placed.”</h2>
          <span>— Personal note placeholder from Jen</span>
        </div>
        <div className="about-bio">
          <p className="about-dropcap">Placeholder biography: Jen’s approved personal story, path into lash artistry, and connection to her clients will be developed here.</p>
          <p>This section is intentionally written as a warm editorial narrative rather than a résumé. It will explain what draws Jen to the work and why personalization matters to her.</p>
        </div>
      </section>
      <section className="philosophy section-pad">
        <div className="philosophy-image">
          <Image src={media.about.philosophyDetail} alt="Close-up of Jen's lash artistry" fill sizes="(max-width: 700px) 100vw, 48vw" />
          <span className="placeholder-label">Temporary current-site imagery</span>
        </div>
        <div>
          <p className="eyebrow">Her philosophy</p>
          <h2>Enhance the expression. Never overwhelm the person.</h2>
          <p>Every recommendation begins with proportion, balance, and the client’s own definition of beauty. The result should feel polished, personal, and easy to inhabit.</p>
        </div>
      </section>
      <section className="trust-section section-pad">
        <p className="eyebrow">Why clients return</p>
        <h2>The feeling of being known.</h2>
        <div className="trust-grid">
          <article><span>01</span><h3>Thoughtful listening</h3><p>Preferences, comfort, and lifestyle shape every recommendation.</p></article>
          <article><span>02</span><h3>Consistent care</h3><p>Placeholder: Jen’s approved client-care approach will be described here.</p></article>
          <article><span>03</span><h3>Refined detail</h3><p>Each appointment is approached with patience and close attention.</p></article>
        </div>
      </section>
      <section className="credentials section-pad">
        <div>
          <p className="eyebrow">Experience & credentials</p>
          <h2>A foundation of continued craft.</h2>
        </div>
        <ul>
          <li><span>Credential placeholder</span><small>Issuing organization and year placeholder</small></li>
          <li><span>Advanced training placeholder</span><small>Program and date placeholder</small></li>
          <li><span>License or certification placeholder</span><small>Approved details required</small></li>
        </ul>
      </section>
      <section className="jen-note section-pad">
        <p className="eyebrow">A note from Jen</p>
        <blockquote>
          “Personal note placeholder: This space is reserved for Jen’s own words
          about the experience she hopes every client carries with them.”
        </blockquote>
        <span>With care, Jen</span>
      </section>
      <BookingCTA title="Book for the artistry. Return for the care." />
    </main>
  );
}
