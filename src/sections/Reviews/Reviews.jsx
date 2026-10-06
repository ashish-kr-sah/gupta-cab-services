import { FaStar } from "react-icons/fa";
import Reveal from "../../components/Reveal/Reveal";
import { REVIEWS } from "../../data/content";
import "./Reviews.css";

export default function Reviews({ limit }) {
  return (
    <div className="grid g3">
      {REVIEWS.slice(0, limit || REVIEWS.length).map(([name, city, text], i) => (
        <Reveal key={name} delay={i * 0.08}>
          <div className="card quote">
            <div className="stars">{[...Array(5)].map((_, k) => <FaStar key={k} />)}</div>
            <p>{text}</p>
            <div className="who"><i>{name[0]}</i><div><b>{name}</b><br /><small>{city}</small></div></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
