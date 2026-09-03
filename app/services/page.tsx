import Image from "next/image";
import { BOOKING_CHOOSER_URL, business } from "../content";
import { BookingCTA, PageHero } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "Services | Lavender Lash Love",
  description: "Explore personalized lash services by Jen Shedrock.",
};

function PriceList({ offerings }: { offerings: readonly { name: string; price: string; description?: string }[] }) {
  return (
    <dl className="services-price-list">
      {offerings.map((offering) => (
        <div className={offering.description ? "has-description" : undefined} key={offering.name}>
          <dt>{offering.name}</dt>
          <dd>{offering.price}</dd>
          {offering.description ? <p>{offering.description}</p> : null}
        </div>
      ))}
    </dl>
  );
}

function ServicePhoto({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="services-category-photo">
      <Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 86vw" />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function ServicesPage() {
  const [fullSet, classic, volume, additional, keratin] = business.serviceMenu;

  return (
    <main id="main" className="inner-page services-menu-page">
      <PageHero
        eyebrow="Services & pricing"
        title="Find the service that feels like you."
        intro="From soft and natural to full glam, every service is customized around your features, style, and desired result."
        image={media.pageHeroes.services}
        imageAlt="Close-up of finished lash artistry"
        label="Finished client portrait"
      />

      <nav className="services-category-nav" aria-label="Service categories">
        <a href="#new-client">New client set</a>
        <a href="#fills">Lash fills</a>
        <a href="#lifts-brows">Lifts & brows</a>
        <a href="#other-services">Other services</a>
      </nav>

      <section className="services-featured section-pad" id="new-client">
        <div className="services-featured-copy">
          <p className="eyebrow">Best for first time clients</p>
          <h2>New Client Custom Full Set</h2>
          <p>{fullSet.description}</p>
          <PriceList offerings={fullSet.offerings} />
          <p className="services-note">Consultation included · Duration shown during booking</p>
          <a className="button button-primary" href={BOOKING_CHOOSER_URL}>Book this service</a>
        </div>
        <ServicePhoto
          src={fullSet.image}
          alt="Example of a custom full lash set"
          label="Full set result"
        />
      </section>

      <section className="services-group services-group-tint section-pad" id="fills">
        <div className="services-group-heading">
          <p className="eyebrow">Maintenance</p>
          <h2>Lash Fills</h2>
          <p>Choose the category that matches your current set. Unsure what you have? Contact Jen before booking.</p>
        </div>
        <div className="services-fill-grid">
          {[classic, volume].map((service) => (
            <article className="services-fill-card" key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <PriceList offerings={service.offerings} />
              <ServicePhoto
                src={service.image}
                alt={`${service.name} example`}
                label={`${service.name} result`}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="services-group section-pad" id="lifts-brows">
        <div className="services-group-heading">
          <p className="eyebrow">Low maintenance beauty</p>
          <h2>Lifts, Brows, and Tints</h2>
          <p>{keratin.description}</p>
        </div>
        <PriceList offerings={keratin.offerings} />
        <ServicePhoto
          src={keratin.image}
          alt="Lash lift and brow service example"
          label="Lift, brow, and tint results"
        />
      </section>

      <section className="services-group services-group-tint section-pad" id="other-services">
        <div className="services-group-heading">
          <p className="eyebrow">Additional care</p>
          <h2>Other Services</h2>
          <p>{additional.description}</p>
        </div>
        <PriceList offerings={additional.offerings} />
        <ServicePhoto
          src={additional.image}
          alt="Additional lash service example"
          label="Additional service results"
        />
      </section>

      <BookingCTA title="Find the service that feels like you." />
    </main>
  );
}
