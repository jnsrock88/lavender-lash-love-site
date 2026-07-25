import Image from "next/image";
import { BOOKING_URL } from "../content";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

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
      <Arrow />
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
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
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
        <span className="placeholder-label">{label}</span>
        <span className="page-hero-arch" aria-hidden="true" />
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
      <span className="inner-booking-arch" aria-hidden="true" />
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <a className="button button-primary" href={BOOKING_URL}>
        Book with Jen <Arrow />
      </a>
    </section>
  );
}

export function PlaceholderImage({
  className = "",
  label,
  src,
  alt = "",
}: {
  className?: string;
  label: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div className={`neutral-placeholder ${className}`} role="img" aria-label={label}>
      {src ? <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 48vw" /> : null}
      <span>{label}</span>
    </div>
  );
}
