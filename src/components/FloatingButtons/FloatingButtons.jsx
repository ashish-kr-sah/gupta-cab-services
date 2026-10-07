import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  PHONE,
  WHATSAPP,
} from "../../site";

import "./FloatingButtons.css";

export default function FloatingButtons() {
  return (
    <div
      className="float-btns"
      aria-label="Quick contact options"
    >
      <a
        className="fb wa"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Gupta Cab Service on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>

      <a
        className="fb ph"
        href={`tel:+91${PHONE}`}
        aria-label="Call Gupta Cab Service"
      >
        <FaPhoneAlt
          size={20}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}