import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Reveal from "../Reveal/Reveal";
import "./BlogGrid.css";

// Screen ke hisaab se 1/2/3 columns – har card apni height khud leta hai
const columnCount = () => (window.innerWidth < 700 ? 1 : window.innerWidth < 1050 ? 2 : 3);

export default function BlogGrid({ posts, onImageClick }) {
  const [cols, setCols] = useState(columnCount);
  useEffect(() => {
    const onResize = () => setCols(columnCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // posts ko columns me baant do (1st → col1, 2nd → col2 ...) taaki order bana rahe aur layout jump na kare
  const columns = Array.from({ length: cols }, () => []);
  posts.forEach((p, i) => columns[i % cols].push(p));

  return (
    <div className="blog-grid">
      {columns.map((col, c) => (
        <div className="blog-col" key={c}>
          {col.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}><BlogCard post={p} onImageClick={onImageClick} /></Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
