import { useState } from "react";

import PageHead from "../../components/PageHead/PageHead";
import BlogGrid from "../../components/Blog/BlogGrid";
import CtaBanner from "../../sections/CtaBanner/CtaBanner";
import Lightbox from "../../components/Lightbox/Lightbox";
import { posts } from "../../data/blog";

export default function Blog() {
  const [image, setImage] = useState(null);

  const isLightboxOpen = Boolean(image);

  return (
    <>
      <PageHead
        title="Our"
        highlight="Blog"
        text="Instagram reels, videos & photos from our journeys."
      />

      <section
        className="section"
        aria-label="Gupta Cab Service travel blog"
      >
        <div className="container">
          <BlogGrid
            posts={posts}
            onImageClick={setImage}
          />
        </div>
      </section>

      <CtaBanner />

      <Lightbox
        images={image ? [image] : []}
        selectedIndex={isLightboxOpen ? 0 : null}
        onClose={() => setImage(null)}
        onChange={() => {}}
      />
    </>
  );
}