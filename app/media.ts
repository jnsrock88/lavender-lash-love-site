const temporaryCurrentSite = "/images/temporary-current-site";

export const media = {
  brand: {
    logo: "/brand/lavender-lash-love-logo.jpeg",
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
  },
  about: {
    jenPortrait: `${temporaryCurrentSite}/jen-portrait.png`,
    philosophyDetail: `${temporaryCurrentSite}/gallery-04.jpg`,
  },
  experience: {
    hero: `${temporaryCurrentSite}/gallery-06.jpg`,
    consultation: `${temporaryCurrentSite}/gallery-08.jpg`,
    mapping: `${temporaryCurrentSite}/gallery-03.png`,
    application: `${temporaryCurrentSite}/gallery-01.png`,
    reveal: `${temporaryCurrentSite}/gallery-07.jpg`,
  },
  gallery: [
    {
      src: `${temporaryCurrentSite}/gallery-01.png`,
      alt: "Close-up view of a finished lash set",
      label: "Lash detail",
      className: "tall",
    },
    {
      src: `${temporaryCurrentSite}/gallery-02.png`,
      alt: "Finished lash artistry portrait",
      label: "Portrait study",
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
      src: `${temporaryCurrentSite}/gallery-07.jpg`,
      alt: "Finished lash portrait from the Lavender Lash Love portfolio",
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
