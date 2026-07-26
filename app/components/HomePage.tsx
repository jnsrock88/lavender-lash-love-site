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
    <>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Luxury lash artistry · by Jen Shedrock</p>
            <h1>
              Luxury lashes,
              <em>designed around you.</em>
            </h1>
            <p className="hero-support">
              Customized lash artistry ranging from subtle refinement to full
              glamour, shaped around your features and the way you want to feel.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={BOOKING_CHOOSER_URL}>
                Book an appointment
              </a>
              <TextLink href="#services">Explore services</TextLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="arch arch-large" aria-hidden="true" />
            <div className="starburst" aria-hidden="true">✦</div>
            <div className="hero-image">
              <Image
                src={media.prototype.portraitPrimary}
                alt="Editorial beauty portrait"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 48vw"
              />
            </div>
            <p className="hero-caption">Personal. Considered. Entirely yours.</p>
          </div>
        </section>

        <section className="positioning section-pad" id="experience">
          <div className="positioning-mark" aria-hidden="true">✦</div>
          <p className="eyebrow">A more personal kind of luxury</p>
          <p className="positioning-statement">
            Beautiful lashes begin with being <em>seen.</em> Every appointment
            is a quiet collaboration—thoughtfully mapped, gently applied, and
            made to feel like you.
          </p>
          <div className="positioning-note">
            <span>01</span>
            <p>
              From consultation to aftercare, the experience is designed to feel
              unhurried, reassuring, and distinctly personal.
            </p>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <SectionIntro
            eyebrow="Our services"
            title="An expression of you, considered in every detail."
          />
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={`${service.name} service imagery`}
                    fill
                    sizes="(max-width: 760px) 38vw, 20vw"
                  />
                </div>
                <div className="service-card-copy">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <p className="service-card-price">
                    {service.offerings[0].name} · {service.offerings[0].price}
                  </p>
                  <a href="/services" aria-label={`Discover ${service.name}`}>
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-action">
            <TextLink href="/services">View the service collection</TextLink>
          </div>
        </section>

        <section className="gallery section-pad" id="gallery">
          <SectionIntro
            eyebrow="Gallery preview"
            title="A study in softness, shape, and light."
            align="right"
          />
          <div className="editorial-gallery">
            <figure>
              <Image
                src={media.gallery[0].src}
                alt="Close-up lash detail"
                fill
                sizes="(max-width: 760px) 72vw, 35vw"
              />
              <figcaption>Classic · Detail study</figcaption>
            </figure>
            <figure>
              <Image
                src={media.gallery[1].src}
                alt="Full-face beauty portrait"
                fill
                sizes="(max-width: 760px) 76vw, 27vw"
              />
              <figcaption>Portrait · Soft volume</figcaption>
            </figure>
            <figure>
              <Image
                src={media.gallery[2].src}
                alt="Close-up lash detail"
                fill
                sizes="(max-width: 760px) 60vw, 20vw"
              />
              <figcaption>Hybrid · Detail study</figcaption>
            </figure>
            <figure>
              <Image
                src={media.gallery[4].src}
                alt="Editorial beauty portrait"
                fill
                sizes="(max-width: 760px) 60vw, 20vw"
              />
              <figcaption>Volume · Portrait</figcaption>
            </figure>
            <figure>
              <Image
                src={media.gallery[5].src}
                alt="Close-up lash detail"
                fill
                sizes="(max-width: 760px) 60vw, 20vw"
              />
              <figcaption>Lift · Detail study</figcaption>
            </figure>
          </div>
          <div className="gallery-action">
            <TextLink href="/gallery">Enter the full portfolio</TextLink>
          </div>
        </section>

        <section className="jen section-pad" id="jen">
          <div className="jen-image">
            <Image
              src={media.about.homePortrait}
              alt="Jen Shedrock, artist behind Lavender Lash Love"
              fill
              sizes="(max-width: 760px) 86vw, 42vw"
            />
          </div>
          <div className="jen-copy">
            <p className="eyebrow">Meet the artist</p>
            <h2>Care you can feel. Artistry you can see.</h2>
            <p className="jen-lead">
              Jen approaches every set as a portrait—looking closely, listening
              carefully, and designing for the person in front of her.
            </p>
            <TextLink href="/about">Learn more about Jen</TextLink>
          </div>
        </section>

        <section className="locations section-pad" id="locations">
          <SectionIntro eyebrow="Two locations" title="Your appointment, a little closer to home." />
          <div className="location-line">
            <article>
              <span>01 · Los Angeles</span>
              <div className="location-visual" aria-label="D. Miller Hair Lounge in Studio City">
                <Image src={media.locations.studioCity} alt="Interior of D. Miller Hair Lounge in Studio City" fill sizes="(max-width: 640px) 92vw, 40vw" />
              </div>
              <h3>Studio City</h3>
              <p>{business.locations.studioCity.salon} · {business.locations.studioCity.address}</p>
              <TextLink href="/locations">Location details</TextLink>
              <a className="text-link" href={business.booking.studioCity} target="_blank" rel="noreferrer">
                Book Studio City on Vagaro
              </a>
            </article>
            <div className="location-divider" aria-hidden="true"><span>♥</span></div>
            <article>
              <span>02 · Ventura County</span>
              <div className="location-visual location-visual-alt" aria-label="Goddess Beauty Salon in Thousand Oaks">
                <Image src={media.locations.thousandOaks} alt="Interior of Goddess Beauty Salon in Thousand Oaks" fill sizes="(max-width: 640px) 92vw, 40vw" />
              </div>
              <h3>Thousand Oaks</h3>
              <p>{business.locations.thousandOaks.salon} · {business.locations.thousandOaks.address}</p>
              <TextLink href="/locations">Location details</TextLink>
              <a className="text-link" href={business.booking.thousandOaks} target="_blank" rel="noreferrer">
                Book Thousand Oaks on Vagaro
              </a>
            </article>
          </div>
        </section>

        <section className="testimonials section-pad">
          <p className="eyebrow">Kind words · Placeholder testimonials</p>
          <div className="testimonial-layout">
            <button type="button" aria-label="Previous testimonial">Previous</button>
            <blockquote>
              <span className="testimonial-stars" aria-label="Five stars">★★★★★</span>
              “Approved client testimonial will appear here. This space is
              designed for a thoughtful note about Jen’s care, artistry, and
              attention to detail.”
              <cite>— Client name placeholder</cite>
            </blockquote>
            <button type="button" aria-label="Next testimonial">Next</button>
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <SectionIntro eyebrow="A few things to know" title="Considered answers, before you arrive." />
          <FAQ />
        </section>

        <section className="final-cta section-pad">
          <div className="final-arch" aria-hidden="true" />
          <p className="eyebrow">Begin your appointment</p>
          <h2>Ready to love your lashes?</h2>
          <p>
            Choose your preferred location and explore the available appointment
            times through our external booking service.
          </p>
          <a className="button button-light" href={BOOKING_CHOOSER_URL}>
            Book with Jen
          </a>
        </section>
      </main>
    </>
  );
}
