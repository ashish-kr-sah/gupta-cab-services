import { FaCheckCircle } from "react-icons/fa";

import PageHead from "../../components/PageHead/PageHead";
import Reveal from "../../components/Reveal/Reveal";
import WhyChoose from "../../sections/WhyChoose/WhyChoose";

const POINTS = [
  "Experienced local drivers",
  "Clean, sanitized & well-maintained cars",
  "Customised Sikkim, Darjeeling & Kalimpong itineraries",
  "Outstation trips to Kolkata, Bihar, Jharkhand & all over India",
  "Honest pricing, 24×7 support",
];

export default function About() {
  return (
    <>
      <PageHead
        title="About"
        highlight="Us"
        text="Travel with Raunak – driven by passion for the mountains."
      />

      <section
        className="section"
        aria-labelledby="journey-partner-title"
      >
        <div className="container split">
          <Reveal>
            <img
              src="/images/about-img.jpeg"
              alt="Gupta Cab Service - trusted cab service for Sikkim travel"
              loading="lazy"
              decoding="async"
              width="800"
              height="600"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <span className="eyebrow">
              Our Story
            </span>

            <h2
              id="journey-partner-title"
              className="title"
            >
              Your Trusted{" "}
              <span>Journey Partner</span>
            </h2>

            <p
              className="lead"
              style={{ marginBottom: 14 }}
            >
              Gupta Cab Service started with a simple promise:
              safe, comfortable and honest travel. From Siliguri
              and NJP to Gangtok, Lachung, Darjeeling, Kalimpong
              and beyond to Kolkata, Bihar and Jharkhand, we take
              families, couples and groups wherever they want to go.
            </p>

            <ul className="ticks">
              {POINTS.map((point) => (
                <li key={point}>
                  <FaCheckCircle aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <WhyChoose />
    </>
  );
}