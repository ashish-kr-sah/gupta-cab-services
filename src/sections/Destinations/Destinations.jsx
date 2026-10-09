import { Link } from "react-router-dom";

import SectionHead from "../../components/SectionHead/SectionHead";
import Reveal from "../../components/Reveal/Reveal";

import { POPULAR_DESTINATIONS } from "../../site";

import "./Destinations.css";

export default function Destinations() {
  return (
    <section
      className="section alt"
      aria-labelledby="popular-tours-title"
    >
      <div className="container">
        <SectionHead
          eyebrow="Destinations"
          title="Popular"
          highlight="Tours"
          id="popular-tours-title"
        />

        <div className="grid g4 dest-grid">
          {POPULAR_DESTINATIONS.map((destination, i) => (
            <Reveal
              key={destination.name}
              delay={i * 0.1}
            >
              <Link
                to="/booking"
                className="dest"
                aria-label={`Book a cab for ${destination.name}`}
              >
                <img
                  src={destination.image}
                  alt={`${destination.name} cab service - Gupta Cab Service`}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />

                <div>
                  <h3>{destination.name}</h3>

                  <p>
                    Tap to book this trip →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}