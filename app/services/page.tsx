import Image from "next/image";
import { BOOKING_CHOOSER_URL, business } from "../content";
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
        label="Lash artistry"
      />

      <section className="inner-intro section-pad">
        <p className="eyebrow">Personalized, never prescribed</p>
        <h2>Subtle refinement or expressive volume—always designed with intention.</h2>
        <p>
          Explore the approved service menu below, then choose the location that
          works best for your appointment.
        </p>
      </section>

      <section className="service-editorial section-pad">
        {business.serviceMenu.map((service, index) => (
          <article className={index % 2 ? "service-feature reverse" : "service-feature"} key={service.name}>
            <div className="service-feature-media">
              <Image src={service.image} alt={`${service.name} service imagery`} fill sizes="(max-width: 700px) 100vw, 48vw" />
              <span className="service-media-orb" aria-hidden="true" />
              <span className="service-media-star" aria-hidden="true">✦</span>
            </div>
            <div className="service-feature-copy">
              <span className="editorial-index">{service.number}</span>
              <p className="eyebrow">Service menu</p>
              <h2>{service.name}</h2>
              <p className="service-lead">{service.description}</p>
              <div className="service-price-panel">
                <p>Service pricing</p>
                <dl className="service-facts">
                  {service.offerings.map((offering) => (
                    <div key={offering.name}>
                      <dt>{offering.name}</dt>
                      <dd>{offering.price}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <a className="button button-primary" href={BOOKING_CHOOSER_URL}>Book appointment</a>
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
            <p>Preparation guidance will be confirmed with your appointment details.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Share your vision</h3>
            <p>Bring inspiration if helpful, while leaving room for a recommendation designed around you.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Settle in</h3>
            <p>Arrival timing and comfort guidance will be confirmed with your appointment details.</p>
          </article>
        </div>
      </section>

      <section className="aftercare-preview section-pad">
        <div className="aftercare-copy">
          <p className="eyebrow">Maintenance & aftercare</p>
          <h2>Beautiful between appointments.</h2>
          <p>Cleansing, brushing, retention, and refill guidance will be shared as part of your appointment care.</p>
          <a className="text-link" href="/faq">Explore common questions</a>
        </div>
        <div className="aftercare-geometry" aria-hidden="true"><span>✦</span></div>
      </section>

      <BookingCTA title="Find the service that feels like you." />
    </main>
  );
}
