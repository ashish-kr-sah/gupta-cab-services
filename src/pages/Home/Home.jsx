import Hero from "../../sections/Hero/Hero";

import Stats from "../../sections/Stats/Stats";

import WhyChoose from "../../sections/WhyChoose/WhyChoose";

import Destinations from "../../sections/Destinations/Destinations";

import Services from "../../sections/Services/Services";

import BlogPreview from "../../sections/BlogPreview/BlogPreview";

import Reviews from "../../sections/Reviews/Reviews";

import Faq from "../../sections/Faq/Faq";

import CtaBanner from "../../sections/CtaBanner/CtaBanner";

import SectionHead from "../../components/SectionHead/SectionHead";

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <WhyChoose />

      <Destinations />

      <Services />

      <BlogPreview />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Reviews"
            title="What Travellers"
            highlight="Say"
          />

          <Reviews limit={9} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead
            eyebrow="FAQ"
            title="Common"
            highlight="Questions"
          />

          <Faq />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}