import { Link } from "react-router-dom";

import Reveal from "../../components/Reveal/Reveal";

import "./CtaBanner.css";

export default function CtaBanner() {
  return (
    <section
      className="section"
      aria-labelledby="cta-title"
    >
      <div className="container">
        <Reveal>
          <div className="banner">
            <h2 id="cta-title">
              Ready for your next journey?
            </h2>

            <p>
              Book now – our team will confirm within 20 minutes.
            </p>

            <Link
              to="/booking"
              className="btn"
              aria-label="Book a cab with Gupta Cab Service now"
            >
              Book a Cab Now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}