const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookings,
  deleteBooking
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");


// ==========================
// Customer Booking Submit
// ==========================
router.post("/", createBooking);


// ==========================
// Admin - Get All Bookings
// ==========================
router.get("/", authMiddleware, getBookings);


// ==========================
// Admin - Delete Booking
// ==========================
router.delete("/:id", authMiddleware, deleteBooking);


module.exports = router;