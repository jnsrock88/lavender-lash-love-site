"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BOOKING_URL,
  EMAIL_PLACEHOLDER,
  INSTAGRAM_URL,
  PHONE_PLACEHOLDER,
  navigation,
} from "../content";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <Link href="/" className="logo-link" aria-label="Lavender Lash Love home">
        <Image
          src="/brand/lavender-lash-love-logo.jpeg"
          alt="Lavender Lash Love by Jen Shedrock"
          width={1125}
          height={546}
          priority
          className="logo"
        />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <a className="header-book" href={BOOKING_URL}>
        Book now <Arrow />
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
      </button>
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
          <a href={BOOKING_URL}>Reserve your appointment <Arrow /></a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src="/brand/lavender-lash-love-logo.jpeg"
          alt="Lavender Lash Love by Jen Shedrock"
          width={1125}
          height={546}
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
        <a href={INSTAGRAM_URL}>Instagram</a>
        <a href="/contact">{EMAIL_PLACEHOLDER}</a>
        <a href="/contact">{PHONE_PLACEHOLDER}</a>
      </div>
      <div className="footer-book">
        <p>Ready when you are.</p>
        <a href={BOOKING_URL}>Book an appointment <Arrow /></a>
      </div>
      <div className="footer-base">
        <span>© Lavender Lash Love · Copyright year placeholder</span>
        <span><a href="/policies">Policies</a> · <a href="/contact">Contact</a></span>
      </div>
    </footer>
  );
}

export function MobileBooking() {
  return (
    <a className="mobile-booking" href={BOOKING_URL}>
      <span>Reserve your appointment</span>
      <Arrow />
    </a>
  );
}
