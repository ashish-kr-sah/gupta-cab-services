import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiArrowRight,
} from "react-icons/hi";
import { BRAND, TAGLINE, NAV_LINKS } from "../../site";
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

    window.addEventListener("scroll", handleScroll);

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
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
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
        >
          <img
            src="/images/logo.png"
            alt={`${BRAND} logo`}
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
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggleMenu}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
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
            NAVIGATION
        ===================================== */}

        <div
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

          <div className="mobile-menu-line"></div>


          {/* ===================================
              NAVIGATION LINKS
          =================================== */}

          <nav className="mobile-navigation">

            {NAV_LINKS.map(([to, label], index) => (
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

                <span className="mobile-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mobile-nav-text">
                  {label}
                </span>

                <HiArrowRight className="mobile-nav-arrow" />

              </NavLink>
            ))}

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

              <HiArrowRight />
            </Link>

          </div>


          {/* ===================================
              FOOTER
          =================================== */}

          <div className="mobile-menu-footer">
            <span>
              Explore Sikkim
            </span>

            <span className="footer-dot">
              •
            </span>

            <span>
              Travel With Us
            </span>
          </div>

        </div>


        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <ul className="links">

          {NAV_LINKS.map(([to, label]) => (
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
          ))}


          <li>
            <Link
              to="/booking"
              className="btn btn-gold book"
            >
              Book Now
            </Link>
          </li>

        </ul>

      </div>

    </header>
  );
}