import { FAQS } from "../../data/content";

import "./Faq.css";

export default function Faq() {
  return (
    <div className="faq">
      {FAQS.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>

          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}