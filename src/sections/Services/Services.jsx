import { Link } from "react-router-dom";

import { FaCheckCircle, FaPlane } from "react-icons/fa";

import Reveal from "../../components/Reveal/Reveal";

import { SERVICES } from "../../data/content";

export default function Services() {
  return (
    <section
      className="section"
      aria-labelledby="services-title"
    >
      <div className="container split">
        <Reveal>
          <img
            src="/images/about-img.jpeg"
            alt="Gupta Cab Service travel and cab service in Sikkim"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <span className="eyebrow">
            Our Services
          </span>

          <h2
            id="services-title"
            className="title"
          >
            Every Journey,{" "}
            <span>Handled with Care</span>
          </h2>

          <ul className="ticks">
            {SERVICES.map((service) => (
              <li key={service}>
                <FaCheckCircle aria-hidden="true" />
                <span>{service}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/booking"
            className="btn btn-gold"
            aria-label="Plan your trip with Gupta Cab Service"
          >
            <FaPlane aria-hidden="true" />
            <span>Plan My Trip</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}