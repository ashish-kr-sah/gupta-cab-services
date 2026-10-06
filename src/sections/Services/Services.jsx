import { Link } from "react-router-dom";
import { FaCheckCircle, FaPlane } from "react-icons/fa";
import Reveal from "../../components/Reveal/Reveal";
import { SERVICES } from "../../data/content";

export default function Services() {
  return (
    <section className="section">
      <div className="container split">
        <Reveal><img src="/images/about-img.jpeg" alt="Travel with us" loading="lazy" /></Reveal>
        <Reveal delay={0.15}>
          <span className="eyebrow">Our Services</span>
          <h2 className="title">Every Journey, <span>Handled with Care</span></h2>
          <ul className="ticks">{SERVICES.map((s) => <li key={s}><FaCheckCircle />{s}</li>)}</ul>
          <Link to="/booking" className="btn btn-gold"><FaPlane /> Plan My Trip</Link>
        </Reveal>
      </div>
    </section>
  );
}
