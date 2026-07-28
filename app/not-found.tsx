import Image from "next/image";
import Link from "next/link";
import { BOOKING_CHOOSER_URL } from "./content";
import { media } from "./media";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="not-found-arch" aria-hidden="true" />
      <Image
        src={media.brand.logo}
        alt="Lavender Lash Love by Jen Shedrock"
        width={3644}
        height={1521}
        sizes="(max-width: 767px) 72vw, 420px"
      />
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page has slipped out of view.</h1>
      <p>The experience continues from any of the links below.</p>
      <div>
        <Link className="button button-primary" href="/">Return home</Link>
        <a className="text-link" href="/services">Explore services</a>
        <a className="text-link" href={BOOKING_CHOOSER_URL}>Book now</a>
      </div>
    </main>
  );
}
