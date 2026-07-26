import { business } from "../content";
import { BookingCTA, PageHero, PlaceholderImage } from "../components/PageElements";
import { media } from "../media";

export const metadata = {
  title: "Locations | Lavender Lash Love",
  description: "Explore Lavender Lash Love appointments in Studio City and Thousand Oaks.",
};

const locations = [
  { ...business.locations.studioCity, visual: "studio-city", image: media.locations.studioCity },
  { ...business.locations.thousandOaks, visual: "thousand-oaks", image: media.locations.thousandOaks },
] as const;

export default function LocationsPage() {
  return (
    <main id="main" className="inner-page">
      <PageHero
        eyebrow="Two convenient locations"
        title="Your appointment, a little closer to home."
        intro="Choose between Studio City and Thousand Oaks, each with its own schedule and Vagaro booking page."
        image={media.about.studio}
        imageAlt="Lavender Lash Love appointment studio"
        label="Lavender Lash Love studio"
      />
      <section className="locations-page section-pad" id="booking-options">
        {locations.map((location, index) => (
          <article className="location-detail" key={location.city}>
            <PlaceholderImage
              className={location.visual}
              label={`${location.city} salon interior`}
              src={location.image}
              alt={`Interior of ${location.salon} in ${location.city}`}
              showLabel={false}
            />
            <div className="location-detail-copy">
              <span className="editorial-index">0{index + 1}</span>
              <p className="eyebrow">{location.region}</p>
              <h2>{location.city}</h2>
              <p className="location-salon">{location.salon}</p>
              <dl>
                <div><dt>Address</dt><dd>{location.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</dd></div>
                <div><dt>Schedule</dt><dd>{location.schedule.map((line) => <span key={line}>{line}<br /></span>)}</dd></div>
              </dl>
              <div className="location-actions">
                <a className="button button-primary" href={location.bookingUrl} target="_blank" rel="noreferrer">
                  Book {location.city} on Vagaro
                </a>
                <a className="text-link" href={location.mapsUrl} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
      <BookingCTA title="Choose the location that works for you." />
    </main>
  );
}
