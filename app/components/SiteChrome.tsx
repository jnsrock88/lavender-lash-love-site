"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BOOKING_CHOOSER_URL,
  INSTAGRAM_URL,
  business,
  navigation,
} from "../content";
import { media } from "../media";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const scrollPosition = window.scrollY;
    const body = document.body;

    body.classList.add("menu-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.width = "100%";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      body.classList.remove("menu-open");
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollPosition);
    };
  }, [open]);

  return (
    <>
      <div className="brand-announcement">
        <span aria-hidden="true">✦</span>
        <p>Enhance your natural beauty with luxurious lashes &amp; brows</p>
      </div>
      <header className="site-header">
        <div className="site-header-shell">
          <Link href="/" className="logo-link" aria-label="Lavender Lash Love home">
            <Image
              src={media.brand.logo}
              alt="Lavender Lash Love by Jen Shedrock"
              width={3782}
              height={1508}
              sizes="(max-width: 767px) 48vw, 216px"
              priority
              className="logo"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a className="header-book" href={BOOKING_CHOOSER_URL}>
            Book now
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`mobile-menu ${open ? "is-open" : ""}`}
          aria-hidden={!open}
        >
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
            <a href="/contact" onClick={() => setOpen(false)}>
              <span>07</span>Contact
            </a>
          </nav>
          <div className="mobile-menu-foot">
            <p>Studio City · Thousand Oaks</p>
            <a href={BOOKING_CHOOSER_URL}>Reserve your appointment</a>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src={media.brand.logo}
          alt="Lavender Lash Love by Jen Shedrock"
          width={3782}
          height={1508}
          sizes="(max-width: 767px) 68vw, 272px"
        />
        <p>Luxury lash artistry in Studio City and Thousand Oaks.</p>
      </div>
      <div className="footer-nav">
        <p>Explore</p>
        {navigation.slice(0, 5).map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a href="/policies">Policies</a>
      </div>
      <div className="footer-nav">
        <p>Connect</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Lavender Lash Love on Instagram (opens in a new tab)">Instagram</a>
        <a href={business.social.facebook} target="_blank" rel="noreferrer" aria-label="Lavender Lash Love on Facebook (opens in a new tab)">Facebook</a>
        <a href={business.contact.emailHref}>{business.contact.emailDisplay}</a>
        <a href={business.contact.phoneHref}>{business.contact.phoneDisplay}</a>
      </div>
      <div className="footer-book">
        <p>Ready when you are.</p>
        <a href={BOOKING_CHOOSER_URL}>Book an appointment</a>
      </div>
      <div className="footer-base">
        <span>© {business.foundedYear} Lavender Lash Love</span>
        <span><a href="/policies">Policies</a> · <a href="/contact">Contact</a></span>
      </div>
    </footer>
  );
}

export function MobileBooking() {
  return (
    <a className="mobile-booking" href={BOOKING_CHOOSER_URL}>
      <span>Book your appointment</span>
    </a>
  );
}
