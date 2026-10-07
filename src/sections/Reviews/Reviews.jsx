import { FaStar } from "react-icons/fa";

import Reveal from "../../components/Reveal/Reveal";

import { REVIEWS } from "../../data/content";

import "./Reviews.css";

export default function Reviews({ limit }) {
  const visibleReviews = REVIEWS.slice(
    0,
    limit || REVIEWS.length
  );

  return (
    <div className="grid g3">
      {visibleReviews.map(([name, city, text], i) => (
        <Reveal
          key={name}
          delay={i * 0.08}
        >
          <div className="card quote">
            <div
              className="stars"
              aria-label="5 out of 5 stars"
            >
              {[...Array(5)].map((_, k) => (
                <FaStar
                  key={k}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p>{text}</p>

            <div className="who">
              <i aria-hidden="true">
                {name[0]}
              </i>

              <div>
                <b>{name}</b>
                <br />
                <small>{city}</small>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}