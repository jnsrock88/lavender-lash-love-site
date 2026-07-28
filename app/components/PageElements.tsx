import Image from "next/image";
import { BOOKING_CHOOSER_URL } from "../content";

export function TextLink({
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

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  label = "Prototype imagery",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  label?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <div className="page-hero-lines" aria-hidden="true"><i /><i /><i /></div>
        <span className="page-hero-orb" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="gold-heart-rule" aria-hidden="true"><span>♥</span></div>
        <p>{intro}</p>
      </div>
      <div className="page-hero-media">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            sizes="(max-width: 700px) 100vw, 48vw"
          />
        ) : (
          <div className="neutral-placeholder" aria-label={label} />
        )}
        <span className="page-hero-star" aria-hidden="true">✦</span>
      </div>
    </section>
  );
}

export function BookingCTA({
  eyebrow = "Begin your appointment",
  title = "Designed for you, from the first look.",
  copy = "Explore appointment availability through the external booking service.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="inner-booking section-pad">
      <div className="inner-booking-arches" aria-hidden="true"><i /><i /><i /></div>
      <span className="inner-booking-orb" aria-hidden="true" />
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <a className="button button-primary" href={BOOKING_CHOOSER_URL}>
        Book with Jen
      </a>
    </section>
  );
}

export function PlaceholderImage({
  className = "",
  label,
  src,
  alt = "",
  showLabel = true,
}: {
  className?: string;
  label: string;
  src?: string;
  alt?: string;
  showLabel?: boolean;
}) {
  return (
    <div className={`neutral-placeholder ${className}`} role="img" aria-label={label}>
      {src ? <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 48vw" /> : null}
      {showLabel ? <span>{label}</span> : null}
    </div>
  );
}
