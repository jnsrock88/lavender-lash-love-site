import { BOOKING_URL } from "../content";
import { Arrow, BookingCTA, PageHero, PlaceholderImage } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "Locations | Lavender Lash Love",
  description: "Explore Lavender Lash Love appointments in Studio City and Thousand Oaks.",
};

const locations = [
  { name: "Studio City", region: "Los Angeles", visual: "studio-city", image: media.locations.studioCity },
  { name: "Thousand Oaks", region: "Conejo Valley", visual: "thousand-oaks", image: media.locations.thousandOaks },
] as const;

export default function LocationsPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Two convenient locations"
        title="Your appointment, a little closer to home."
        intro="Choose between Studio City and Thousand Oaks. Exact public addresses and arrival details will be added only after approval."
        label="Location photography needed"
      />
      <section className="locations-page section-pad">
        {locations.map((location, index) => (
          <article className="location-detail" key={location.name}>
            <PlaceholderImage
              className={location.visual}
              label={`${location.name} temporary studio photography`}
              src={location.image}
              alt={`Temporary luxury studio interior representing the ${location.name} location`}
            />
            <div className="location-detail-copy">
              <span className="editorial-index">0{index + 1}</span>
              <p className="eyebrow">{location.region}</p>
              <h2>{location.name}</h2>
              <dl>
                <div><dt>Address</dt><dd>Placeholder address — not for navigation</dd></div>
                <div><dt>Availability</dt><dd>Placeholder availability</dd></div>
                <div><dt>Parking</dt><dd>Placeholder parking and arrival notes</dd></div>
              </dl>
              <div className="location-actions">
                <a className="button button-primary" href={BOOKING_URL}>Book {location.name} <Arrow /></a>
                <a className="text-link" href="#map-placeholder">Map link placeholder <Arrow /></a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="arrival-note section-pad" id="map-placeholder">
        <p className="eyebrow">Before you travel</p>
        <h2>Arrival made simple.</h2>
        <p>Approved building access, parking, suite, accessibility, and arrival instructions for both locations will be provided here before launch.</p>
      </section>
      <BookingCTA title="Choose the location that works for you." />
    </main>
  );
}
