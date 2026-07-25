import Image from "next/image";
import { BOOKING_URL, services } from "../content";
import { BookingCTA, PageHero } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "Services | Lavender Lash Love",
  description: "Explore personalized lash services by Jen Shedrock.",
};

export default function ServicesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="The service collection"
        title="Every look begins with you."
        intro="A considered edit of lash services, each shaped around your features, desired finish, and day-to-day rhythm."
        image={media.pageHeroes.services}
        imageAlt="Close-up of finished lash artistry"
        label="Temporary current-site imagery"
      />

      <section className="inner-intro section-pad">
        <p className="eyebrow">Personalized, never prescribed</p>
        <h2>Subtle refinement or expressive volume—always designed with intention.</h2>
        <p>
          Final service descriptions, eligibility guidance, duration, and pricing
          will be confirmed by Jen before launch.
        </p>
      </section>

      <section className="service-editorial section-pad">
        {services.map((service, index) => (
          <article className={index % 2 ? "service-feature reverse" : "service-feature"} key={service.name}>
            <div className="service-feature-media">
              <Image src={service.image} alt={`Prototype imagery for ${service.name}`} fill sizes="(max-width: 700px) 100vw, 48vw" />
              <span className="placeholder-label">Temporary current-site imagery</span>
            </div>
            <div className="service-feature-copy">
              <span className="editorial-index">{service.number}</span>
              <p className="eyebrow">{index === 3 ? "Placeholder fourth service" : "Signature service"}</p>
              <h2>{service.name}{service.name === "Lash Lift" ? "" : " Lashes"}</h2>
              <p className="service-lead">{service.copy}</p>
              <dl className="service-facts">
                <div><dt>Duration</dt><dd>Placeholder duration</dd></div>
                <div><dt>Investment</dt><dd>Placeholder pricing</dd></div>
                <div><dt>Maintenance</dt><dd>Placeholder interval</dd></div>
              </dl>
              <a className="text-link" href={BOOKING_URL}>Book this service</a>
            </div>
          </article>
        ))}
      </section>

      <section className="care-guide section-pad">
        <div>
          <p className="eyebrow">Before you arrive</p>
          <h2>A little preparation, for a more effortless appointment.</h2>
        </div>
        <div className="care-columns">
          <article>
            <span>01</span>
            <h3>Arrive ready</h3>
            <p>Placeholder: Approved preparation instructions, including makeup and cleansing guidance, will appear here.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Share your vision</h3>
            <p>Placeholder: Bring inspiration if helpful, while leaving room for a recommendation designed around you.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Settle in</h3>
            <p>Placeholder: Arrival timing, contact-lens guidance, and comfort notes will be confirmed before launch.</p>
          </article>
        </div>
      </section>

      <section className="aftercare-preview section-pad">
        <div className="aftercare-copy">
          <p className="eyebrow">Maintenance & aftercare</p>
          <h2>Beautiful between appointments.</h2>
          <p>Approved cleansing, brushing, retention, and refill guidance will be added here. This prototype reserves space for Jen’s complete aftercare approach.</p>
          <a className="text-link" href="/faq">Explore common questions</a>
        </div>
        <div className="aftercare-geometry" aria-hidden="true"><span>✦</span></div>
      </section>

      <BookingCTA title="Find the service that feels like you." />
    </main>
  );
}
