
import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaTimes,
} from "react-icons/fa";

import { API } from "../../api";
import {
  fetchReviews,
  readReviewsCache,
  writeReviewsCache,
} from "../../reviewsStore";

import "./Reviews.css";

const MAX_REVIEW_WORDS = 40;

// Trim any review to a maximum of 40 words.
const trimReview = (text = "") => {
  const words = String(text).trim().split(/\s+/).filter(Boolean);

  if (!text || words.length === 0) return "";

  return words.length > MAX_REVIEW_WORDS
    ? `${words.slice(0, MAX_REVIEW_WORDS).join(" ")}…`
    : words.join(" ");
};

// Count words while a user types.
const countWords = (text = "") =>
  text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;

// 3 cards on desktop, 2 on tablet, 1 on mobile.
const getPerPage = () => {
  if (typeof window === "undefined") return 3;

  if (window.matchMedia("(max-width: 600px)").matches) return 1;
  if (window.matchMedia("(max-width: 900px)").matches) return 2;

  return 3;
};

/* Loading skeleton */
function ReviewSkeleton() {
  return (
    <div className="reviews-slider-card" aria-hidden="true">
      <div className="card quote sk-card">
        <div className="stars sk-stars">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="sk sk-star" />
          ))}
        </div>

        <div className="sk-lines">
          <span className="sk sk-line" />
          <span className="sk sk-line" />
          <span className="sk sk-line short" />
        </div>

        <div className="who">
          <span className="sk sk-avatar" />
          <div>
            <span className="sk sk-name" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews({ limit }) {
  const [reviews, setReviews] = useState(
    () => readReviewsCache() || []
  );

  const [loading, setLoading] = useState(
    () => !readReviewsCache()
  );

  const [failed, setFailed] = useState(false);
  const [perPage, setPerPage] = useState(getPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reviewText, setReviewText] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const touchStartX = useRef(null);

  // Fetch reviews from the existing API.
  const loadReviews = async () => {
    try {
      setFailed(false);

      const list = await fetchReviews();
      setReviews(Array.isArray(list) ? list : []);
    } catch (error) {
      console.error("Failed to load reviews:", error);

      if (!readReviewsCache()) {
        setFailed(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  // Keep the slider responsive.
  useEffect(() => {
    const update = () => setPerPage(getPerPage());

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  // Home displays limited reviews; Testimonials displays all.
  const visibleReviews = limit
    ? reviews.slice(0, limit)
    : reviews;

  const totalPages = Math.ceil(
    visibleReviews.length / perPage
  );

  const currentReviews = visibleReviews.slice(
    currentPage * perPage,
    currentPage * perPage + perPage
  );

  useEffect(() => {
    if (totalPages > 0 && currentPage >= totalPages) {
      setCurrentPage(totalPages - 1);
    }
  }, [currentPage, totalPages]);

  const handlePrevious = () => {
    if (totalPages < 2) return;

    setCurrentPage((previous) =>
      previous > 0 ? previous - 1 : totalPages - 1
    );
  };

  const handleNext = () => {
    if (totalPages < 2) return;

    setCurrentPage((previous) =>
      previous < totalPages - 1 ? previous + 1 : 0
    );
  };

  // Touch swipe for phones and tablets.
  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || totalPages < 2) return;

    const difference =
      event.changedTouches[0].clientX - touchStartX.current;

    touchStartX.current = null;

    if (Math.abs(difference) < 50) return;

    if (difference < 0) handleNext();
    else handlePrevious();
  };

  const retry = () => {
    setLoading(true);
    loadReviews();
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

  const handleReviewChange = (event) => {
    const input = event.target.value;
    const words = input.trim().split(/\s+/).filter(Boolean);

    // Do not allow more than 40 words.
    if (words.length > MAX_REVIEW_WORDS) {
      setReviewText(words.slice(0, MAX_REVIEW_WORDS).join(" "));
    } else {
      setReviewText(input);
    }

    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !reviewText.trim()) {
      setMessage("Please fill all fields.");
      return;
    }

    if (countWords(reviewText) > MAX_REVIEW_WORDS) {
      setMessage("Your review must be 40 words or fewer.");
      return;
    }

    if (rating < 1 || rating > 5) {
      setMessage("Please select a rating.");
      return;
    }

    try {
      setSubmitting(true);
      setMessage("");

      const response = await fetch(`${API}/api/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          rating,
          review: trimReview(reviewText),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit review"
        );
      }

      // Preserve the existing cache and instant-update behaviour.
      if (result.data) {
        setReviews((previous) => {
          const updated = [
            result.data,
            ...previous.filter(
              (item) => item.id !== result.data.id
            ),
          ];

          writeReviewsCache(updated);
          return updated;
        });
      } else {
        await loadReviews();
      }

      setCurrentPage(0);
      setMessage(
        "Thank you! Your review has been submitted successfully."
      );

      setRating(5);
      setName("");
      setPhone("");
      setReviewText("");

      window.setTimeout(() => {
        setShowModal(false);
        setMessage("");
      }, 1500);
    } catch (error) {
      console.error("Review submission error:", error);

      setMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div
        className="reviews-slider"
        aria-busy="true"
        aria-label="Loading reviews"
      >
        <div className="reviews-slider-track">
          {[...Array(perPage)].map((_, index) => (
            <ReviewSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="reviews-slider">
        {visibleReviews.length > 0 ? (
          <>
            <div
              className="reviews-slider-track"
              key={currentPage}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {currentReviews.map((item, index) => (
                <div
                  className="reviews-slider-card"
                  key={item.id ?? `${item.name}-${index}`}
                >
                  <article
                    className="card quote rv-in"
                    style={{ animationDelay: `${index * 0.06}s` }}
                  >
                    <div
                      className="stars"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          aria-hidden="true"
                          style={{
                            opacity:
                              starIndex < Number(item.rating) ? 1 : 0.25,
                          }}
                        />
                      ))}
                    </div>

                    <p className="review-card-text">
                      {trimReview(item.review)}
                    </p>

                    <div className="who">
                      <i aria-hidden="true">
                        {item.name?.trim()?.charAt(0)?.toUpperCase() || "G"}
                      </i>

                      <div className="reviewer-details">
                        <b>{item.name || "Guest"}</b>
                        
                      </div>
                    </div>
                  </article>
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

                {totalPages > 6 ? (
                  <span className="reviews-slider-count">
                    {currentPage + 1} / {totalPages}
                  </span>
                ) : (
                  <div className="reviews-slider-dots">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`reviews-slider-dot ${
                          currentPage === index ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(index)}
                        aria-label={`Go to review page ${index + 1}`}
                        aria-current={
                          currentPage === index ? "page" : undefined
                        }
                      />
                    ))}
                  </div>
                )}

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
          <div className="reviews-empty">
            {failed ? (
              <>
                <p>Reviews could not be loaded right now.</p>
                <button
                  type="button"
                  className="write-review-btn"
                  onClick={retry}
                >
                  Try Again
                </button>
              </>
            ) : (
              <p>No reviews yet. Be the first to share your trip!</p>
            )}
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
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
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

            <form className="review-form" onSubmit={handleSubmit}>
              <div className="review-form-group">
                <label htmlFor="review-name">Your Name</label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="review-form-group">
                <label htmlFor="review-phone">Phone Number</label>
                <input
                  id="review-phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="review-form-group">
                <label>Rating</label>
                <div className="review-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={star <= rating ? "active" : ""}
                      onClick={() => setRating(star)}
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      aria-pressed={rating === star}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>

              <div className="review-form-group">
                <label htmlFor="review-text">Your Review</label>
                <textarea
                  id="review-text"
                  value={reviewText}
                  onChange={handleReviewChange}
                  placeholder="Share your travel experience..."
                  rows={5}
                  required
                />

                <small className="review-word-count">
                  {countWords(reviewText)}/{MAX_REVIEW_WORDS} words
                </small>
              </div>

              {message && (
                <p className="review-form-message" aria-live="polite">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="review-submit-btn"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

