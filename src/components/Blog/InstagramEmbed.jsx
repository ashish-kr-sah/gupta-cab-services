import { useEffect, useMemo, useState } from "react";
import "./InstagramEmbed.css";

/* Instagram embed.js sirf ek baar load hoti hai */
let scriptPromise;
const loadInstagram = () => {
  if (window.instgrm) return Promise.resolve(window.instgrm);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      s.onload = () => resolve(window.instgrm);
      s.onerror = () => resolve(null);
      document.body.appendChild(s);
    });
  }
  return scriptPromise;
};

export default function InstagramEmbed({ url }) {
  const [fullscreen, setFullscreen] = useState(false);

  /* blockquote ek hi baar banta hai – React isko dobara touch nahi karta, isliye duplicate/hilna nahi hota */
  const html = useMemo(
    () => ({
      __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
    }),
    [url]
  );

  useEffect(() => {
    let alive = true;
    loadInstagram().then((ig) => {
      if (alive && ig?.Embeds) ig.Embeds.process();
    });
    return () => { alive = false; };
  }, [url]);

  /* Fullscreen: ESC se band + background scroll lock */
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e) => e.key === "Escape" && setFullscreen(false);
    window.addEventListener("keydown", onKey);
    document.body.classList.add("ig-fullscreen-active");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("ig-fullscreen-active");
    };
  }, [fullscreen]);

  if (!url) return null;

  return (
    <div className="ig-slot">
      <div
        className={`ig-wrapper ${fullscreen ? "is-fullscreen" : ""}`}
        onClick={(e) => { if (fullscreen && e.target === e.currentTarget) setFullscreen(false); }}
      >
        <div className="ig-embed-container" dangerouslySetInnerHTML={html} />

        {fullscreen && (
          <button type="button" className="ig-close-btn" onClick={() => setFullscreen(false)} aria-label="Close">×</button>
        )}
      </div>

      {!fullscreen && (
        <button type="button" className="ig-full-btn" onClick={() => setFullscreen(true)}>
          <span>⛶</span> Full Size
        </button>
      )}
    </div>
  );
}