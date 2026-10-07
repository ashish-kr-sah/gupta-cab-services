import { useEffect, useRef, useState } from "react";

import "./Reveal.css";

// Scroll karne par content smoothly aata hai

export default function Reveal({
  children,
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      setShown(true);
      return;
    }

    // Reduced-motion users ke liye animation skip karo.
    if (
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      setShown(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}