const Review = require("../models/Review");

// ==========================
// Create Review
// ==========================

const createReview = async (req, res) => {
  try {
    const { name, phone, rating, review } = req.body;

    // ==========================
    // Validate Required Fields
    // ==========================

    if (!name || !phone || !rating || !review) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ==========================
    // Validate Rating
    // ==========================

    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    // ==========================
    // Create Review
    // ==========================

    const newReview = await Review.create({
      name: name.trim(),
      phone: phone.trim(),
      rating: numericRating,
      review: review.trim(),
    });

    // ==========================
    // Public Response
    // Phone is intentionally hidden
    // ==========================

    return res.status(201).json({
      success: true,
      message: "Review submitted successfully",
      data: {
        id: newReview.id,
        name: newReview.name,
        rating: newReview.rating,
        review: newReview.review,
        createdAt: newReview.createdAt,
      },
    });
  } catch (error) {
    console.error("❌ Create Review Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// ==========================
// Get Public Reviews
// ==========================

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      attributes: [
        "id",
        "name",
        "rating",
        "review",
        "createdAt",
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error("❌ Get Reviews Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createReview,
  getReviews,
};