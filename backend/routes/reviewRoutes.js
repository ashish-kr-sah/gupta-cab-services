const express = require("express");

const {
  createReview,
  getReviews,
} = require("../controllers/reviewController");

const router = express.Router();

// ==========================
// Public Review Routes
// ==========================

// Get all public reviews
router.get("/", getReviews);

// Submit a new review
router.post("/", createReview);

module.exports = router;