import { FaShieldAlt, FaClock, FaRupeeSign, FaMountain } from "react-icons/fa";
import SectionHead from "../../components/SectionHead/SectionHead";
import Reveal from "../../components/Reveal/Reveal";
import { WHY } from "../../data/content";

const ICONS = { shield: FaShieldAlt, clock: FaClock, rupee: FaRupeeSign, mountain: FaMountain };

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Why Us" title="Why Choose" highlight="Gupta Cab Service" text="Trusted by travellers exploring Sikkim, Darjeeling, Kalimpong, Kolkata, Bihar, Jharkhand & all over India." />
        <div className="grid g4">
          {WHY.map(([icon, title, text], i) => {
            const Icon = ICONS[icon];
            return <Reveal key={title} delay={i * 0.1}><div className="card"><div className="ico"><Icon /></div><h3>{title}</h3><p>{text}</p></div></Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}
