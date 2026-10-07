import { Link } from "react-router-dom";

import SectionHead from "../../components/SectionHead/SectionHead";
import Reveal from "../../components/Reveal/Reveal";

import { POPULAR_DESTINATIONS } from "../../site";

import "./Destinations.css";

export default function Destinations() {
  return (
    <section className="section alt">
      <div className="container">

        {/* SECTION HEADING */}
        <SectionHead
          eyebrow="Destinations"
          title="Popular"
          highlight="Tours"
        />

        {/* DESTINATION GRID */}
        <div className="grid g4">
          {POPULAR_DESTINATIONS.map((destination, i) => (
            <Reveal
              key={destination.name}
              delay={i * 0.1}
            >
              <Link
                to="/booking"
                className="dest"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
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