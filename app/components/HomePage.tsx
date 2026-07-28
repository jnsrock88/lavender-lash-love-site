"use client";

import Image from "next/image";
import { useState } from "react";
import { BOOKING_CHOOSER_URL, business, faqs, services } from "../content";
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

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = active === index;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setActive(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </h3>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
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

      <section className="benefit-strip" aria-label="Lavender Lash Love benefits">
        <article><span aria-hidden="true">01</span><div><h2>Custom lash artistry</h2><p>Tailored to your features and desired finish.</p></div></article>
        <article><span aria-hidden="true">02</span><div><h2>Lash &amp; brow services</h2><p>Polished options designed around your routine.</p></div></article>
        <article><span aria-hidden="true">♥</span><div><h2>Personal approach</h2><p>Thoughtful listening before every recommendation.</p></div></article>
        <article><span aria-hidden="true">✦</span><div><h2>Expert care</h2><p>Precision, comfort, and an unhurried appointment.</p></div></article>
      </section>

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
                <p>{service.description}</p>
                <p className="service-card-price">
                  {service.offerings[0].name} · {service.offerings[0].price}
                </p>
                <TextLink href="/services">View service</TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section-pad" id="gallery">
        <SectionIntro eyebrow="Selected work" title="Softness, shape, and light." align="right" />
        <div className="editorial-gallery">
          {media.gallery.slice(0, 5).map((item, index) => (
            <figure key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 90vw, 32vw" />
              <figcaption>{item.label}</figcaption>
              {index === 1 ? <span className="gallery-star" aria-hidden="true">✦</span> : null}
            </figure>
          ))}
        </div>
        <div className="section-action"><TextLink href="/gallery">View full gallery</TextLink></div>
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

      <section className="testimonials section-pad">
        <p className="eyebrow">Kind words · Placeholder testimonials</p>
        <blockquote>
          <span className="testimonial-stars" aria-label="Five stars">★★★★★</span>
          “Approved client testimonial will appear here. This space is designed
          for a thoughtful note about Jen’s care, artistry, and attention to detail.”
          <cite>— Client name placeholder</cite>
        </blockquote>
      </section>

      <section className="faq section-pad" id="faq">
        <SectionIntro eyebrow="A few things to know" title="Considered answers, before you arrive." />
        <FAQ />
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
