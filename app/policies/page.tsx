import { BookingCTA, PageHero } from "../components/PageElements";
import { bookingPolicies, policyQuickReference } from "../content";

export const metadata = {
  title: "Policies | Lavender Lash Love",
  description: "Lavender Lash Love appointment policies.",
};

export default function PoliciesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Lavender Lash Love"
        title="Complete Salon Policies & Client Guidelines"
        intro="Please review these cancellation fees, appointment rules, refunds, guest guidelines, health and safety requirements, lash fill standards, and client consent terms before booking."
        label="Salon policies and client guidelines"
      />
      <section className="policies-page section-pad">
        <aside>
          <p className="eyebrow">Before you book</p>
          <p>Your appointment time is reserved especially for you.</p>
          <span>Please review every policy</span>
        </aside>
        <div className="policy-list">
          {bookingPolicies.map((policy, index) => (
            <section id={policy.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")} key={policy.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{policy.title}</h2>
                {policy.blocks.map((block, blockIndex) => {
                  if (block.type === "heading") {
                    return <h3 key={`${block.text}-${blockIndex}`}>{block.text}</h3>;
                  }

                  if (block.type === "bullets") {
                    return (
                      <ul key={`bullets-${blockIndex}`}>
                        {block.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    );
                  }

                  return <p key={`${block.text}-${blockIndex}`}>{block.text}</p>;
                })}
              </div>
            </section>
          ))}
          <section className="policy-quick-reference" id="quick-reference">
            <span>15</span>
            <div>
              <h2>Quick Reference: Your Main Fees & Rules</h2>
              <div className="policy-table-wrap">
                <table>
                  <thead><tr><th>Policy</th><th>Your Rule</th></tr></thead>
                  <tbody>
                    {policyQuickReference.map(([policy, rule]) => (
                      <tr key={policy}><td>{policy}</td><td>{rule}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
      <BookingCTA title="Ready when the details feel right." />
    </main>
  );
}
