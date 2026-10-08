import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaTimes } from "react-icons/fa";

import Reveal from "../../components/Reveal/Reveal";

import "./Reviews.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Reviews({ limit }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reviewText, setReviewText] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const fetchReviews = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/reviews`);
      const result = await response.json();

      if (result.success) {
        setReviews(result.data || []);
      }
    } catch (error) {
      console.error("Failed to load reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  /*
    Home:
    latest 9 reviews

    Testimonials:
    all reviews
  */
  const visibleReviews = limit
    ? reviews.slice(0, limit)
    : reviews;

  /*
    Show 3 reviews per slider page
  */
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(
    visibleReviews.length / reviewsPerPage
  );

  const currentReviews = visibleReviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [currentPage, totalPages]);

  const handlePrevious = () => {
    setCurrentPage((prev) =>
      prev > 0 ? prev - 1 : totalPages - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      prev < totalPages - 1 ? prev + 1 : 0
    );
  };

  const openModal = () => {
    setMessage("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (submitting) return;

    setShowModal(false);
    setMessage("");

    setRating(5);
    setName("");
    setPhone("");
    setReviewText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !reviewText.trim()) {
      setMessage("Please fill all fields.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setMessage("Please select a rating.");
      return;
    }

    try {
      setSubmitting(true);
      setMessage("");

      const response = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          rating,
          review: reviewText.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit review"
        );
      }

      /*
        New review is returned from backend.
        Add it at the beginning so it appears immediately.
      */
      if (result.data) {
        setReviews((prev) => [
          result.data,
          ...prev.filter(
            (item) => item.id !== result.data.id
          ),
        ]);
      } else {
        await fetchReviews();
      }

      setCurrentPage(0);

      setMessage(
        "Thank you! Your review has been submitted successfully."
      );

      setRating(5);
      setName("");
      setPhone("");
      setReviewText("");

      setTimeout(() => {
        setShowModal(false);
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error("Review submission error:", error);

      setMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="reviews-slider">
        <div className="grid g3">
          <p>Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="reviews-slider">
        {visibleReviews.length > 0 ? (
          <>
            <div className="reviews-slider-track">
              {currentReviews.map((item, i) => (
                <div
                  className="reviews-slider-card"
                  key={item.id}
                >
                  <Reveal delay={i * 0.08}>
                    <div className="card quote">
                      <div
                        className="stars"
                        aria-label={`${item.rating} out of 5 stars`}
                      >
                        {[...Array(5)].map((_, k) => (
                          <FaStar
                            key={k}
                            aria-hidden="true"
                            style={{
                              opacity:
                                k < item.rating
                                  ? 1
                                  : 0.25,
                            }}
                          />
                        ))}
                      </div>

                      <p>{item.review}</p>

                      <div className="who">
                        <i aria-hidden="true">
                          {item.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </i>

                        <div>
                          <b>{item.name}</b>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="reviews-slider-controls">
                <button
                  type="button"
                  className="reviews-slider-btn"
                  onClick={handlePrevious}
                  aria-label="Previous reviews"
                >
                  <FaChevronLeft />
                </button>

                <div className="reviews-slider-dots">
                  {[...Array(totalPages)].map(
                    (_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`reviews-slider-dot ${
                          currentPage === index
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setCurrentPage(index)
                        }
                        aria-label={`Go to review page ${
                          index + 1
                        }`}
                      />
                    )
                  )}
                </div>

                <button
                  type="button"
                  className="reviews-slider-btn"
                  onClick={handleNext}
                  aria-label="Next reviews"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="grid g3">
            <p>No reviews available yet.</p>
          </div>
        )}
      </div>

      <div className="write-review-wrap">
        <button
          type="button"
          className="write-review-btn"
          onClick={openModal}
        >
          Write a Review
        </button>
      </div>

      {showModal && (
        <div
          className="review-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Write a Review"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="review-modal">
            <button
              type="button"
              className="review-modal-close"
              onClick={closeModal}
              aria-label="Close review form"
            >
              <FaTimes />
            </button>

            <h3>Write a Review</h3>

            <form
              className="review-form"
              onSubmit={handleSubmit}
            >
              <div className="review-form-group">
                <label htmlFor="review-name">
                  Your Name
                </label>

                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="review-form-group">
                <label htmlFor="review-phone">
                  Phone Number
                </label>

                <input
                  id="review-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="review-form-group">
                <label>Rating</label>

                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <button
                        key={star}
                        type="button"
                        className={
                          star <= rating
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          setRating(star)
                        }
                        aria-label={`${star} star${
                          star > 1 ? "s" : ""
                        }`}
                      >
                        <FaStar />
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="review-form-group">
                <label htmlFor="review-text">
                  Your Review
                </label>

                <textarea
                  id="review-text"
                  value={reviewText}
                  onChange={(e) =>
                    setReviewText(e.target.value)
                  }
                  placeholder="Write your experience..."
                  required
                />
              </div>

              {message && (
                <p
                  className="review-form-message"
                  aria-live="polite"
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="review-submit-btn"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}