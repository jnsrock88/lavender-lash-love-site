type PolicyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: readonly string[] };

type BookingPolicy = {
  title: string;
  blocks: readonly PolicyBlock[];
};

export const bookingPolicies: readonly BookingPolicy[] = [
  {
    title: "Cancellation & Rescheduling Policy",
    blocks: [
      { type: "paragraph", text: "Lavender Lash Love requires a minimum of 24 hours' notice to cancel or reschedule an appointment." },
      { type: "bullets", items: [
        "24 hours or more notice: No cancellation fee.",
        "Less than 24 hours' notice: A cancellation fee equal to 50% of the scheduled service price will be charged.",
        "Same-day cancellations: Subject to the 50% cancellation fee.",
        "Rescheduling within 24 hours: Subject to the same cancellation policy.",
        "Multiple last-minute cancellations: May result in restrictions on future bookings or additional booking requirements.",
      ] },
      { type: "paragraph", text: "Cancellation fees compensate for appointment time reserved exclusively for the client that may not be possible to fill on short notice." },
      { type: "paragraph", text: "By scheduling an appointment, clients acknowledge and agree to this policy." },
    ],
  },
  {
    title: "No-Call / No-Show Policy",
    blocks: [
      { type: "paragraph", text: "Clients who fail to arrive for their scheduled appointment without providing notice will be considered a no-call/no-show." },
      { type: "bullets", items: [
        "No-call/no-show fee: 100% of the scheduled service price.",
        "The card on file may be charged for the applicable fee.",
        "Any outstanding balance must be paid before another appointment can be booked.",
        "Repeated no-shows may result in refusal of future appointments.",
      ] },
      { type: "paragraph", text: "A no-show prevents another client from utilizing that reserved appointment time." },
    ],
  },
  {
    title: "Late Arrival Policy",
    blocks: [
      { type: "paragraph", text: "Clients are expected to arrive on time and prepared for their scheduled service." },
      { type: "heading", text: "Arriving less than 30 minutes late" },
      { type: "bullets", items: [
        "The appointment may proceed at Lavender Lash Love's discretion.",
        "Service time may be shortened to avoid affecting the next client.",
        "The original service price still applies.",
        "The amount of work completed may be reduced because of the shortened appointment.",
      ] },
      { type: "heading", text: "Arriving 30 minutes or more late" },
      { type: "bullets", items: [
        "The appointment will not be performed.",
        "The appointment will be canceled.",
        "A cancellation fee of 50% of the scheduled service price will apply.",
        "A new appointment must be scheduled.",
      ] },
      { type: "paragraph", text: "Clients are encouraged to account for traffic, parking, restroom needs, and other delays before arriving." },
    ],
  },
  {
    title: "After-Hours & Day-Off Appointments",
    blocks: [
      { type: "paragraph", text: "Lavender Lash Love operates by appointment only during established business hours." },
      { type: "paragraph", text: "Special accommodations may occasionally be available outside regular business hours or on scheduled days off." },
      { type: "bullets", items: [
        "A $75 special appointment fee is added to the regular service price.",
        "Appointments must be requested and approved in advance.",
        "Availability is not guaranteed.",
        "Standard cancellation, rescheduling, and no-show policies still apply.",
      ] },
      { type: "paragraph", text: "The additional fee compensates for accommodating clients outside regularly scheduled availability." },
    ],
  },
  {
    title: "Deposits & Booking Policy",
    blocks: [
      { type: "paragraph", text: "Certain appointments require a deposit to secure the reservation." },
      { type: "heading", text: "New full sets" },
      { type: "bullets", items: [
        "A $50 deposit is required to book.",
        "The deposit is applied toward the total service price.",
        "The remaining balance is due at the appointment.",
      ] },
      { type: "heading", text: "Lash fill appointments" },
      { type: "bullets", items: [
        "No advance deposit is required under the standard booking policy.",
        "A valid card on file may still be required.",
      ] },
      { type: "paragraph", text: "Deposits and booking arrangements are subject to the applicable cancellation and no-show policies." },
    ],
  },
  {
    title: "Refunds, Service Satisfaction & Adjustments",
    blocks: [
      { type: "paragraph", text: "All services provided by Lavender Lash Love are non-refundable." },
      { type: "paragraph", text: "Due to the time, professional expertise, products, and materials involved, refunds are not issued for completed services." },
      { type: "paragraph", text: "However, client satisfaction is important, and legitimate concerns will be evaluated." },
      { type: "heading", text: "72-hour notification period" },
      { type: "bullets", items: [
        "Clients must contact Lavender Lash Love within 72 hours of their appointment to report concerns with their results.",
        "Concerns will be evaluated individually.",
        "A complimentary adjustment, correction, removal, or alternative service may be offered when deemed appropriate.",
        "Any complimentary service is provided at Lavender Lash Love's sole discretion.",
      ] },
      { type: "paragraph", text: "Complimentary adjustments are not guaranteed and do not apply to:" },
      { type: "bullets", items: [
        "Changes of mind regarding the requested style or appearance.",
        "Failure to follow proper aftercare.",
        "Damage caused by improper handling or outside products.",
        "Normal lash shedding or natural hair growth.",
        "Client actions that negatively affect the service results.",
      ] },
      { type: "paragraph", text: "Notifying the salon within 72 hours does not automatically qualify a client for a free correction." },
    ],
  },
  {
    title: "Guests, Children & Pet Policy",
    blocks: [
      { type: "paragraph", text: "To maintain a safe, sanitary, professional, and relaxing environment, Lavender Lash Love has the following guest restrictions." },
      { type: "heading", text: "Guests and children" },
      { type: "bullets", items: [
        "No additional guests or children are permitted unless approved in advance.",
        "Clients should arrange childcare before their appointment.",
        "Unapproved visitors may be asked to leave.",
      ] },
      { type: "heading", text: "Pets and animals" },
      { type: "bullets", items: [
        "Pets are not permitted inside the service area.",
        "Trained service animals are permitted in accordance with applicable law.",
        "Advance notice of service animals is requested when possible to help prepare the space.",
      ] },
      { type: "paragraph", text: "These policies help minimize distractions and maintain the safety of clients, artists, and visitors." },
    ],
  },
  {
    title: "Lash Extension Fill Policy",
    blocks: [
      { type: "paragraph", text: "Lash fills are maintenance appointments designed to replace extensions that have naturally shed since the previous appointment." },
      { type: "heading", text: "Retention requirements" },
      { type: "bullets", items: [
        "Clients must have at least 40% of their lash extensions remaining to qualify for a fill.",
        "Appointments with less than 40% retention may need to be converted to a full set.",
        "Lash health and the condition of remaining extensions will also be evaluated.",
      ] },
      { type: "heading", text: "Recommended maintenance" },
      { type: "bullets", items: [
        "Lash fills are generally scheduled every 3 to 5 weeks, depending on retention and natural lash growth.",
        "Some clients may benefit from maintenance every 2 weeks.",
      ] },
      { type: "heading", text: "Outside lash fills" },
      { type: "paragraph", text: "Lavender Lash Love does not guarantee fill services over extensions applied by another artist." },
      { type: "bullets", items: [
        "Existing extensions must be evaluated for quality, placement, and natural lash health.",
        "Removal and a new full set may be recommended or required.",
        "Outside fills may be declined when the existing work does not meet professional standards.",
      ] },
      { type: "paragraph", text: "The safety and health of natural lashes always take priority." },
    ],
  },
  {
    title: "Appointment Preparation & Aftercare",
    blocks: [
      { type: "paragraph", text: "Clients are responsible for arriving prepared and following proper aftercare instructions." },
      { type: "heading", text: "Before the appointment" },
      { type: "bullets", items: [
        "Arrive with clean lashes and eye area.",
        "Remove eye makeup and residue when possible.",
        "Allow enough time for parking and restroom needs.",
        "Disclose relevant allergies, sensitivities, medications, or recent procedures that may affect service safety.",
      ] },
      { type: "heading", text: "After lash extensions" },
      { type: "bullets", items: [
        "Clean lashes regularly using a lash-safe cleanser.",
        "Avoid waterproof mascara and waterproof eyeliner.",
        "Mascara may be used on bottom lashes.",
        "Swimming is permitted, but lashes should be cleansed afterward.",
        "Dry lashes gently using a lash fan or hair dryer on a cool setting.",
        "Avoid pulling, picking, or rubbing the extensions.",
      ] },
      { type: "paragraph", text: "Improper aftercare can negatively affect retention and may disqualify a client from complimentary adjustments." },
    ],
  },
  {
    title: "Illness, Eye Conditions & Health Safety",
    blocks: [
      { type: "paragraph", text: "For the health and safety of clients and the artist, certain conditions may require an appointment to be postponed." },
      { type: "paragraph", text: "Clients must contact Lavender Lash Love before arriving if they are experiencing:" },
      { type: "bullets", items: [
        "Eye infections or suspected infections.",
        "Significant eye redness, irritation, or inflammation.",
        "Swelling or unusual tenderness around the eyes.",
        "Contagious illness or symptoms.",
        "Recent eye surgery or medical procedures.",
        "Any relevant medical condition that could interfere with safe treatment.",
      ] },
      { type: "paragraph", text: "Lavender Lash Love reserves the right to postpone or decline services when a condition may compromise safety." },
      { type: "paragraph", text: "Medical clearance may be requested before proceeding with certain treatments." },
      { type: "heading", text: "Allergic reactions and sensitivities" },
      { type: "paragraph", text: "Clients acknowledge that lash and brow treatments may cause irritation, sensitivity, contact dermatitis, or allergic reactions." },
      { type: "paragraph", text: "Possible symptoms include redness, itching, swelling, dryness, and tenderness." },
      { type: "bullets", items: [
        "Reactions may occur even if a client has previously received the same service without complications.",
        "A patch test does not guarantee that a reaction will not occur.",
        "Lavender Lash Love cannot diagnose medical conditions or guarantee that a product will not cause sensitivity.",
        "Clients experiencing concerning symptoms should seek guidance from a qualified healthcare professional.",
      ] },
    ],
  },
  {
    title: "Client Consent, Risks & Liability Release",
    blocks: [
      { type: "paragraph", text: "Clients must acknowledge the potential risks associated with professional lash and brow services." },
      { type: "paragraph", text: "This covers services including:" },
      { type: "bullets", items: [
        "Classic, volume, and mega volume lash extensions.",
        "Traditional lash lifts and tints.",
        "Korean lash lifts.",
        "Traditional brow lamination and tints.",
        "Korean brow lifts.",
        "Lash and brow tinting.",
        "Hybrid brow staining.",
      ] },
      { type: "paragraph", text: "By consenting to treatment, clients acknowledge that:" },
      { type: "bullets", items: [
        "They have disclosed relevant health information and known sensitivities.",
        "They understand that products and procedures carry potential risks.",
        "Temporary irritation, allergic reactions, or unexpected results are possible.",
        "Results vary based on natural hair condition, growth cycles, aftercare, and individual factors.",
        "No specific outcome or duration of results is guaranteed.",
        "They agree to follow applicable aftercare instructions.",
        "They accept the ordinary risks associated with the service, subject to applicable law.",
      ] },
      { type: "paragraph", text: "The client consent and liability release is intended to establish informed consent and the client's understanding of treatment risks, without waiving rights that cannot legally be waived." },
    ],
  },
  {
    title: "Photography & Video Release Policy",
    blocks: [
      { type: "paragraph", text: "Lavender Lash Love may request permission to photograph or record service results for professional use." },
      { type: "paragraph", text: "Photography and marketing consent is optional." },
      { type: "paragraph", text: "Clients may select from these choices:" },
      { type: "bullets", items: [
        "Full photo and video release: Permission for approved images or videos to be used in marketing, social media, the website, portfolios, advertisements, and educational materials.",
        "Close-up photos only: Permission for images focused on lashes or brows without showing the client's full face.",
        "Client records only: Images may be taken for internal service documentation but not public marketing.",
        "No photography: The client declines optional photos and videos.",
      ] },
      { type: "paragraph", text: "Clients who consent to promotional use acknowledge that no compensation is owed for authorized use unless otherwise agreed in writing." },
      { type: "paragraph", text: "Declining marketing photography does not prevent a client from receiving services." },
    ],
  },
  {
    title: "Payment Authorization & Outstanding Balances",
    blocks: [
      { type: "paragraph", text: "A valid payment method may be required to secure an appointment." },
      { type: "paragraph", text: "By agreeing to salon policies, clients authorize Lavender Lash Love to charge their payment method for applicable, disclosed charges, including:" },
      { type: "bullets", items: [
        "Cancellation fees.",
        "No-call/no-show fees.",
        "Other charges expressly agreed to during booking.",
      ] },
      { type: "paragraph", text: "All service balances are due at the appointment." },
      { type: "paragraph", text: "Outstanding fees may need to be resolved before additional bookings are accepted." },
    ],
  },
  {
    title: "Right to Refuse or Discontinue Service",
    blocks: [
      { type: "paragraph", text: "Lavender Lash Love reserves the right to decline, postpone, or discontinue an appointment when reasonably necessary for safety, professional standards, or salon operations." },
      { type: "paragraph", text: "Examples include:" },
      { type: "bullets", items: [
        "Unsafe eye or skin conditions.",
        "Inability to perform the requested service without risking natural lash or brow health.",
        "Harassment, threatening conduct, or inappropriate behavior.",
        "Refusal to follow reasonable safety requirements.",
        "Existing lash work that is unsuitable for maintenance.",
      ] },
      { type: "paragraph", text: "Any applicable fees will depend on the circumstances and governing booking terms." },
    ],
  },
];

export const policyQuickReference = [
  ["Cancellation, 24+ hours", "No fee"],
  ["Cancellation, under 24 hours", "50% of service"],
  ["No-call/no-show", "100% of service"],
  ["Late arrival under 30 minutes", "Shortened service, full price"],
  ["Late arrival 30+ minutes", "Canceled, 50% fee"],
  ["After-hours or day-off", "Additional $75"],
  ["Full set booking deposit", "$50"],
  ["Lash fill deposit", "None"],
  ["Refunds", "No refunds"],
  ["Service concerns", "Report within 72 hours"],
  ["Lash fill retention", "Minimum 40%"],
  ["Guests and children", "Prior approval required"],
  ["Pets", "Not permitted, service animal exception"],
  ["Marketing photography", "Optional consent"],
] as const;
