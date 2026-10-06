import { Link } from "react-router-dom";

import SectionHead from "../../components/SectionHead/SectionHead";
import Reveal from "../../components/Reveal/Reveal";

import { FEATURED_DESTS } from "../../data/content";

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
          {FEATURED_DESTS.map(([name, img], i) => (
            <Reveal
              key={name}
              delay={i * 0.1}
            >
              <Link
                to="/booking"
                className="dest"
              >
                <img
                  src={`/images/${img}`}
                  alt={name}
                  loading="lazy"
                />

                <div>
                  <h3>{name}</h3>

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