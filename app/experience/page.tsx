import Image from "next/image";
import { BookingCTA, PageHero, PlaceholderImage } from "../components/PageElements";

export const metadata = {
  title: "The Experience | Lavender Lash Love",
  description: "Discover the personalized Lavender Lash Love appointment experience.",
};

const chapters = [
  {
    eyebrow: "It begins with listening",
    title: "A consultation that feels like a conversation.",
    copy: "Your appointment begins with space to share what you love, what you want to avoid, and how you want to feel. Placeholder copy will be refined with Jen’s approved consultation approach.",
    image: "/images/beauty-portrait-03.jpeg",
    alt: "Prototype beauty consultation imagery",
  },
  {
    eyebrow: "Designed for your features",
    title: "Custom mapping, drawn with intention.",
    copy: "Eye shape, natural lashes, symmetry, lifestyle, and desired finish all inform a map created for you—not selected from a standard menu.",
    image: "/images/lash-detail-01.jpeg",
    alt: "Prototype close-up imagery representing custom lash mapping",
  },
  {
    eyebrow: "The quiet part",
    title: "Application as a moment to exhale.",
    copy: "A calm, detail-oriented application is designed to feel unrushed and comfortable. Approved appointment timing and comfort guidance will be added before launch.",
    image: "/images/beauty-portrait-01.jpeg",
    alt: "Prototype portrait representing the calm application experience",
  },
  {
    eyebrow: "The reveal",
    title: "Still you. Just more considered.",
    copy: "The final look is checked from every angle and refined until it feels balanced, expressive, and entirely at home on your face.",
    image: "/images/beauty-portrait-02.jpeg",
    alt: "Prototype editorial portrait representing the finished reveal",
  },
] as const;

export default function ExperiencePage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="The Lavender Lash Love experience"
        title="An appointment designed to feel like care."
        intro="Personal, unhurried, and reassuring—from the first conversation to the moment you see your finished look."
        image="/images/beauty-portrait-01.jpeg"
        imageAlt="Prototype portrait representing the appointment experience"
      />
      <section className="experience-opening section-pad">
        <p className="eyebrow">A quieter kind of luxury</p>
        <p>Luxury lives in being understood: the thoughtful question, the careful adjustment, and the confidence that nothing has been rushed.</p>
      </section>
      <section className="experience-story">
        {chapters.map((chapter, index) => (
          <article className={index % 2 ? "experience-chapter reverse" : "experience-chapter"} key={chapter.title}>
            <div className="experience-media">
              <Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span className="placeholder-label">Prototype imagery</span>
            </div>
            <div className="experience-copy">
              <span className="experience-line" aria-hidden="true" />
              <p className="eyebrow">{chapter.eyebrow}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.copy}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="support-section section-pad">
        <PlaceholderImage label="Aftercare photography placeholder" />
        <div>
          <p className="eyebrow">Aftercare & ongoing support</p>
          <h2>Care that continues after you leave.</h2>
          <p>Jen’s approved aftercare education, maintenance recommendations, and support process will be added here. The goal is simple: clarity, confidence, and lashes that continue to feel beautiful.</p>
        </div>
      </section>
      <BookingCTA title="Your experience begins with a conversation." />
    </main>
  );
}
