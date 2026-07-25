import {
  BOOKING_URL,
  EMAIL_PLACEHOLDER,
  INSTAGRAM_URL,
  PHONE_PLACEHOLDER,
  RESPONSE_TIME_PLACEHOLDER,
} from "../content";
import { Arrow, PageHero } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "Contact | Lavender Lash Love",
  description: "Contact Lavender Lash Love or book an appointment.",
};

export default function ContactPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Contact"
        title="A thoughtful answer is never far away."
        intro="For appointment availability, use the external booking service. For all other questions, choose the contact method that feels easiest."
        image={media.pageHeroes.contact}
        imageAlt="Prototype editorial beauty imagery"
      />
      <section className="contact-page section-pad">
        <div className="contact-intro">
          <p className="eyebrow">Let’s connect</p>
          <h2>Questions, details, or something personal to share?</h2>
          <p>{RESPONSE_TIME_PLACEHOLDER}. Approved communication preferences will be added before launch.</p>
        </div>
        <div className="contact-methods">
          <div className="contact-row"><span>Phone</span><strong>{PHONE_PLACEHOLDER}</strong><small>Pending</small></div>
          <div className="contact-row"><span>Email</span><strong>{EMAIL_PLACEHOLDER}</strong><small>Pending</small></div>
          <a href={INSTAGRAM_URL}><span>Instagram</span><strong>@lavenderlashlove</strong><Arrow /></a>
          <a href={BOOKING_URL}><span>Appointments</span><strong>External booking service</strong><Arrow /></a>
        </div>
      </section>
      <section className="contact-locations section-pad">
        <article>
          <span>01 · Los Angeles</span>
          <h2>Studio City</h2>
          <p>Address and location details placeholder.</p>
          <a className="text-link" href="/locations">Location details <Arrow /></a>
        </article>
        <article>
          <span>02 · Conejo Valley</span>
          <h2>Thousand Oaks</h2>
          <p>Address and location details placeholder.</p>
          <a className="text-link" href="/locations">Location details <Arrow /></a>
        </article>
      </section>
      <section className="inner-booking section-pad">
        <span className="inner-booking-arch" aria-hidden="true" />
        <p className="eyebrow">Ready to reserve?</p>
        <h2>Appointment availability lives in one simple place.</h2>
        <p>No form or custom booking system is used on this prototype.</p>
        <a className="button button-primary" href={BOOKING_URL}>Book now <Arrow /></a>
      </section>
    </main>
  );
}
