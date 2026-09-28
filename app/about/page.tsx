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
        intro="Jen sees each appointment as a portrait and each client as a collaboration."
        image={media.about.hero}
        imageAlt="Jen Shedrock, artist behind Lavender Lash Love"
        label="Jen Shedrock"
      />
      <section className="about-story section-pad">
        <div className="about-statement">
          <p className="eyebrow">The artist behind the experience</p>
          <h2>“I want every client to feel seen before a single lash is placed.”</h2>
        </div>
        <div className="about-bio">
          <p>This section is intentionally written as a warm editorial narrative rather than a résumé. It will explain what draws Jen to the work and why personalization matters to her.</p>
        </div>
      </section>
      <section className="philosophy section-pad">
        <div className="philosophy-image">
          <Image src={media.about.philosophyDetail} alt="Close-up of Jen's lash artistry" fill sizes="(max-width: 700px) 100vw, 48vw" />
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
          <article><span>02</span><h3>Consistent care</h3></article>
          <article><span>03</span><h3>Refined detail</h3><p>Each appointment is approached with patience and close attention.</p></article>
        </div>
        <div className="about-image-pair">
          <div>
            <Image src={media.about.consultation} alt="Jen consulting with a client about lash styling" fill sizes="(max-width: 700px) 100vw, 48vw" />
          </div>
          <div>
            <Image src={media.about.studio} alt="Lavender Lash Love appointment studio" fill sizes="(max-width: 700px) 100vw, 48vw" />
          </div>
        </div>
      </section>
      <section className="about-personality section-pad" aria-label="Jen beyond the studio">
        <div>
          <Image
            src={media.about.personality}
            alt="Jen Shedrock smiling beyond the studio"
            fill
            sizes="(max-width: 700px) 100vw, 58vw"
          />
        </div>
      </section>
      <BookingCTA title="Book for the artistry. Return for the care." />
    </main>
  );
}
