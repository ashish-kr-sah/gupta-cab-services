import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCar } from "react-icons/fa";

import { FAQS } from "../../data/content";
import { PHONE, PHONE_FMT } from "../../site";

import "./Faq.css";

// FAQPage structured data (matches the visible FAQ text) for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Faq() {
  return (
    <div className="faq">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {FAQS.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>

          <p>{answer}</p>

          <div className="faq-actions">
            <a
              href={`tel:+91${PHONE}`}
              className="faq-btn faq-call"
              aria-label={`Call Gupta Cab Service on ${PHONE_FMT}`}
            >
              <FaPhoneAlt aria-hidden="true" />
              <span>Call {PHONE_FMT}</span>
            </a>

            <Link
              to="/booking"
              className="faq-btn faq-book"
              aria-label="Book a cab online with Gupta Cab Service"
            >
              <FaCar aria-hidden="true" />
              <span>Book Online</span>
            </Link>
          </div>
        </details>
      ))}
    </div>
  );
}
