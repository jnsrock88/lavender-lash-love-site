export const BOOKING_URL = "https://example.com/booking-placeholder";

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "The Experience", href: "#experience" },
  { label: "About Jen", href: "#jen" },
  { label: "Locations", href: "#locations" },
  { label: "FAQ", href: "#faq" },
] as const;

export const services = [
  {
    number: "01",
    name: "Classic",
    copy: "A refined, natural-looking enhancement designed around your eye shape.",
    image: "/images/lash-detail-01.jpeg",
  },
  {
    number: "02",
    name: "Hybrid",
    copy: "A softly textured balance of definition, dimension, and effortless polish.",
    image: "/images/beauty-portrait-03.jpeg",
  },
  {
    number: "03",
    name: "Volume",
    copy: "Airy, customized fullness with an elegant finish—never one-size-fits-all.",
    image: "/images/beauty-portrait-01.jpeg",
  },
  {
    number: "04",
    name: "Lash Lift",
    copy: "A low-maintenance option that celebrates and elevates your natural lashes.",
    image: "/images/beauty-portrait-02.jpeg",
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
