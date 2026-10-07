import { Link } from "react-router-dom";
import PageHead from "../../../components/PageHead/PageHead";
import Reveal from "../../../components/Reveal/Reveal";

const SERVICES = [
  {
    title: "Sikkim Cab Service",
    text: "Reliable cab and taxi service for local travel, sightseeing and outstation journeys across Sikkim.",
  },
  {
    title: "Sikkim Cab Booking",
    text: "Book a cab in Sikkim for family trips, couples, groups, sightseeing and customized tours.",
  },
  {
    title: "Sikkim Sightseeing Cab",
    text: "Explore Gangtok and popular Sikkim attractions with comfortable sightseeing cabs and local drivers.",
  },
  {
    title: "Sikkim Tour Cab",
    text: "Plan Sikkim tour packages and point-to-point travel with a convenient cab service.",
  },
];

const DESTINATIONS = [
  "Gangtok",
  "Tsomgo Lake",
  "Nathula Pass",
  "Lachung",
  "Yumthang Valley",
  "Pelling",
  "Namchi",
  "Ravangla",
  "Zuluk",
];

const ROUTES = [
  "NJP to Gangtok Cab",
  "Bagdogra to Gangtok Cab",
  "Siliguri to Gangtok Cab",
  "NJP to Sikkim Cab",
  "Bagdogra to Sikkim Cab",
  "Siliguri to Sikkim Cab",
];

const FAQS = [
  {
    question: "Which areas does your cab service cover in Sikkim?",
    answer:
      "Gupta Cab Service provides cab and taxi services across popular Sikkim destinations including Gangtok, Tsomgo Lake, Nathula Pass, Lachung, Yumthang Valley, Pelling, Namchi, Ravangla and Zuluk.",
  },
  {
    question: "Can I book a cab for Sikkim sightseeing?",
    answer:
      "Yes. You can book a Sikkim sightseeing cab for Gangtok and other popular tourist destinations according to your travel plan.",
  },
  {
    question: "Do you provide NJP and Bagdogra pickup for Sikkim?",
    answer:
      "Yes. Cab services are available for travel between NJP Railway Station, Bagdogra Airport, Siliguri and destinations in Sikkim.",
  },
  {
    question: "Can I book a cab for North Sikkim?",
    answer:
      "Yes. Cab services can be arranged for North Sikkim destinations such as Lachung and Yumthang Valley, subject to travel conditions and applicable local requirements.",
  },
];

export default function CabServiceSikkim() {
  return (
    <>
      <PageHead
        title="Cab Service in"
        highlight="Sikkim"
        text="Reliable cab and taxi service in Sikkim for sightseeing, tours, airport transfers and outstation travel."
      />

      {/* INTRODUCTION */}
      <section className="section" aria-labelledby="sikkim-cab-service-title">
        <div className="container split">
          <Reveal>
            <img
              src="/images/about-img.jpeg"
              alt="Gupta Cab Service in Sikkim for local sightseeing and tours"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <span className="eyebrow">Sikkim Cab Service</span>

            <h2 id="sikkim-cab-service-title" className="title">
              Reliable <span>Cab Service in Sikkim</span>
            </h2>

            <p className="lead">
              Gupta Cab Service provides reliable and comfortable cab service
              in Sikkim for sightseeing, local travel, tour trips and
              outstation journeys. Whether you are planning a trip to Gangtok,
              North Sikkim or other popular destinations, you can book a cab
              according to your travel requirements.
            </p>

            <p className="lead" style={{ marginTop: 14 }}>
              We also provide travel connections from NJP Railway Station,
              Bagdogra Airport and Siliguri to Gangtok and other destinations
              in Sikkim.
            </p>

            <div style={{ marginTop: 22 }}>
              <Link
                to="/booking"
                className="btn btn-gold"
                aria-label="Book a cab service in Sikkim"
              >
                Book Your Cab
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="section alt"
        aria-labelledby="sikkim-services-title"
      >
        <div className="container">
          <div className="center">
            <span className="eyebrow">Our Services</span>

            <h2 id="sikkim-services-title" className="title">
              Sikkim Cab &amp; <span>Taxi Services</span>
            </h2>

            <p className="lead" style={{ margin: "0 auto" }}>
              Choose a convenient cab service for your Sikkim travel,
              sightseeing and tour requirements.
            </p>

            <div className="divider" aria-hidden="true" />
          </div>

          <div className="grid g4">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="card">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        className="section"
        aria-labelledby="sikkim-destinations-title"
      >
        <div className="container">
          <div className="center">
            <span className="eyebrow">Popular Destinations</span>

            <h2 id="sikkim-destinations-title" className="title">
              Explore <span>Sikkim by Cab</span>
            </h2>

            <p className="lead" style={{ margin: "0 auto" }}>
              Travel comfortably to popular tourist destinations across
              Sikkim with Gupta Cab Service.
            </p>

            <div className="divider" aria-hidden="true" />
          </div>

          <div className="grid g3">
            {DESTINATIONS.map((destination, index) => (
              <Reveal key={destination} delay={index * 0.05}>
                <article className="card">
                  <h3>{destination} Cab</h3>
                  <p>
                    Book a comfortable cab for travel to {destination} and
                    include it in your Sikkim travel itinerary.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section
        className="section alt"
        aria-labelledby="sikkim-routes-title"
      >
        <div className="container">
          <div className="center">
            <span className="eyebrow">Popular Routes</span>

            <h2 id="sikkim-routes-title" className="title">
              Travel to <span>Sikkim</span>
            </h2>

            <p className="lead" style={{ margin: "0 auto" }}>
              Cab services are available for popular travel routes connecting
              North Bengal with Sikkim.
            </p>

            <div className="divider" aria-hidden="true" />
          </div>

          <div className="grid g3">
            {ROUTES.map((route, index) => (
              <Reveal key={route} delay={index * 0.06}>
                <article className="card">
                  <h3>{route}</h3>
                  <p>
                    Plan your journey between the popular pickup locations and
                    Sikkim with a convenient cab service.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section
        className="section"
        aria-labelledby="why-sikkim-cab-title"
      >
        <div className="container">
          <div className="center">
            <span className="eyebrow">Travel With Confidence</span>

            <h2 id="why-sikkim-cab-title" className="title">
              Why Choose <span>Gupta Cab Service?</span>
            </h2>

            <div className="divider" aria-hidden="true" />
          </div>

          <div className="grid g3">
            <Reveal>
              <article className="card">
                <h3>Local Travel Experience</h3>
                <p>
                  Travel through Sikkim with drivers familiar with local
                  routes, destinations and travel conditions.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="card">
                <h3>Comfortable Travel</h3>
                <p>
                  Choose from available cab options according to your group,
                  destination and travel requirements.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="card">
                <h3>Easy Booking</h3>
                <p>
                  Contact Gupta Cab Service to discuss your Sikkim trip,
                  sightseeing plan or transfer requirements.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section alt" aria-labelledby="sikkim-faq-title">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Frequently Asked Questions</span>

            <h2 id="sikkim-faq-title" className="title">
              Sikkim Cab Service <span>FAQs</span>
            </h2>

            <div className="divider" aria-hidden="true" />
          </div>

          <div className="faq">
            {FAQS.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" aria-labelledby="sikkim-booking-title">
        <div className="container">
          <div className="banner">
            <h2 id="sikkim-booking-title">
              Planning a Trip to Sikkim?
            </h2>

            <p>
              Book a cab for Sikkim sightseeing, tours, transfers and
              outstation travel.
            </p>

            <Link
              to="/booking"
              className="btn"
              aria-label="Book a Sikkim cab with Gupta Cab Service"
            >
              Book a Sikkim Cab
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}