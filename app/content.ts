import { media } from "./media";

export const business = {
  booking: {
    chooser: "/locations#booking-options",
    studioCity: "https://www.vagaro.com/lavenderlashlove",
    thousandOaks: "https://www.vagaro.com/us02/lavlashluvgoddess",
  },
  contact: {
    phoneDisplay: "661-733-5266",
    phoneHref: "tel:+16617335266",
    emailDisplay: "jen@lavlashluv.com",
    emailHref: "mailto:jen@lavlashluv.com",
  },
  social: {
    instagram: "https://www.instagram.com/lavenderlashlove",
    facebook: "https://www.facebook.com/lavenderlashlove",
  },
  locations: {
    studioCity: {
      city: "Studio City",
      region: "Los Angeles",
      salon: "D. Miller Hair Lounge",
      addressLines: ["4054 Laurel Canyon Blvd", "Studio City, CA 91604"],
      address: "4054 Laurel Canyon Blvd, Studio City, CA 91604",
      schedule: [
        "Tuesday: 11:00 AM–8:00 PM",
        "Wednesday: 11:00 AM–8:00 PM",
        "Thursday: Closed",
        "Friday: 10:00 AM–8:00 PM",
      ],
      bookingUrl: "https://www.vagaro.com/lavenderlashlove",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=4054%20Laurel%20Canyon%20Blvd%2C%20Studio%20City%2C%20CA%2091604%2C%20USA",
      mapsStatus: "approved",
    },
    thousandOaks: {
      city: "Thousand Oaks",
      region: "Conejo Valley",
      salon: "Goddess Beauty Salon",
      addressLines: ["1421 E Thousand Oaks Blvd", "Thousand Oaks, CA 91362"],
      address: "1421 E Thousand Oaks Blvd, Thousand Oaks, CA 91362",
      schedule: [
        "Saturday: 10:00 AM–6:00 PM",
        "Sunday: Closed",
        "Monday: Closed",
      ],
      bookingUrl: "https://www.vagaro.com/us02/lavlashluvgoddess",
      mapsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=1421%20E%20Thousand%20Oaks%20Blvd%2C%20Thousand%20Oaks%2C%20CA%2091362%2C%20USA",
      mapsStatus: "generated-awaiting-confirmation",
    },
  },
  serviceMenu: [
    {
      number: "01",
      name: "Lash Full Set",
      description:
        "A full set of eyelash extensions is completely customized and created just for you. Extensions are carefully applied to your bare natural lashes, with every detail tailored to your eye shape, natural lash health, lifestyle, and desired look. Your appointment includes a 30-minute consultation so we can design a set you’ll love. The full service typically takes 2–3 hours, depending on your natural lash density and chosen style.",
      image: media.services.hybrid,
      offerings: [{ name: "Full Set", price: "$350" }],
    },
    {
      number: "02",
      name: "Classic Lashes",
      description: "A refined, natural-looking enhancement designed around your eye shape.",
      image: media.services.classic,
      offerings: [
        {
          name: "3–5 Week Fill",
          price: "$120",
          description:
            "Classic Eyelash Extension Fill 3–5 Weeks involves the application of an individual single extension to each natural lash, enhancing both volume and length for a striking effect. As your natural lashes grow, the extensions are carefully replaced, ensuring a full and vibrant appearance that lasts, creating either a subtle or dramatic effect. The duration of this appointment may range from 1 to 2 hours, depending on the client’s natural lash density and the extent of lash shedding.",
        },
        {
          name: "2 Week Fill",
          price: "$95",
          description:
            "The Classic Eyelash Extension 2 Week Fill enhances your natural lashes by applying an individual single extension that increases both volume and length for a dramatic look. This service focuses on adding extensions to existing lashes while minimizing the removal of any extensions, ensuring a seamless and full appearance. The duration of this appointment may range from 1 to 1 hour and 15 minutes, depending on the client’s natural lash density and the extent of lash shedding.",
        },
        {
          name: "Touch-Up",
          price: "$85",
          description:
            "The Classic Extension Touch-Up is designed to refresh and enhance your lash look, perfect for special occasions or when you experience more shedding than usual. This service ensures your lashes remain full and beautifully balanced. The duration of this appointment may range from 35 to 45 minutes, depending on the client’s natural lash density and the extent of lash shedding.",
        },
      ],
    },
    {
      number: "03",
      name: "Volume Lashes",
      description: "Airy, customized fullness with an elegant finish—never one-size-fits-all.",
      image: media.services.volume,
      offerings: [
        {
          name: "3–5 Week Fill",
          price: "$140",
          description:
            "Volume Eyelash Extension Fill 3–5 Weeks involves the application of small fans to each natural lash, enhancing both volume and length for a striking effect. As your natural lashes grow, the extensions are carefully replaced, ensuring a full and vibrant appearance that lasts, creating either a subtle or dramatic effect. The duration of this appointment may range from 1 to 2 hours, depending on the client’s natural lash density and the extent of lash shedding.",
        },
        {
          name: "2 Week Fill",
          price: "$115",
          description:
            "The Volume Eyelash Extension 2 Week Fill enhances your natural lashes by applying fans that increase both volume and length for a dramatic look. This service focuses on adding extensions to existing lashes while minimizing the removal of any extensions, ensuring a seamless and full appearance. The duration of this appointment may range from 1 to 1.5 hours, depending on the client’s natural lash density and the extent of lash shedding.",
        },
        {
          name: "Touch-Up",
          price: "$105",
          description:
            "Volume Eyelash Extension Touch-Up is designed to refresh and enhance your lash look, perfect for special occasions or when you experience more shedding than usual. This service ensures your lashes remain full and beautifully balanced. The duration of this appointment may range from 35 to 45 minutes, depending on the client’s natural lash density and the extent of lash shedding.",
        },
      ],
    },
    {
      number: "04",
      name: "Additional Services",
      description: "Focused support for maintenance, transitions, and safe removal.",
      image: media.services.fourthPlaceholder,
      offerings: [
        {
          name: "Fill From Another Lash Artist",
          price: "$200",
          description:
            "An outside fill is a fill appointment for eyelash extensions originally applied by another lash artist. Because every artist uses different products and techniques, outside fills can require additional time and care to assess, correct, or safely remove the existing extensions. For the best results, we kindly recommend booking a full set. Starting fresh allows us to create a beautiful, customized look just for you while protecting the health of your natural lashes. Although we’re happy to evaluate outside work, we cannot guarantee the results when filling over extensions applied elsewhere.",
        },
        {
          name: "Lash Removal",
          price: "$50",
          description:
            "Lash extension removal involves the careful application of a gel remover or the meticulous use of tweezers for manual extraction. This process ensures the health and integrity of your natural lashes while providing a gentle and effective solution for safely removing extensions.",
        },
      ],
    },
    {
      number: "05",
      name: "Keratin Boosted Lash & Brow",
      description: "Lift and tint options for a polished, low-maintenance finish.",
      image: media.services.keratin,
      offerings: [
        {
          name: "Korean Lash Lift & Tint",
          price: "$175",
          description:
            "A Korean lash lift and tint is a gentle, precision-focused treatment designed to lift the lashes from the root for a clean, elongated, and beautifully defined look. Unlike a traditional lash lift, the Korean technique creates a softer, more customized shape while helping the lashes appear longer and more open. A tint is included to darken the natural lashes for added definition and a mascara-like finish. The result is a polished, low-maintenance look that typically lasts 6–8 weeks.",
          warning: "BE AWARE YOU CANNOT GET YOUR LASHES WET FOR 24 HOURS POST SERVICE",
        },
        {
          name: "Korean Lash/Brow Lift",
          price: "$145",
          description:
            "A Korean lash/brow lift is a gentle, precision-focused treatment designed to lift the lashes from the root for a clean, elongated, and beautifully defined look. Unlike a traditional lash lift, the Korean technique creates a softer, more customized shape while helping the lashes appear longer and more open.",
          warning: "BE AWARE YOU CANNOT GET YOUR LASHES WET FOR 24 HOURS POST SERVICE",
        },
        {
          name: "Lash/Brow Tint",
          price: "$30",
          description:
            "Lash/Brow Tint is a semi-permanent service that enhances the color of your lashes, offering a natural yet polished appearance. Choose from a range of shades, including dark brown, black, and deep black, to achieve your desired look.",
        },
      ],
    },
  ],
} as const;

export const BOOKING_CHOOSER_URL = business.booking.chooser;
export const INSTAGRAM_URL = business.social.instagram;

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "The Experience", href: "/experience" },
  { label: "About Jen", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
] as const;

export const services = business.serviceMenu.slice(0, 4);

export const faqs = [
  {
    question: "How do I know which lash style is right for me?",
    answer:
      "Placeholder: Your appointment can begin with a personalized conversation about your features, preferences, and day-to-day routine before a look is selected.",
  },
  {
    question: "What should I expect at my first appointment?",
    answer:
      "Placeholder: Arrive with clean lashes and time to settle in. Final preparation details will be added when Jen’s approved appointment guidance is supplied.",
  },
  {
    question: "How should I care for my lashes afterward?",
    answer:
      "Placeholder: Jen’s approved aftercare instructions and product recommendations will be placed here before launch.",
  },
  {
    question: "Where are appointments available?",
    answer:
      "Appointments are offered at D. Miller Hair Lounge in Studio City and Goddess Beauty Salon in Thousand Oaks.",
  },
] as const;

export const faqGroups = [
  {
    title: "Before the appointment",
    items: [
      ["How should I arrive for my appointment?", "Placeholder: Approved preparation instructions will be added here. Guidance may include arriving with clean lashes and avoiding eye makeup."],
      ["How do I choose the right service?", "Placeholder: Jen’s approved consultation guidance will explain how eye shape, natural lashes, lifestyle, and desired finish inform the recommendation."],
      ["Can I wear contact lenses?", "Placeholder: Approved contact-lens guidance will be added before launch."],
    ],
  },
  {
    title: "During the appointment",
    items: [
      ["What does the appointment feel like?", "Placeholder: A reassuring description of the application experience will be supplied by Jen."],
      ["How long will I be there?", "Placeholder: Appointment durations vary by service and will be added when approved."],
    ],
  },
  {
    title: "Aftercare",
    items: [
      ["How do I care for my lashes?", "Placeholder: Approved cleansing, brushing, and product guidance will be added here."],
      ["Can I get my lashes wet?", "Placeholder: Jen’s approved post-appointment timing and care instructions will be added here."],
    ],
  },
  {
    title: "Fills and maintenance",
    items: [
      ["When should I schedule a fill?", "Placeholder: Approved maintenance intervals and eligibility requirements will be added here."],
      ["What qualifies as a fill?", "Placeholder: Jen’s approved fill criteria will be added here."],
    ],
  },
  {
    title: "Sensitivities and safety",
    items: [
      ["What if I have sensitive eyes?", "Placeholder: Approved sensitivity, consultation, and patch-test guidance will be added here."],
      ["Can I book if I have an eye condition?", "Placeholder: Approved safety guidance and referral language will be added here."],
    ],
  },
  {
    title: "Cancellations and policies",
    items: [
      ["What is the cancellation policy?", "Placeholder: The approved cancellation window and related terms will be added here."],
      ["What happens if I am late?", "Placeholder: Approved late-arrival guidance will be added here."],
    ],
  },
] as const;
