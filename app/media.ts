const temporaryCurrentSite = "/images/temporary-current-site";

export const media = {
  brand: {
    logo: "/brand/logo-primary-transparent.png",
  },
  home: {
    hero: "/images/approved/home-hero-lash-application.jpg",
  },
  prototype: {
    portraitPrimary: "/images/beauty-portrait-01.jpeg",
    portraitSecondary: "/images/beauty-portrait-02.jpeg",
    portraitWide: "/images/beauty-portrait-03.jpeg",
    lashDetail: "/images/lash-detail-01.jpeg",
  },
  services: {
    classic: `${temporaryCurrentSite}/service-classic.jpg`,
    hybrid: `${temporaryCurrentSite}/service-hybrid.png`,
    volume: `${temporaryCurrentSite}/service-volume.jpg`,
    fourthPlaceholder: "/images/beauty-portrait-02.jpeg",
    keratin: `${temporaryCurrentSite}/gallery-04.jpg`,
  },
  about: {
    homePortrait: "/images/approved/jen-about-hero.jpeg",
    hero: "/images/approved/jen-about-hero.jpeg",
    working: "/images/approved/jen-working.jpg",
    consultation: "/images/approved/jen-consultation.jpg",
    studio: "/images/approved/jen-studio.jpg",
    studioDetail: "/images/approved/studio-detail.jpg",
    personality: "/images/approved/jen-personality.jpg",
    jenPortrait: "/images/approved/jen-about-hero.jpeg",
    philosophyDetail: "/images/approved/jen-working.jpg",
  },
  locations: {
    studioCity: "/images/approved/home-location-studio-city.jpg",
    thousandOaks: "/images/approved/home-location-thousand-oaks.jpg",
  },
  experience: {
    hero: "/images/approved/jen-studio.jpg",
    consultation: "/images/approved/jen-consultation.jpg",
    mapping: `${temporaryCurrentSite}/gallery-03.png`,
    application: "/images/approved/jen-working.jpg",
    reveal: "/images/approved/studio-detail.jpg",
  },
  gallery: [
    {
      src: `${temporaryCurrentSite}/gallery-01.png`,
      alt: "Close-up view of a finished lash set",
      label: "Lash detail",
      className: "tall",
    },
    {
      src: "/images/beauty-portrait-01.jpeg",
      alt: "Temporary editorial beauty portrait",
      label: "Editorial portrait",
      className: "wide",
    },
    {
      src: `${temporaryCurrentSite}/gallery-03.png`,
      alt: "Detailed view of custom lash styling",
      label: "Custom detail",
      className: "portrait",
    },
    {
      src: `${temporaryCurrentSite}/gallery-04.jpg`,
      alt: "Close-up lash artistry study",
      label: "Detail study",
      className: "wide crop-right",
    },
    {
      src: `${temporaryCurrentSite}/gallery-05.png`,
      alt: "Finished lash look from the Lavender Lash Love portfolio",
      label: "Selected work",
      className: "landscape",
    },
    {
      src: `${temporaryCurrentSite}/gallery-06.jpg`,
      alt: "Close-up view of a soft lash set",
      label: "Soft detail",
      className: "portrait crop-low",
    },
    {
      src: "/images/beauty-portrait-02.jpeg",
      alt: "Temporary full-face beauty portrait",
      label: "Portrait study",
      className: "tall",
    },
    {
      src: `${temporaryCurrentSite}/gallery-08.jpg`,
      alt: "Detailed finished lash styling",
      label: "Selected work",
      className: "wide crop-high",
    },
  ],
  pageHeroes: {
    services: `${temporaryCurrentSite}/gallery-04.jpg`,
    gallery: `${temporaryCurrentSite}/gallery-02.png`,
    contact: "/images/beauty-portrait-03.jpeg",
    faq: `${temporaryCurrentSite}/gallery-03.png`,
  },
} as const;
