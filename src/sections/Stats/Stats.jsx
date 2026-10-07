import Reveal from "../../components/Reveal/Reveal";

import { STATS } from "../../data/content";

import "./Stats.css";

export default function Stats() {
  return (
    <div className="container stats">
      {STATS.map(([num, label], i) => (
        <Reveal key={label} delay={i * 0.1}>
          <div className="stat">
            <b>{num}</b>
            <span>{label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}