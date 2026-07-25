import { BookingCTA, PageHero } from "../components/PageElements";
import { LightboxGallery } from "../components/LightboxGallery";
import { media } from "../media";

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
        intro="A curated study of detail and expression. Current images are temporary selections from Lavender Lash Love’s existing portfolio."
        image={media.pageHeroes.gallery}
        imageAlt="Finished lash artistry from the Lavender Lash Love portfolio"
        label="Temporary current-site imagery"
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
