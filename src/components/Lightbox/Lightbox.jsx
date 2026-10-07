import { useEffect } from "react";

import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./Lightbox.css";

export default function Lightbox({
  images = [],
  selectedIndex,
  onClose,
  onChange,
}) {
  const isOpen =
    selectedIndex !== null &&
    selectedIndex >= 0 &&
    selectedIndex < images.length;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onChange((selectedIndex + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        onChange(
          (selectedIndex - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [
    isOpen,
    selectedIndex,
    images.length,
    onClose,
    onChange,
  ]);

  if (!isOpen) {
    return null;
  }

  const previousImage = () => {
    onChange(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    onChange(
      (selectedIndex + 1) % images.length
    );
  };

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gupta Cab Service travel gallery"
    >
      {/* CLOSE BUTTON */}
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <FaTimes aria-hidden="true" />
      </button>

      {/* IMAGE COUNTER */}
      <div
        className="lightbox-counter"
        aria-live="polite"
      >
        {selectedIndex + 1} / {images.length}
      </div>

      {/* PREVIOUS */}
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          previousImage();
        }}
        aria-label="Previous gallery image"
      >
        <FaChevronLeft aria-hidden="true" />
      </button>

      {/* IMAGE */}
      <div
        className="lightbox-content"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          key={images[selectedIndex]}
          src={images[selectedIndex]}
          alt={`Gupta Cab Service travel gallery photo ${
            selectedIndex + 1
          }`}
          decoding="async"
        />
      </div>

      {/* NEXT */}
      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          nextImage();
        }}
        aria-label="Next gallery image"
      >
        <FaChevronRight aria-hidden="true" />
      </button>

      {/* BOTTOM INFO */}
      <div className="lightbox-bottom">
        <span>Gupta Cab Service</span>
        <span aria-hidden="true">•</span>
        <span>Travel Moments</span>
      </div>
    </div>
  );
}