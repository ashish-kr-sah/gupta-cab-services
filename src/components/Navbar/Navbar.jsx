import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
  HiMenuAlt3,
  HiX,
  HiArrowRight,
} from "react-icons/hi";

import {
  BRAND,
  TAGLINE,
  NAV_LINKS,
} from "../../site";

import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  const { pathname } = useLocation();

  /* =========================================
     NAVBAR SCROLL EFFECT
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     CLOSE MENU WHEN ROUTE CHANGES
  ========================================= */

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================
     ESC KEY
  ========================================= */

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [open]);

  /* =========================================
     CLOSE MENU
  ========================================= */

  const closeMenu = () => {
    setOpen(false);
  };

  /* =========================================
     TOGGLE MENU
  ========================================= */

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header
      className={`nav ${solid ? "solid" : ""} ${
        open ? "menu-active" : ""
      }`}
    >
      <div className="container">

        {/* =====================================
            BRAND
        ===================================== */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label={`${BRAND} home`}
        >
          <img
            src="/images/logo.png"
            alt={`${BRAND} logo`}
            width="120"
            height="120"
            decoding="async"
          />

          <span>
            <b>{BRAND}</b>
            <small>{TAGLINE}</small>
          </span>
        </Link>

        {/* =====================================
            MOBILE MENU BUTTON
        ===================================== */}

        <button
          type="button"
          className={`burger ${
            open ? "is-open" : ""
          }`}
          aria-label={
            open ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation-menu"
          onClick={toggleMenu}
        >
          {open ? (
            <HiX aria-hidden="true" />
          ) : (
            <HiMenuAlt3 aria-hidden="true" />
          )}
        </button>

        {/* =====================================
            MOBILE OVERLAY
        ===================================== */}

        <div
          className={`menu-overlay ${
            open ? "show" : ""
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* =====================================
            MOBILE NAVIGATION
        ===================================== */}

        <div
          id="mobile-navigation-menu"
          className={`mobile-menu ${
            open ? "open" : ""
          }`}
        >

          {/* ===================================
              MOBILE MENU TOP
          =================================== */}

          <div className="mobile-menu-top">
            <div className="mobile-menu-brand">
              <img
                src="/images/logo.png"
                alt={`${BRAND} logo`}
                width="80"
                height="80"
                decoding="async"
              />

              <div>
                <strong>{BRAND}</strong>
                <span>{TAGLINE}</span>
              </div>
            </div>

            <span className="mobile-menu-label">
              MENU
            </span>
          </div>

          {/* ===================================
              GOLD LINE
          =================================== */}

          <div
            className="mobile-menu-line"
            aria-hidden="true"
          />

          {/* ===================================
              NAVIGATION LINKS
          =================================== */}

          <nav
            className="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(
              ([to, label], index) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mobile-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  <span
                    className="mobile-nav-number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="mobile-nav-text">
                    {label}
                  </span>

                  <HiArrowRight
                    className="mobile-nav-arrow"
                    aria-hidden="true"
                  />
                </NavLink>
              )
            )}
          </nav>

          {/* ===================================
              BOOKING BUTTON
          =================================== */}

          <div className="mobile-booking">
            <Link
              to="/booking"
              className="mobile-book-btn"
              onClick={closeMenu}
            >
              <span>Book Your Journey</span>

              <HiArrowRight aria-hidden="true" />
            </Link>
          </div>

          {/* ===================================
              FOOTER
          =================================== */}

          <div className="mobile-menu-footer">
            <span>Explore Sikkim</span>

            <span
              className="footer-dot"
              aria-hidden="true"
            >
              •
            </span>

            <span>Travel With Us</span>
          </div>
        </div>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <nav aria-label="Main navigation">
          <ul className="links">
            {NAV_LINKS.map(
              ([to, label]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      isActive ? "active" : ""
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              )
            )}

            <li>
              <Link
                to="/booking"
                className="btn btn-gold book"
                aria-label="Book a cab with Gupta Cab Service"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}