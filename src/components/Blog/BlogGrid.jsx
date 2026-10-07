import { useEffect, useState } from "react";

import BlogCard from "./BlogCard";
import Reveal from "../Reveal/Reveal";

import "./BlogGrid.css";

// Screen ke hisaab se 1/2/3 columns
const columnCount = () => {
  if (window.innerWidth < 700) {
    return 1;
  }

  if (window.innerWidth < 1050) {
    return 2;
  }

  return 3;
};

export default function BlogGrid({ posts = [], onImageClick }) {
  const [cols, setCols] = useState(columnCount);

  useEffect(() => {
    const onResize = () => {
      setCols(columnCount());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Posts ko columns mein distribute karta hai.
  const columns = Array.from(
    { length: cols },
    () => []
  );

  posts.forEach((post, index) => {
    columns[index % cols].push(post);
  });

  return (
    <div className="blog-grid">
      {columns.map((column, columnIndex) => (
        <div
          className="blog-col"
          key={columnIndex}
        >
          {column.map((post, index) => (
            <Reveal
              key={post.id}
              delay={index * 0.05}
            >
              <BlogCard
                post={post}
                onImageClick={onImageClick}
              />
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}