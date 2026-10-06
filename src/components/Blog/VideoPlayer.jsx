import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./VideoPlayer.css";

// Apni mp4 video ke liye – play/pause, mute, progress bar (click karke aage-peeche)
export default function VideoPlayer({ src, poster }) {
  const video = useRef();
  const bar = useRef();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Scroll karke bahar jaane par video apne aap pause ho jati hai
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) video.current?.pause(); }, { threshold: 0.25 });
    io.observe(video.current);
    return () => io.disconnect();
  }, []);

  const toggle = () => (playing ? video.current.pause() : video.current.play());
  const update = () => { const v = video.current; bar.current.style.width = `${(v.currentTime / v.duration) * 100 || 0}%`; };
  const seek = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    video.current.currentTime = ((e.clientX - r.left) / r.width) * video.current.duration;
  };

  return (
    <div className="vp">
      <video ref={video} src={src} poster={poster} muted={muted} loop playsInline preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onTimeUpdate={update} onClick={toggle} />
      <button className={`vp-play ${playing ? "is-playing" : ""}`} onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
        <span>{playing ? <FaPause /> : <FaPlay />}</span>
      </button>
      <button className="vp-mute" onClick={() => setMuted(!muted)} aria-label="Sound">{muted ? <FaVolumeMute /> : <FaVolumeUp />}</button>
      <div className="vp-bar" onClick={seek}><i ref={bar} /></div>
    </div>
  );
}
