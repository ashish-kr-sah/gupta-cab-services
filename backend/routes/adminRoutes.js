const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  createAdmin,
  loginAdmin,
  dashboard,
  getAdminBookings,
  deleteBooking,
  getAdminContacts,
  deleteContact,
} = require("../controllers/adminController");

const {
  getAdminReviews,
  deleteReview,
} = require("../controllers/adminReviewController");

const router = express.Router();

// ADMIN AUTH

router.post("/register", createAdmin);

router.post("/login", loginAdmin);

// DASHBOARD

router.get(
  "/dashboard",
  authMiddleware,
  dashboard
);

// BOOKINGS

router.get(
  "/booking",
  authMiddleware,
  getAdminBookings
);

router.delete(
  "/booking/:id",
  authMiddleware,
  deleteBooking
);

// CONTACTS

router.get(
  "/contact",
  authMiddleware,
  getAdminContacts
);

router.delete(
  "/contact/:id",
  authMiddleware,
  deleteContact
);

// REVIEWS

router.get(
  "/reviews",
  authMiddleware,
  getAdminReviews
);

router.delete(
  "/reviews/:id",
  authMiddleware,
  deleteReview
);

module.exports = router;