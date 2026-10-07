import Reveal from "../Reveal/Reveal";

export default function SectionHead({
  eyebrow,
  title,
  highlight,
  text,
  id,
}) {
  return (
    <Reveal className="center">
      <span className="eyebrow">{eyebrow}</span>

      <h2
        id={id}
        className="title"
      >
        {title} <span>{highlight}</span>
      </h2>

      {text && (
        <p className="lead">
          {text}
        </p>
      )}

      <div
        className="divider"
        aria-hidden="true"
      />
    </Reveal>
  );
}