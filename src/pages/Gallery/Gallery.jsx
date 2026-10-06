import { useState } from "react";

import PageHead from "../../components/PageHead/PageHead";
import Reveal from "../../components/Reveal/Reveal";
import Lightbox from "../../components/Lightbox/Lightbox";

import "./Gallery.css";

const IMAGES = Array.from(
  { length: 12 },
  (_, i) => `/images/g${i + 1}.jpeg`
);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <PageHead
        title="Our"
        highlight="Gallery"
        text="Moments from the journeys."
      />

      <section className="section">
        <div className="container masonry">
          {IMAGES.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 3) * 0.08}
            >
              <figure
                className="gallery-item"
                onClick={() => openImage(i)}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span>View Photo</span>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={IMAGES}
        selectedIndex={selectedIndex}
        onClose={closeLightbox}
        onChange={setSelectedIndex}
      />
    </>
  );
}