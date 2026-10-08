const Review = require("../models/Review");

// GET ALL REVIEWS FOR ADMIN

const getAdminReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    console.error(
      "❌ Admin Get Reviews Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE REVIEW

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByPk(id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    await review.destroy();

    return res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    console.error(
      "❌ Admin Delete Review Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAdminReviews,
  deleteReview,
};