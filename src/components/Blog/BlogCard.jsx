import InstagramEmbed from "./InstagramEmbed";
import VideoPlayer from "./VideoPlayer";
import "./BlogCard.css";

const LABEL = { instagram: "Instagram", video: "Video", image: "Photo" };

export default function BlogCard({ post, onImageClick }) {
  const { type, url, title, caption, poster } = post;
  const hasText = title || caption;
  return (
    <article className={`blog-card ${type}`}>
      <div className="blog-media">
        <span className="blog-tag">{LABEL[type]}</span>
        {type === "instagram" && <InstagramEmbed url={url} />}
        {type === "video" && <VideoPlayer src={url} poster={poster} />}
        {type === "image" && <img src={url} alt={title || "Gupta Cab Service"} loading="lazy" onClick={() => onImageClick?.(url)} />}
      </div>
      {hasText && (
        <div className="blog-body">
          {title && <h3>{title}</h3>}
          {caption && <p>{caption}</p>}
        </div>
      )}
    </article>
  );
}
