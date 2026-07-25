import { BookingCTA, PageHero } from "../components/PageElements";

export const metadata = {
  title: "Policies | Lavender Lash Love",
  description: "Lavender Lash Love appointment policies.",
};

const policies = [
  ["Cancellations", "Placeholder policy: Approved cancellation window, fees, and rescheduling guidance are required."],
  ["Lateness", "Placeholder policy: Approved grace period and service-adjustment guidance are required."],
  ["No-shows", "Placeholder policy: Approved no-show terms and future-booking requirements are required."],
  ["Fills", "Placeholder policy: Approved fill timing and minimum-retention criteria are required."],
  ["Foreign fills", "Placeholder policy: Approved guidance for work completed by another artist is required."],
  ["Guests", "Placeholder policy: Approved guest, child, and waiting-area guidance is required."],
  ["Sensitivities", "Placeholder policy: Approved allergy, sensitivity, patch-test, and safety language is required."],
  ["Payments", "Placeholder policy: Approved accepted-payment methods and timing are required."],
  ["Refunds", "Placeholder policy: Approved refund and service-adjustment terms are required."],
] as const;

export default function PoliciesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Appointment policies"
        title="Clear expectations create a more relaxed experience."
        intro="Every section below is explicitly placeholder content. No policy becomes active until Jen supplies and approves the final language."
        label="Policy page photography placeholder"
      />
      <section className="policies-page section-pad">
        <aside>
          <p className="eyebrow">Prototype notice</p>
          <p>These headings reserve the full production structure. They do not state current business policy.</p>
          <span>Effective date placeholder</span>
        </aside>
        <div className="policy-list">
          {policies.map(([title, copy], index) => (
            <section id={title.toLowerCase().replace(" ", "-")} key={title}>
              <span>0{index + 1}</span>
              <div><h2>{title}</h2><p>{copy}</p></div>
            </section>
          ))}
        </div>
      </section>
      <BookingCTA title="Ready when the details feel right." />
    </main>
  );
}
