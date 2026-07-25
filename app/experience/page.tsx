import Image from "next/image";
import { BookingCTA, PageHero, PlaceholderImage } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "The Experience | Lavender Lash Love",
  description: "Discover the personalized Lavender Lash Love appointment experience.",
};

const chapters = [
  {
    eyebrow: "It begins with listening",
    title: "A consultation that feels like a conversation.",
    copy: "Your appointment begins with space to share what you love, what you want to avoid, and how you want to feel. Placeholder copy will be refined with Jen’s approved consultation approach.",
    image: media.experience.consultation,
    alt: "Temporary portrait representing a personal consultation",
  },
  {
    eyebrow: "Designed for your features",
    title: "Custom mapping, drawn with intention.",
    copy: "Eye shape, natural lashes, symmetry, lifestyle, and desired finish all inform a map created for you—not selected from a standard menu.",
    image: media.experience.mapping,
    alt: "Close-up lash artistry representing custom lash mapping",
  },
  {
    eyebrow: "The quiet part",
    title: "Application as a moment to exhale.",
    copy: "A calm, detail-oriented application is designed to feel unrushed and comfortable. Approved appointment timing and comfort guidance will be added before launch.",
    image: media.experience.application,
    alt: "Temporary portfolio image representing the application experience",
  },
  {
    eyebrow: "The reveal",
    title: "Still you. Just more considered.",
    copy: "The final look is checked from every angle and refined until it feels balanced, expressive, and entirely at home on your face.",
    image: media.experience.reveal,
    alt: "Temporary portfolio image representing the finished reveal",
  },
] as const;

export default function ExperiencePage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="The Lavender Lash Love experience"
        title="An appointment designed to feel like care."
        intro="Personal, unhurried, and reassuring—from the first conversation to the moment you see your finished look."
        image={media.experience.hero}
        imageAlt="Temporary portfolio image representing the appointment experience"
        label="Temporary current-site imagery"
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
              <span className="placeholder-label">Temporary current-site imagery</span>
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
