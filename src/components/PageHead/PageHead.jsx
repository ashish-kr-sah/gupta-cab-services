import "./PageHead.css";

export default function PageHead({
  title,
  highlight,
  text,
}) {
  return (
    <header
      className="page-head"
      aria-labelledby="page-title"
    >
      <div className="container rise">
        <h1 id="page-title">
          {title} <span>{highlight}</span>
        </h1>

        <p className="lead">
          {text}
        </p>
      </div>
    </header>
  );
}