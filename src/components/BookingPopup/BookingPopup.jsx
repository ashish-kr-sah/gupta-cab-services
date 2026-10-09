import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaTimes } from "react-icons/fa";

import { BRAND, TAGLINE } from "../../site";

import "./BookingPopup.css";

/*
  Booking popup
  - appears 7 seconds after the website is opened
  - user can close it with the cross button (or ESC)
  - if the user ignores it, it closes by itself after 5 seconds
  - shows once for every time the website is opened/reloaded
*/

const SHOW_AFTER_MS = 7000;
const AUTO_HIDE_MS = 5000;

// pages where the popup should not appear
const isHiddenPage = (pathname) =>
  pathname.startsWith("/booking") || pathname.startsWith("/admin");

export default function BookingPopup() {
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);

  const pathRef = useRef(pathname);
  const hideTimer = useRef(null);

  useEffect(() => {
    pathRef.current = pathname;
  }, [pathname]);

  const close = () => {
    clearTimeout(hideTimer.current);
    setVisible(false);
  };

  // 7 second timer starts once, when the site opens
  useEffect(() => {
    const showTimer = setTimeout(() => {
      // user is already on the booking page – nothing to show
      if (isHiddenPage(pathRef.current)) return;

      setVisible(true);

      // user did nothing → remove it automatically after 5 sec
      hideTimer.current = setTimeout(() => {
        setVisible(false);
      }, AUTO_HIDE_MS);
    }, SHOW_AFTER_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer.current);
    };
  }, []);

  // ESC key closes the popup
  useEffect(() => {
    if (!visible) return undefined;

    const onKey = (event) => {
      if (event.key === "Escape") {
        clearTimeout(hideTimer.current);
        setVisible(false);
      }
    };

    document.addEventListener("keydown", onKey);

    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible || isHiddenPage(pathname)) return null;

  return (
    <aside
      className="bpop"
      role="dialog"
      aria-modal="false"
      aria-labelledby="bpop-title"
      aria-describedby="bpop-text"
    >
      <button
        type="button"
        className="bpop-close"
        onClick={close}
        aria-label="Close booking popup"
      >
        <FaTimes aria-hidden="true" />
      </button>

      <div className="bpop-head">
        <img
          src="/images/logo.png"
          alt=""
          width="56"
          height="56"
          decoding="async"
        />

        <div>
          <span className="bpop-eyebrow">{TAGLINE}</span>
          <strong className="bpop-brand">{BRAND}</strong>
        </div>
      </div>

      <h2 id="bpop-title">Book Now &amp; Travel with Raunak</h2>

      <p id="bpop-text">
        Cabs for Sikkim, Darjeeling, Kalimpong &amp; all over India.
        We confirm within 20 minutes.
      </p>

      <Link
        to="/booking"
        className="btn btn-gold bpop-btn"
        onClick={close}
        aria-label="Book a cab with Gupta Cab Service now"
      >
        <FaCar aria-hidden="true" />
        <span>Book Now</span>
      </Link>

      <span className="bpop-bar" aria-hidden="true" />
    </aside>
  );
}
