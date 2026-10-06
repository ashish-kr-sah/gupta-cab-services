import { useState } from "react";
import PageHead from "../../components/PageHead/PageHead";
import BlogGrid from "../../components/Blog/BlogGrid";
import Lightbox from "../../components/Lightbox/Lightbox";
import { posts } from "../../data/blog";

export default function Blog() {
  const [image, setImage] = useState(null);
  return (
    <>
      <PageHead title="Our" highlight="Blog" text="Instagram reels, videos & photos from our journeys." />
      <section className="section">
        <div className="container">
          <BlogGrid posts={posts} onImageClick={setImage} />
        </div>
      </section>
      <Lightbox src={image} onClose={() => setImage(null)} />
    </>
  );
}
