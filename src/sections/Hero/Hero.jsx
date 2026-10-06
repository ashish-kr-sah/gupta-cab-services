import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { BRAND, TAGLINE } from "../../site";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <span className="eyebrow rise" style={{ animationDelay: "1.1s" }}>{TAGLINE}</span>
          <h1 className="rise" style={{ animationDelay: "1.2s" }}>Explore the <span>Himalayas</span> in Comfort & Style</h1>
          <p className="rise" style={{ animationDelay: "1.5s" }}>Premium cab service for Sikkim, Darjeeling, Kalimpong, Kolkata, Bihar, Jharkhand & all over India — pickup from Siliguri, NJP & Bagdogra Airport.</p>
          <div className="cta rise" style={{ animationDelay: "1.7s" }}>
            <Link to="/booking" className="btn btn-gold"><FaCar /> Book Your Cab</Link>
            <Link to="/gallery" className="btn btn-line">View Gallery</Link>
          </div>
        </div>
        <div className="hero-logo pop" style={{ animationDelay: "1s" }}>
          <img src="/images/logo.png" alt={`${BRAND} – Sikkim Tour Specialist`} />
        </div>
      </div>
    </section>
  );
}
