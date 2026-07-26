import {
  business,
} from "../content";
import { PageHero } from "../components/PageElements";
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
        image={media.about.studioDetail}
        imageAlt="Lavender Lash Love studio detail"
        label="Studio detail"
      />
      <section className="contact-page section-pad">
        <div className="contact-intro">
          <p className="eyebrow">Let’s connect</p>
          <h2>Questions, details, or something personal to share?</h2>
        </div>
        <div className="contact-methods">
          <a href={business.contact.phoneHref}><span>Phone</span><strong>{business.contact.phoneDisplay}</strong></a>
          <a href={business.contact.emailHref}><span>Email</span><strong>{business.contact.emailDisplay}</strong></a>
          <a href={business.social.instagram} target="_blank" rel="noreferrer" aria-label="Lavender Lash Love on Instagram (opens in a new tab)"><span>Instagram</span><strong>@lavenderlashlove</strong></a>
          <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Lavender Lash Love on Facebook (opens in a new tab)"><span>Facebook</span><strong>Lavender Lash Love</strong></a>
        </div>
      </section>
      <section className="contact-locations section-pad">
        <article>
          <span>01 · Los Angeles</span>
          <h2>Studio City</h2>
          <p>{business.locations.studioCity.salon}<br />{business.locations.studioCity.address}</p>
          <a className="text-link" href={business.booking.studioCity} target="_blank" rel="noreferrer">Book Studio City on Vagaro</a>
        </article>
        <article>
          <span>02 · Conejo Valley</span>
          <h2>Thousand Oaks</h2>
          <p>{business.locations.thousandOaks.salon}<br />{business.locations.thousandOaks.address}</p>
          <a className="text-link" href={business.booking.thousandOaks} target="_blank" rel="noreferrer">Book Thousand Oaks on Vagaro</a>
        </article>
      </section>
      <section className="inner-booking section-pad">
        <span className="inner-booking-arch" aria-hidden="true" />
        <p className="eyebrow">Ready to reserve?</p>
        <h2>Choose the location that works for you.</h2>
        <p>Each location continues to its own Vagaro booking page.</p>
        <div className="booking-options">
          <a className="button button-primary" href={business.booking.studioCity} target="_blank" rel="noreferrer">Book Studio City on Vagaro</a>
          <a className="button button-primary" href={business.booking.thousandOaks} target="_blank" rel="noreferrer">Book Thousand Oaks on Vagaro</a>
        </div>
      </section>
    </main>
  );
}
