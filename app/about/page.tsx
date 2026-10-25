import { BOOKING_CHOOSER_URL } from "../content";

export const metadata = {
  title: "About Jen | Lavender Lash Love",
  description: "Meet Jen Shedrock, the artist behind Lavender Lash Love.",
};

export default function AboutPage() {
  return (
    <main id="main" className="inner-page about-page">
      <section className="about-title section-pad">
        <h1>Artistry, precision, and personal care.</h1>
      </section>

      <div className="about-chapters">
        <section className="about-chapter section-pad" aria-labelledby="about-meet-jen">
          <div className="about-chapter-media" role="img" aria-label="Photo space for Meet Jen" />
          <div className="about-chapter-copy">
            <p className="about-chapter-number">01.</p>
            <h2 id="about-meet-jen">Meet Jen</h2>
            <p className="about-chapter-kicker">The Artist Behind Lavender Lash Love 💜</p>
            <p>For Jen Shedrock, beauty has always been about the transformation.</p>
            <p>Growing up, she loved watching makeover and before-and-after shows. While the entire process fascinated her, it was always the big reveal she looked forward to most. Seeing the finished transformation and the excitement on someone&apos;s face was what made it so special.</p>
            <p>Jen became a licensed cosmetologist in 2008 and began her career working with hair. Although she loved the creativity and seeing the results, she eventually realized that doing hair itself wasn&apos;t where her passion belonged.</p>
            <p>Lashes, however, were something she&apos;d always wanted to explore.</p>
            <p>When the opportunity to learn eyelash extensions came along in 2012, Jen jumped at it. She picked up the technique quickly and discovered a natural love for the precision, detail, and artistry involved. What began as something she&apos;d always wanted to try became the career she truly loved.</p>
            <p>And all these years later, her favorite part hasn&apos;t changed.</p>
            <p>It&apos;s that moment at the end of an appointment when a client finally opens their eyes and sees their new lashes for the first time. The anticipation, the excitement, and especially the reaction when the results are exactly what they envisioned.</p>
            <p>That&apos;s the moment Jen never gets tired of, and why she still loves what she does.</p>
          </div>
        </section>

        <section className="about-chapter section-pad" aria-labelledby="about-art">
          <div className="about-chapter-media" role="img" aria-label="Photo space for The Art Behind the Lashes" />
          <div className="about-chapter-copy">
            <p className="about-chapter-number">02.</p>
            <h2 id="about-art">The Art Behind the Lashes</h2>
            <p className="about-chapter-kicker">Where Precision Meets Personality</p>
            <p>With over 14 years of lash experience, Jen believes beautiful lashes are never one size fits all.</p>
            <p>Every set is thoughtfully customized to complement each client&apos;s eye shape, natural lashes, lifestyle, and personal style. Whether soft and subtle or bold and dramatic, her meticulous attention to detail ensures the finished look feels uniquely theirs.</p>
            <p>Her focus is always on creating beautiful, balanced results while prioritizing the health of the natural lashes.</p>
          </div>
        </section>

        <section className="about-chapter section-pad" aria-labelledby="about-care">
          <div className="about-chapter-media" role="img" aria-label="Photo space for More Than an Appointment" />
          <div className="about-chapter-copy">
            <p className="about-chapter-number">03.</p>
            <h2 id="about-care">More Than an Appointment</h2>
            <p className="about-chapter-kicker">A Little Luxury. A Lot of Personal Care.</p>
            <p>For Jen, the connections she&apos;s built with her clients are just as meaningful as the lashes she creates.</p>
            <p>Her private Studio City studio was designed to feel comfortable, welcoming, and relaxing, with thoughtful touches that make every visit a little more special.</p>
            <p>Whether it&apos;s sharing laughs, catching up on life, or enjoying a peaceful lash nap, every client is encouraged to make the time their own.</p>
          </div>
        </section>

        <section className="about-chapter section-pad" aria-labelledby="about-experience">
          <div className="about-chapter-media" role="img" aria-label="Photo space for Your Lash Experience Starts Here" />
          <div className="about-chapter-copy">
            <p className="about-chapter-number">04.</p>
            <h2 id="about-experience">Your Lash Experience Starts Here</h2>
            <p className="about-chapter-kicker">Beautiful Lashes. Your Style. Your Moment.</p>
            <p>Lavender Lash Love brings together everything Jen loves about her craft: creativity, precision, personal connections, and the joy of a beautiful transformation.</p>
            <p>Whether you&apos;re visiting for your first set, maintaining your signature look, or trying something new, Jen looks forward to creating something uniquely yours.</p>
            <p className="about-chapter-emphasis">Because the best part of every transformation isn&apos;t just how you look. It&apos;s how you feel.</p>
            <a className="button button-primary" href={BOOKING_CHOOSER_URL} target="_blank" rel="noopener noreferrer">
              Book Your Appointment 💜
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
