import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { PHONE, WHATSAPP } from "../../site";
import "./FloatingButtons.css";

export default function FloatingButtons() {
  return (
    <div className="float-btns">
      <a className="fb wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
      <a className="fb ph" href={`tel:+91${PHONE}`} aria-label="Call"><FaPhoneAlt size={20} /></a>
    </div>
  );
}
