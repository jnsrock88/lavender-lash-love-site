import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL } from "./content";
import { Arrow } from "./components/PageElements";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="not-found-arch" aria-hidden="true" />
      <Image
        src="/brand/lavender-lash-love-logo.jpeg"
        alt="Lavender Lash Love by Jen Shedrock"
        width={1125}
        height={546}
      />
      <p className="eyebrow">404 · Page not found</p>
      <h1>This page has slipped out of view.</h1>
      <p>The experience continues from any of the links below.</p>
      <div>
        <Link className="button button-primary" href="/">Return home <Arrow /></Link>
        <a className="text-link" href="/services">Explore services <Arrow /></a>
        <a className="text-link" href={BOOKING_URL}>Book now <Arrow /></a>
      </div>
    </main>
  );
}
