import { useEffect, useRef, useState } from "react";

import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";

import "./VideoPlayer.css";

export default function VideoPlayer({ src, poster }) {
  const video = useRef(null);
  const bar = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Video automatically pauses when it leaves the viewport.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const element = video.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          element.pause();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggle = () => {
    const element = video.current;

    if (!element) {
      return;
    }

    if (element.paused) {
      element.play().catch(() => {});
    } else {
      element.pause();
    }
  };

  const update = () => {
    const element = video.current;
    const progress = bar.current;

    if (!element || !progress) {
      return;
    }

    const percentage =
      element.duration > 0
        ? (element.currentTime / element.duration) * 100
        : 0;

    progress.style.width = `${percentage}%`;
  };

  const seek = (event) => {
    const element = video.current;

    if (!element || !element.duration) {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    const position =
      (event.clientX - rect.left) / rect.width;

    element.currentTime =
      Math.max(0, Math.min(1, position)) *
      element.duration;
  };

  return (
    <div className="vp">
      <video
        ref={video}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={update}
        onClick={toggle}
        aria-label="Gupta Cab Service travel video"
      />

      <button
        type="button"
        className={`vp-play ${
          playing ? "is-playing" : ""
        }`}
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        <span aria-hidden="true">
          {playing ? <FaPause /> : <FaPlay />}
        </span>
      </button>

      <button
        type="button"
        className="vp-mute"
        onClick={() => setMuted((value) => !value)}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        <span aria-hidden="true">
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </span>
      </button>

      <div
        className="vp-bar"
        onClick={seek}
        role="slider"
        aria-label="Video progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <i ref={bar} />
      </div>
    </div>
  );
}