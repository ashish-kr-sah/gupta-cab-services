import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";

import { BRAND, TAGLINE } from "../../site";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div>
          <span
            className="eyebrow rise"
            style={{ animationDelay: "1.1s" }}
          >
            {TAGLINE}
          </span>

          <h1
            id="hero-title"
            className="rise"
            style={{ animationDelay: "1.2s" }}
          >
            Explore the <span>Himalayas</span> in Comfort &amp; Style
          </h1>

          <p
            className="rise"
            style={{ animationDelay: "1.5s" }}
          >
            Premium cab service for Sikkim, Darjeeling, Kalimpong,
            Kolkata, Bihar, Jharkhand &amp; all over India — pickup
            from Siliguri, NJP &amp; Bagdogra Airport.
          </p>

          <div
            className="cta rise"
            style={{ animationDelay: "1.7s" }}
          >
            <Link
              to="/booking"
              className="btn btn-gold"
              aria-label="Book a cab with Gupta Cab Service"
            >
              <FaCar aria-hidden="true" />
              <span>Book Your Cab</span>
            </Link>

            <Link
              to="/gallery"
              className="btn btn-line"
              aria-label="View Gupta Cab Service gallery"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div
          className="hero-logo pop"
          style={{ animationDelay: "1s" }}
        >
          <img
            src="/images/logo.png"
            alt={`${BRAND} – Sikkim Tour Specialist`}
            width="500"
            height="500"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}