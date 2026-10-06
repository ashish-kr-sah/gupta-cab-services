import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// Scroll karne par content smoothly aata hai
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { rootMargin: "0px 0px -60px 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}
