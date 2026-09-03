"use client";

import Image from "next/image";
import { BOOKING_CHOOSER_URL, business, services, testimonials } from "../content";
import { media } from "../media";

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className="text-link" href={href}>
      <span>{children}</span>
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`section-intro ${align === "right" ? "align-right" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function HomePage() {
  return (
    <main id="main" className="home-page">
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-arches" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="hero-orb" aria-hidden="true" />
          <span className="hero-starburst" aria-hidden="true">✦</span>
          <p className="eyebrow">Luxury lash extensions</p>
          <h1>Custom lashes <em>designed for you.</em></h1>
          <div className="gold-heart-rule" aria-hidden="true"><span>♥</span></div>
          <p className="hero-support">
            Customized lash artistry ranging from subtle refinement to full
            glamour, shaped around your features and the way you want to feel.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={BOOKING_CHOOSER_URL}>
              Book your appointment
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src={media.home.hero}
            alt="Jen applying eyelash extensions to a client"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 58vw"
          />
        </div>
      </section>

      <div className="home-color-divider" aria-hidden="true" />

      <section className="home-about section-pad" id="jen">
        <div className="home-about-heading">
          <p className="eyebrow">About</p>
          <h2>Meet Jen</h2>
          <div className="gold-heart-rule" aria-hidden="true"><span>♥</span></div>
        </div>
        <div className="home-about-image">
          <Image
            src={media.about.homePortrait}
            alt="Jen Shedrock, artist behind Lavender Lash Love"
            fill
            sizes="(max-width: 760px) 48vw, 30vw"
          />
          <span className="image-orb" aria-hidden="true" />
          <span className="image-star" aria-hidden="true">✦</span>
        </div>
        <div className="home-about-copy">
          <p>
            Jen approaches every set as a portrait—looking closely, listening
            carefully, and designing for the person in front of her.
          </p>
          <a className="button button-primary" href="/about">Learn more about Jen</a>
        </div>
        <aside className="home-appointment-card">
          <span className="card-star" aria-hidden="true">✦</span>
          <p className="eyebrow">Ready to glow?</p>
          <h3>Book Your Appointment</h3>
          <a className="button button-primary" href={BOOKING_CHOOSER_URL}>Book now</a>
        </aside>
      </section>

      <section className="locations section-pad" id="locations">
        <SectionIntro eyebrow="Two locations" title="Your appointment, a little closer to home." />
        <div className="location-line">
          {[
            { location: business.locations.studioCity, image: media.locations.studioCity },
            { location: business.locations.thousandOaks, image: media.locations.thousandOaks },
          ].map(({ location, image }, index) => (
            <article key={location.city}>
              <div className="location-visual">
                <Image src={image} alt={`Interior of ${location.salon} in ${location.city}`} fill sizes="(max-width: 760px) 90vw, 42vw" />
              </div>
              <span>0{index + 1} · {location.region}</span>
              <h3>{location.city}</h3>
              <p>{location.salon}<br />{location.address}</p>
              <a className="button button-primary" href={location.bookingUrl} target="_blank" rel="noreferrer">Book {location.city}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="services section-pad" id="services">
        <SectionIntro eyebrow="The service collection" title="Considered artistry, shaped around you." />
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <div className="service-image">
                <Image
                  src={service.image}
                  alt={`${service.name} service imagery`}
                  fill
                  sizes="(max-width: 760px) 100vw, 25vw"
                />
              </div>
              <div className="service-card-copy">
                <span className="service-number">0{index + 1}</span>
                <h3>{service.name}</h3>
                <p className="service-card-price">
                  {service.offerings[0].name} · {service.offerings[0].price}
                </p>
                <TextLink href={service.href}>View service</TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section-pad" id="gallery">
        <span className="gallery-backdrop-element" aria-hidden="true" />
        <div className="section-intro align-right">
          <p className="eyebrow">Selected work</p>
        </div>
        <div className="editorial-gallery">
          {media.gallery.slice(0, 6).map((item) => (
            <figure key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 90vw, 32vw" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="section-action"><TextLink href="/gallery">View full gallery</TextLink></div>
      </section>

      <section className="testimonials section-pad">
        <p className="eyebrow">Testimonials</p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              <span className="testimonial-stars" aria-label="Five stars">★★★★★</span>
              <p>“{testimonial.quote}”</p>
              <cite>— {testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="faq faq-callout section-pad" id="faq">
        <SectionIntro eyebrow="A few things to know" title="Questions? Everything you need to know is right here." />
        <a className="button button-primary" href="/faq">Explore FAQs</a>
      </section>

      <section className="final-cta section-pad">
        <div className="cta-arches" aria-hidden="true"><i /><i /><i /></div>
        <span className="cta-orb" aria-hidden="true" />
        <p className="eyebrow">Ready to glow?</p>
        <h2>Book Your Appointment</h2>
        <p>Choose your preferred location and continue to its external booking page.</p>
        <a className="button button-primary" href={BOOKING_CHOOSER_URL}>Book with Jen</a>
      </section>
    </main>
  );
}
