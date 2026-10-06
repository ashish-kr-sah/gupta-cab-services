import { FAQS } from "../../data/content";
import "./Faq.css";

export default function Faq() {
  return (
    <div className="faq">
      {FAQS.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </div>
  );
}
