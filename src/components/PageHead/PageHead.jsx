import "./PageHead.css";

export default function PageHead({ title, highlight, text }) {
  return (
    <div className="page-head">
      <div className="container rise">
        <h1>{title} <span>{highlight}</span></h1>
        <p className="lead">{text}</p>
      </div>
    </div>
  );
}
