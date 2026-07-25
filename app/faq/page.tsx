import { Accordion } from "../components/Accordion";
import { BookingCTA, PageHero } from "../components/PageElements";
import { faqGroups } from "../content";

export const metadata = {
  title: "FAQ | Lavender Lash Love",
  description: "Answers to common Lavender Lash Love appointment questions.",
};

export default function FAQPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Frequently asked questions"
        title="A little clarity, before you arrive."
        intro="This prototype organizes the questions clients ask most. Final answers will be reviewed and approved by Jen before launch."
        image="/images/lash-detail-01.jpeg"
        imageAlt="Prototype lash detail"
      />
      <section className="faq-groups section-pad">
        {faqGroups.map((group, index) => (
          <section className="faq-group" key={group.title}>
            <div className="faq-group-title">
              <span>0{index + 1}</span>
              <h2>{group.title}</h2>
            </div>
            <Accordion items={group.items} idPrefix={`faq-group-${index}`} />
          </section>
        ))}
      </section>
      <BookingCTA
        eyebrow="Still curious?"
        title="Begin with a conversation."
        copy="Use the contact page for questions not covered here, or continue to the external booking service."
      />
    </main>
  );
}
