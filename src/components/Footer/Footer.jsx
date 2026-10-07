import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  BRAND,
  TAGLINE,
  PHONE,
  PHONE_FMT,
  EMAIL,
  LOCATION,
  NAV_LINKS,
} from "../../site";

import { SERVICES } from "../../data/content";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fcols">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              aria-label={`${BRAND} home`}
            >
              <img
                className="flogo"
                src="/images/logo.png"
                alt={`${BRAND} logo`}
                width="120"
                height="120"
                loading="lazy"
                decoding="async"
              />
            </Link>

            <p className="fabout">
              Safe, comfortable and reliable cab
              service across Sikkim, Darjeeling,
              Kalimpong, North Bengal, Kolkata,
              Bihar, Jharkhand &amp; all over India.
              Your trusted Sikkim tour specialist.
            </p>

            <p className="ftag">{TAGLINE}</p>
          </div>

          {/* QUICK LINKS */}
          <nav aria-label="Footer navigation">
            <h4>Quick Links</h4>

            <ul>
              {NAV_LINKS.map(([to, label]) => (
                <li key={to}>
                  <Link to={to}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <div>
            <h4>Services</h4>

            <ul>
              {SERVICES.map((service) => (
                <li key={service}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4>Contact</h4>

            <ul>
              <li>
                <FaPhoneAlt
                  aria-hidden="true"
                />

                <a
                  href={`tel:+91${PHONE}`}
                  aria-label={`Call ${BRAND} at ${PHONE_FMT}`}
                >
                  {PHONE_FMT}
                </a>
              </li>

              <li>
                <FaEnvelope
                  aria-hidden="true"
                />

                <a
                  href={`mailto:${EMAIL}`}
                  aria-label={`Email ${BRAND}`}
                >
                  {EMAIL}
                </a>
              </li>

              <li>
                <FaMapMarkerAlt
                  aria-hidden="true"
                />

                <span>{LOCATION}</span>
              </li>

              <li>
                <Link
                  to="/admin/login"
                  className="adminlink"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="credit">
          © {new Date().getFullYear()} {BRAND}.
          All rights reserved.
          <br />

          Designed, Developed &amp; Maintained by{" "}
          <b>Ashish Kumar Sah</b>
          {" · "}

          <a
            href="tel:+919647875878"
            aria-label="Call Ashish Kumar Sah"
          >
            9647875878
          </a>
        </div>
      </div>
    </footer>
  );
}