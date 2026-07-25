"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const portfolio = [
  { src: "/images/lash-detail-01.jpeg", alt: "Prototype close-up lash detail", label: "Classic · Detail", className: "tall" },
  { src: "/images/beauty-portrait-01.jpeg", alt: "Prototype full-face beauty portrait", label: "Volume · Portrait", className: "wide" },
  { src: "/images/beauty-portrait-02.jpeg", alt: "Prototype editorial portrait", label: "Hybrid · Portrait", className: "portrait" },
  { src: "/images/lash-detail-01.jpeg", alt: "Prototype macro lash study", label: "Detail study", className: "wide crop-right" },
  { src: "/images/beauty-portrait-03.jpeg", alt: "Prototype horizontal beauty portrait", label: "Editorial portrait", className: "landscape" },
  { src: "/images/lash-detail-01.jpeg", alt: "Prototype lash detail from the side", label: "Soft volume · Detail", className: "portrait crop-low" },
  { src: "/images/beauty-portrait-02.jpeg", alt: "Prototype full-face portrait", label: "Portrait study", className: "tall" },
  { src: "/images/beauty-portrait-01.jpeg", alt: "Prototype beauty portrait", label: "Volume · Portrait", className: "wide crop-high" },
] as const;

export function LightboxGallery() {
  const [active, setActive] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);
  const previous = useCallback(
    () => setActive((value) => value === null ? null : (value - 1 + portfolio.length) % portfolio.length),
    [],
  );
  const next = useCallback(
    () => setActive((value) => value === null ? null : (value + 1) % portfolio.length),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.add("menu-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
    };
  }, [active, close, next, previous]);

  return (
    <>
      <div className="portfolio-grid">
        {portfolio.map((item, index) => (
          <figure className={item.className} key={`${item.label}-${index}`}>
            <button type="button" onClick={() => setActive(index)} aria-label={`Open ${item.label} image`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 92vw, 45vw" />
            </button>
            <figcaption>{item.label} · Prototype imagery</figcaption>
          </figure>
        ))}
      </div>
      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            const end = event.changedTouches[0]?.clientX;
            if (start === null || end === undefined) return;
            if (start - end > 45) next();
            if (end - start > 45) previous();
            touchStart.current = null;
          }}
        >
          <button ref={closeButton} className="lightbox-close" type="button" onClick={close} aria-label="Close image viewer">×</button>
          <button className="lightbox-prev" type="button" onClick={previous} aria-label="Previous image">‹</button>
          <figure>
            <Image
              src={portfolio[active].src}
              alt={portfolio[active].alt}
              fill
              sizes="95vw"
              priority
            />
            <figcaption>{portfolio[active].label} · Prototype imagery</figcaption>
          </figure>
          <button className="lightbox-next" type="button" onClick={next} aria-label="Next image">›</button>
        </div>
      )}
    </>
  );
}
