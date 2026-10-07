import { FaShieldAlt, FaClock, FaRupeeSign, FaMountain } from "react-icons/fa";
import SectionHead from "../../components/SectionHead/SectionHead";
import Reveal from "../../components/Reveal/Reveal";
import { WHY } from "../../data/content";

export default function WhyChoose() {
  const icons = [FaShieldAlt, FaClock, FaRupeeSign, FaMountain];

  return (
    <section className="section" aria-labelledby="why-choose-title">
      <div className="container">
        <SectionHead
          eyebrow="Why Choose Us"
          title="Travel With"
          highlight="Confidence"
          id="why-choose-title"
        />

        <div className="grid g4">
          {WHY.map(([title, text], index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal key={title} delay={index * 0.08}>
                <article className="card">
                  <div className="ico" aria-hidden="true">
                    <Icon />
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}