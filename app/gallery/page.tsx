import { BookingCTA, PageHero } from "../components/PageElements";
import { LightboxGallery } from "../components/LightboxGallery";

export const metadata = {
  title: "Gallery | Lavender Lash Love",
  description: "A curated portfolio of Lavender Lash Love artistry.",
};

export default function GalleryPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Selected work"
        title="Portraits in softness, shape, and light."
        intro="A curated study of detail and expression. Every image currently shown is prototype imagery awaiting Jen’s approved portfolio."
        image="/images/beauty-portrait-02.jpeg"
        imageAlt="Prototype editorial beauty portrait"
      />
      <section className="portfolio-intro section-pad">
        <p className="eyebrow">The portfolio</p>
        <h2>Look closely. The smallest details change the whole expression.</h2>
        <p>Select any image to open the accessible viewer. Use arrow keys, on-screen controls, or swipe on touch devices.</p>
      </section>
      <section className="portfolio section-pad" aria-label="Lash artistry portfolio">
        <LightboxGallery />
      </section>
      <BookingCTA title="Let’s create your portrait." />
    </main>
  );
}
