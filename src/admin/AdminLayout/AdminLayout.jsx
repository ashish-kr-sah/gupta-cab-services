import { useState } from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaCar,
  FaEnvelope,
  FaStar,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

import { BRAND } from "../../site";

import "./AdminLayout.css";

const LINKS = [
  ["/admin/dashboard", FaTachometerAlt, "Dashboard"],
  ["/admin/bookings", FaCar, "Bookings"],
  ["/admin/contacts", FaEnvelope, "Contacts"],
  ["/admin/reviews", FaStar, "Reviews"],
];

export default function AdminLayout() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    navigate("/admin/login");
  };

  const visitWebsite = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="admin">
      <aside className={`side ${open ? "open" : ""}`}>
        <div className="brand">
          <img src="/images/logo.png" alt="" />

          <span>
            <b>Gupta Cab</b>
            <small>Admin Panel</small>
          </span>
        </div>

        {LINKS.map(([to, Icon, label]) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setOpen(false)}
          >
            <Icon />
            {label}
          </NavLink>
        ))}

        <button
          type="button"
          onClick={visitWebsite}
        >
          <FaHome />
          Home / Visit Website
        </button>

        <button
          type="button"
          onClick={logout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>

      <div>
        <div className="atop">
          <b>{BRAND} Admin</b>

          <button
            type="button"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <main className="amain">
          <Outlet />
        </main>
      </div>
    </div>
  );
}