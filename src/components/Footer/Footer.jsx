import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BRAND, TAGLINE, PHONE, PHONE_FMT, EMAIL, LOCATION, NAV_LINKS } from "../../site";
import { SERVICES } from "../../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fcols">
          <div>
            <img className="flogo" src="/images/logo.png" alt={`${BRAND} logo`} />
            <p className="fabout">Safe, comfortable and reliable cab service across Sikkim, Darjeeling, Kalimpong, North Bengal, Kolkata, Bihar, Jharkhand & all over India. Your trusted Sikkim tour specialist.</p>
            <p className="ftag">{TAGLINE}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>{NAV_LINKS.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{SERVICES.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><FaPhoneAlt /> <a href={`tel:+91${PHONE}`}>{PHONE_FMT}</a></li>
              <li><FaEnvelope /> {EMAIL}</li>
              <li><FaMapMarkerAlt /> {LOCATION}</li>
              <li><Link to="/admin/login" className="adminlink">Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="credit">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.<br />
          Designed, Developed & Maintained by <b>Ashish Kumar Sah</b> · <a href="tel:+919647875878">9647875878</a>
        </div>
      </div>
    </footer>
  );
}
