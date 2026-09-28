import { media } from "./media";

const lashExtensionAppointmentDetails =
  "Appointment time includes cleansing and prep, grown-out lash removal, application, sealing, and service closeout.";

export const business = {
  foundedYear: 2012,
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
        "A full set of eyelash extensions is completely customized and created just for you. Extensions are carefully applied to your bare natural lashes, with every detail tailored to your eye shape, natural lash health, lifestyle, and desired look. Your appointment includes a 30-minute consultation so we can design a set you’ll love. The full service typically takes 2–3 hours, depending on your natural lash density and chosen style. Appointment time includes a 30-minute consultation, prep, customized lash application, sealing, and service closeout.",
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
            `Classic Eyelash Extension Fill 3–5 Weeks involves the application of an individual single extension to each natural lash, enhancing both volume and length for a striking effect. As your natural lashes grow, the extensions are carefully replaced, ensuring a full and vibrant appearance that lasts, creating either a subtle or dramatic effect. The duration of this appointment may range from 1 to 2 hours, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
        },
        {
          name: "2 Week Fill",
          price: "$95",
          description:
            `The Classic Eyelash Extension 2 Week Fill enhances your natural lashes by applying an individual single extension that increases both volume and length for a dramatic look. This service focuses on adding extensions to existing lashes while minimizing the removal of any extensions, ensuring a seamless and full appearance. The duration of this appointment may range from 1 to 1 hour and 15 minutes, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
        },
        {
          name: "Touch-Up",
          price: "$85",
          description:
            `The Classic Extension Touch-Up is designed to refresh and enhance your lash look, perfect for special occasions or when you experience more shedding than usual. This service ensures your lashes remain full and beautifully balanced. The duration of this appointment may range from 35 to 45 minutes, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
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
            `Volume Eyelash Extension Fill 3–5 Weeks involves the application of small fans to each natural lash, enhancing both volume and length for a striking effect. As your natural lashes grow, the extensions are carefully replaced, ensuring a full and vibrant appearance that lasts, creating either a subtle or dramatic effect. The duration of this appointment may range from 1 to 2 hours, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
        },
        {
          name: "2 Week Fill",
          price: "$115",
          description:
            `The Volume Eyelash Extension 2 Week Fill enhances your natural lashes by applying fans that increase both volume and length for a dramatic look. This service focuses on adding extensions to existing lashes while minimizing the removal of any extensions, ensuring a seamless and full appearance. The duration of this appointment may range from 1 to 1.5 hours, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
        },
        {
          name: "Touch-Up",
          price: "$105",
          description:
            `Volume Eyelash Extension Touch-Up is designed to refresh and enhance your lash look, perfect for special occasions or when you experience more shedding than usual. This service ensures your lashes remain full and beautifully balanced. The duration of this appointment may range from 35 to 45 minutes, depending on the client’s natural lash density and the extent of lash shedding. ${lashExtensionAppointmentDetails}`,
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
            `An outside fill is a fill appointment for eyelash extensions originally applied by another lash artist. Because every artist uses different products and techniques, outside fills can require additional time and care to assess, correct, or safely remove the existing extensions. For the best results, we kindly recommend booking a full set. Starting fresh allows us to create a beautiful, customized look just for you while protecting the health of your natural lashes. Although we’re happy to evaluate outside work, we cannot guarantee the results when filling over extensions applied elsewhere. ${lashExtensionAppointmentDetails}`,
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
  { label: "About Jen", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
] as const;

export const services = [
  { ...business.serviceMenu[0], href: "/services#new-client" },
  { ...business.serviceMenu[1], href: "/services#fills" },
  { ...business.serviceMenu[2], href: "/services#fills" },
  {
    ...business.serviceMenu[4],
    name: "Korean Lash/Brow Lift",
    href: "/services#lifts-brows",
  },
] as const;

export const testimonials = [
  {
    name: "Angel",
    quote:
      "I have to say I’m immensely grateful for my lashes! I work out 4–5 days a week and many days twice a day to include hot yoga, and I am shocked by how much my lashes stay on. They look fresh even weeks later. Definitely recommend!",
  },
  {
    name: "Nicole",
    quote:
      "By far the most amazing lash artist! I’ve been going to Lavender Lash Love for years and leave every appointment so satisfied. Jen is extremely professional, her studio feels so cozy and comfortable, and she always takes extra care to make sure your lashes stay healthy. She’s the best!",
  },
  {
    name: "Nyrie",
    quote:
      "I'm hooked. She's methodical, detailed, and these lashes STAY ON! Swim, shower, makeup... I was delightfully shocked. Well worth the money to look amazing first thing in the morning. Love Jen!",
  },
] as const;

export const faqGroups = [
  {
    title: "Before the appointment",
    items: [
      [
        "How should I arrive for my appointment?",
        {
          bullets: [
            "Please arrive with clean lashes and no mascara, eyeliner, eye makeup, strip lash adhesive, or oil-based products around the eyes.",
            "Please use the restroom before your service, since your eyes will remain closed throughout the appointment.",
            "New clients receive a personalized consultation before the service begins.",
          ],
        },
      ],
      [
        "How do I choose the right service?",
        {
          paragraphs: [
            "Jen will help you select a style based on your natural lashes, eye shape, lifestyle, and desired look. Whether you prefer soft and natural or full glam, every set is customized for you.",
            "Jen provides a full consultation covering how your natural lashes grow, what happens during the appointment, and how to care for your lashes afterward.",
          ],
          services: business.serviceMenu,
        },
      ],
      [
        "Can I wear contact lenses?",
        {
          paragraphs: [
            "For your comfort, please remove contact lenses before your lash service. Bring your glasses or a contact lens case and solution. A contact case can be provided if needed.",
          ],
        },
      ],
    ],
  },
  {
    title: "During the appointment",
    items: [
      [
        "What does the appointment feel like?",
        {
          paragraphs: [
            "Settle in and unwind while Jen creates a personalized lash look designed just for you. Your appointment is your time to relax in a private, peaceful setting, complete with a cozy heated lash bed, soft blankets, and calming music.",
            "Whether you choose to drift off for a lash nap, enjoy the quiet, or chat throughout your service, the experience is entirely yours. Every detail is designed to make your appointment feel comfortable, unrushed, and a little luxurious.",
          ],
        },
      ],
      [
        "How long will my appointment take?",
        {
          paragraphs: [
            "For a new full set, please plan to set aside approximately **2–3 hours** for your appointment. This time includes your consultation, where we’ll discuss your desired look, assess your natural lashes, customize your lash design, complete your application, and allow time for finishing touches and checkout.",
            "Appointment times for fills and other services will vary depending on the service selected, the condition and amount of your natural lashes and existing extensions, and your desired result.",
            "Each appointment is intentionally scheduled with enough time to create beautiful, detailed results without feeling rushed. Lash fill appointments typically take **1–2 hours**, depending on your lash retention and the amount of new growth. During your fill, the lashes are cleansed and prepped, grown-out extensions are carefully removed, and fresh extensions are applied to new natural lashes and any lashes where extensions were removed.",
          ],
        },
      ],
    ],
  },
  {
    title: "Aftercare",
    items: [
      [
        "How do I care for my lash extensions?",
        {
          paragraphs: [
            "Keeping your lashes clean is one of the most important parts of proper aftercare. Gently cleanse them daily with a lash-safe cleanser, brush them as instructed, and avoid pulling, picking, or rubbing your extensions. Jen will show you how to properly cleanse and care for your lashes during your appointment to help keep them healthy, clean, and looking their best.",
          ],
          sections: [
            {
              title: "Can I wear mascara with lash extensions?",
              paragraphs: [
                "Mascara is not recommended on lash extensions, as it can create buildup, affect retention, and make your extensions more difficult to properly clean. **Waterproof mascara and waterproof eyeliner should always be avoided.** Mascara may be worn on your bottom lashes.",
              ],
            },
            {
              title: "Can I swim with lash extensions?",
              paragraphs: [
                "Yes! You can absolutely swim with lash extensions. After swimming, gently cleanse your lashes to remove chlorine, salt water, sunscreen, and other residue that can build up along the lash line and potentially affect retention.",
              ],
            },
            {
              title: "Can I get my lash extensions wet?",
              paragraphs: [
                "Yes! Lash extensions can—and should—get wet. Regular cleansing is an essential part of keeping your lashes clean and healthy.",
                "After cleansing, gently pat around the eye area dry. You can allow your extensions to air-dry or use a small fan or the **cool setting** of a blow dryer. Once dry, gently brush through them with a clean lash wand to restore their soft, fluffy finish.",
              ],
            },
          ],
        },
      ],
      [
        "What can affect lash retention?",
        {
          paragraphs: [
            "Lash retention can vary from person to person and is influenced by several factors, including your natural lash cycle, skincare and makeup products, heat and humidity, medications, hormones, supplements, stress, lifestyle, and proper home care.",
            "Great retention is also a **partnership between you and your lash artist**. Proper preparation, application technique, adhesive use, and product selection all play an important role on the artist’s end, while regular cleansing and proper aftercare help maintain your extensions between appointments.",
            "Even with excellent application and aftercare, some natural shedding is completely normal as your lashes move through their natural growth cycle.",
          ],
        },
      ],
    ],
  },
  {
    title: "Fills and maintenance",
    items: [
      [
        "When should I schedule a fill?",
        {
          paragraphs: [
            "Most clients schedule their fills every **3–5 weeks**, depending on their natural lash cycle, retention, home care, lifestyle, and desired level of fullness.",
            "If you prefer your lashes to look consistently full and freshly done, you may choose to come in **every 2 weeks** for a smaller touch-up.",
            "Everyone’s lashes shed and grow differently, so Jen will help recommend the best maintenance schedule for your natural lashes and the look you want to maintain.",
          ],
        },
      ],
      [
        "What qualifies as a fill?",
        {
          paragraphs: [
            "To qualify for a fill, you must have at least **40% of your lash extensions remaining** and they must be properly applied and in good condition.",
            "During your fill, grown-out extensions are carefully removed and replaced while new extensions are applied to your natural lash growth.",
            "Significant lash loss, excessive outgrowth, or going too long between appointments may require additional time or a **new full set**. If you’re unsure which service to book, please reach out before your appointment.",
          ],
        },
      ],
      [
        "Can Jen fill lashes applied by another artist?",
        {
          paragraphs: [
            "Outside fills are accepted on a **case-by-case basis** and are generally not preferred. Because every lash artist uses different products, techniques, and styling methods, Jen cannot guarantee that an outside fill will blend seamlessly with the existing extensions or provide the same results and retention as a full set of her own work.",
            "Jen will evaluate the condition, application, and overall health of your existing extensions. If they cannot be safely or effectively filled, a **removal and new full set** will be recommended.",
            "Starting with a fresh set allows Jen to fully customize your lashes and ensure the quality, consistency, and integrity of the finished result.",
          ],
        },
      ],
    ],
  },
  {
    title: "Sensitivities & Safety",
    items: [
      [
        "Are lash extensions safe?",
        {
          paragraphs: [
            "Lash extensions are generally safe when applied by a trained professional using proper application techniques. Jen carefully selects the appropriate length, weight, and design to complement your natural lashes while maintaining their health and integrity.",
            "Pulling, rubbing, improper aftercare, or extensions that are too long or heavy for the natural lashes can contribute to damage. Proper application and home care work together to help keep your natural lashes healthy.",
          ],
        },
      ],
      [
        "What if I have sensitive eyes or allergies?",
        {
          paragraphs: [
            "Please let Jen know about any known allergies, sensitivities, or previous reactions to lash extensions or adhesives before your appointment.",
            "A patch test may be recommended for clients with known sensitivities; however, **a patch test cannot guarantee that a reaction will not occur** during or after a full application.",
          ],
        },
      ],
      [
        "What is a reaction or contact dermatitis?",
        {
          paragraphs: [
            "What is commonly referred to as a “lash allergy” may actually be **contact dermatitis**, which is inflammation that develops when the skin reacts to or is irritated by something it has been exposed to.",
            "Contact dermatitis around the eye area may cause **redness, itching, swelling, dryness, tenderness, or irritated skin** and may develop after repeated exposure even if you have had lash extensions previously without an issue.",
            "There are different types of contact dermatitis, including **irritant contact dermatitis** and **allergic contact dermatitis**, and the symptoms can look very similar. Because it is not possible for a lash artist to determine the medical cause of a reaction, Jen cannot diagnose whether your symptoms are an allergy, irritation, or another condition.",
            "If you develop significant, worsening, or persistent symptoms, please contact a healthcare professional for proper evaluation and treatment.",
          ],
        },
      ],
      [
        "Can I book with an eye condition or illness?",
        {
          paragraphs: [
            "Please contact Jen **before your appointment** if you have an eye infection, significant irritation or inflammation, a contagious illness, a recent eye procedure or surgery, or another condition that could affect the safety of your service.",
            "Your appointment may need to be postponed or rescheduled to protect your health and the health of others. If you have recently undergone an eye procedure or have an ongoing eye condition, you may be asked to receive clearance from your healthcare provider before receiving a lash service.",
          ],
        },
      ],
    ],
  },
] as const;

export const bookingPolicies = [
  {
    title: "Deposits",
    paragraphs: [
      "**Full Sets:** $50 deposit required to book.",
      "**Fills:** No deposit required.",
      "Your Full Set deposit is applied toward your service and may be transferred when rescheduling with at least **24 hours' notice**.",
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    paragraphs: [
      "**24+ hours' notice:** No cancellation fee.",
      "**Less than 24 hours:** **50% of the scheduled service** will be charged.",
      "Any Full Set deposit already paid will be applied toward the cancellation fee.",
    ],
  },
  {
    title: "No-Call / No-Show",
    paragraphs: [
      "No-call/no-shows will be charged **100% of the scheduled service**.",
      "Future appointments may require **100% prepayment** to book.",
    ],
  },
  {
    title: "Late Arrivals",
    notice:
      "PLEASE PLAN AHEAD FOR PARKING AND RESTROOM USE SO YOU ARE READY TO BEGIN YOUR SERVICE AT YOUR SCHEDULED APPOINTMENT TIME.",
    paragraphs: [
      "Your scheduled time is the time your service begins. Please allow yourself a few extra minutes to park, use the restroom, and get settled before your appointment.",
      "**Less than 30 minutes late:** Your appointment time will not be extended. Your service may need to be shortened, and the **full scheduled service price will still apply**.",
      "**30+ minutes late:** The appointment will be canceled and a **50% same-day cancellation fee** will apply.",
      "If you know you are running late, please contact Jen as soon as possible.",
    ],
  },
  {
    title: "Can I Request an After-Hours or Day-Off Appointment?",
    paragraphs: [
      "Appointments requested **outside Jen's regular business hours or on a scheduled day off** may be available by special request and are subject to a **$75 Special Appointment Fee**.",
      "This fee is added to the regular service price and must be **approved by Jen before booking**. Special appointment availability is not guaranteed.",
    ],
  },
  {
    title: "Can I Bring a Guest, Child, or Animal?",
    paragraphs: [
      "To maintain a quiet, safe, and relaxing environment, it is recommended that you attend your appointment alone. **Guests and children should not accompany you unless approved by Jen in advance.**",
      "**Pets are not permitted. Trained service animals are welcome.** Please let Jen know before your appointment if you will be accompanied by a service animal so the room can be prepared comfortably for your visit.",
    ],
  },
  {
    title: "Appointment Changes",
    paragraphs: [
      "Please book the correct service so enough time is reserved for your appointment. Adding or changing services on the day of your appointment **cannot be guaranteed**.",
    ],
  },
  {
    title: "Are Services Refundable?",
    paragraphs: [
      "**All services are non-refundable.**",
      "If you experience a concern with your lashes, please contact Jen within **72 hours of your appointment**. Jen will evaluate the concern and, when appropriate, may offer a **complimentary adjustment or another appropriate service**.",
      "A change of mind, personal preference after the agreed-upon service has been completed, or issues resulting from improper aftercare **do not qualify for a complimentary correction or refund**.",
    ],
  },
  {
    title: "Agreement to Policies",
    paragraphs: [
      "By booking an appointment with Lavender Lash Love, you confirm that you have **read, understood, and agreed to these policies**.",
      "You also authorize Lavender Lash Love to charge the **card on file for applicable cancellation, late-cancellation, no-show, or other authorized fees described in these policies**.",
    ],
  },
] as const;
