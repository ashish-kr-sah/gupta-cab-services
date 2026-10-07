import { Link } from "react-router-dom";

import SectionHead from "../../components/SectionHead/SectionHead";
import BlogGrid from "../../components/Blog/BlogGrid";

import { posts } from "../../data/blog";

export default function BlogPreview() {
  return (
    <section
      className="section alt"
      aria-labelledby="latest-stories-title"
    >
      <div className="container">
        <SectionHead
          eyebrow="Blog"
          title="Latest"
          highlight="Stories"
          text="Instagram reels, videos & photos from our journeys."
          id="latest-stories-title"
        />

        <BlogGrid posts={posts.slice(0, 3)} />

        <div
          className="center"
          style={{ marginTop: 20 }}
        >
          <Link
            to="/blog"
            className="btn btn-line"
            aria-label="View all Gupta Cab Service blog posts"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}