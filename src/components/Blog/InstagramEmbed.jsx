import { useEffect, useMemo, useState } from "react";

import "./InstagramEmbed.css";

/* Instagram embed.js sirf ek baar load hoti hai */
let scriptPromise;

const loadInstagram = () => {
  if (window.instgrm) {
    return Promise.resolve(window.instgrm);
  }

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;

      script.onload = () => resolve(window.instgrm);
      script.onerror = () => resolve(null);

      document.body.appendChild(script);
    });
  }

  return scriptPromise;
};

export default function InstagramEmbed({ url }) {
  const [fullscreen, setFullscreen] = useState(false);

  /* Blockquote ek hi baar banta hai */
  const html = useMemo(
    () => ({
      __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>`,
    }),
    [url]
  );

  useEffect(() => {
    let alive = true;

    loadInstagram().then((ig) => {
      if (alive && ig?.Embeds) {
        ig.Embeds.process();
      }
    });

    return () => {
      alive = false;
    };
  }, [url]);

  /* Fullscreen: ESC se band + background scroll lock */
  useEffect(() => {
    if (!fullscreen) return;

    const onKey = (event) => {
      if (event.key === "Escape") {
        setFullscreen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.classList.add("ig-fullscreen-active");

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("ig-fullscreen-active");
    };
  }, [fullscreen]);

  if (!url) {
    return null;
  }

  return (
    <div className="ig-slot">
      <div
        className={`ig-wrapper ${
          fullscreen ? "is-fullscreen" : ""
        }`}
        onClick={(event) => {
          if (
            fullscreen &&
            event.target === event.currentTarget
          ) {
            setFullscreen(false);
          }
        }}
      >
        <div
          className="ig-embed-container"
          dangerouslySetInnerHTML={html}
        />

        {fullscreen && (
          <button
            type="button"
            className="ig-close-btn"
            onClick={() => setFullscreen(false)}
            aria-label="Close Instagram viewer"
          >
            ×
          </button>
        )}
      </div>

      {!fullscreen && (
        <button
          type="button"
          className="ig-full-btn"
          onClick={() => setFullscreen(true)}
          aria-label="View Instagram post in full size"
        >
          <span aria-hidden="true">⛶</span>
          Full Size
        </button>
      )}
    </div>
  );
}