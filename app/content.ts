export const BOOKING_URL = "https://example.com/booking-placeholder";
export const INSTAGRAM_URL = "https://instagram.com/lavenderlashlove";
export const EMAIL_PLACEHOLDER = "email placeholder";
export const PHONE_PLACEHOLDER = "phone placeholder";
export const RESPONSE_TIME_PLACEHOLDER = "Response-time guidance placeholder";

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "The Experience", href: "/experience" },
  { label: "About Jen", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
] as const;

export const services = [
  {
    number: "01",
    name: "Classic",
    copy: "A refined, natural-looking enhancement designed around your eye shape.",
    image: media.services.classic,
  },
  {
    number: "02",
    name: "Hybrid",
    copy: "A softly textured balance of definition, dimension, and effortless polish.",
    image: media.services.hybrid,
  },
  {
    number: "03",
    name: "Volume",
    copy: "Airy, customized fullness with an elegant finish—never one-size-fits-all.",
    image: media.services.volume,
  },
  {
    number: "04",
    name: "Lash Lift",
    copy: "A low-maintenance option that celebrates and elevates your natural lashes.",
    image: media.services.fourthPlaceholder,
  },
] as const;

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
      "Appointments are offered in Studio City and Thousand Oaks. Exact public addresses and arrival details will be added once approved.",
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
import { media } from "./media";
