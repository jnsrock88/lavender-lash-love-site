import { BookingCTA, PageHero } from "../components/PageElements";
import { bookingPolicies } from "../content";

export const metadata = {
  title: "Policies | Lavender Lash Love",
  description: "Lavender Lash Love appointment policies.",
};

function PolicyText({ children }: { children: string }) {
  return children.split("**").map((part, index) =>
    index % 2 === 1 ? <strong key={`${part}-${index}`}>{part}</strong> : part,
  );
}

export default function PoliciesPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Appointment policies"
        title="Booking Policies"
        intro="Please review before booking. Your appointment time is reserved especially for you. ♡"
        label="Policy page photography placeholder"
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
              <span>0{index + 1}</span>
              <div>
                <h2>{policy.title}</h2>
                {"notice" in policy ? <p className="policy-notice">{policy.notice}</p> : null}
                {policy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <PolicyText>{paragraph}</PolicyText>
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <BookingCTA title="Ready when the details feel right." />
    </main>
  );
}
