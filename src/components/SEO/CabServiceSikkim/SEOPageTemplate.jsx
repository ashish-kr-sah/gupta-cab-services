import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHead from "../../PageHead/PageHead";
import Reveal from "../../Reveal/Reveal";

const SEO_LINKS = [
  {
    path: "/cab-service-in-sikkim",
    label: "Cab Service in Sikkim",
  },
  {
    path: "/cab-service-in-gangtok",
    label: "Cab Service in Gangtok",
  },
  {
    path: "/sikkim-cab-booking",
    label: "Sikkim Cab Booking",
  },
  {
    path: "/sikkim-tour-cab",
    label: "Sikkim Tour Cab",
  },
  {
    path: "/gangtok-sightseeing-cab",
    label: "Gangtok Sightseeing Cab",
  },
  {
    path: "/njp-to-gangtok-cab",
    label: "NJP to Gangtok Cab",
  },
  {
    path: "/bagdogra-to-gangtok-cab",
    label: "Bagdogra to Gangtok Cab",
  },
  {
    path: "/siliguri-to-gangtok-cab",
    label: "Siliguri to Gangtok Cab",
  },
  {
    path: "/gangtok-to-njp-cab",
    label: "Gangtok to NJP Cab",
  },
  {
    path: "/gangtok-to-bagdogra-cab",
    label: "Gangtok to Bagdogra Cab",
  },
  {
    path: "/north-sikkim-cab",
    label: "North Sikkim Cab",
  },
  {
    path: "/nathula-pass-cab",
    label: "Nathula Pass Cab",
  },
  {
    path: "/tsomgo-lake-cab",
    label: "Tsomgo Lake Cab",
  },
  {
    path: "/lachung-cab",
    label: "Lachung Cab",
  },
  {
    path: "/yumthang-valley-cab",
    label: "Yumthang Valley Cab",
  },
  {
    path: "/pelling-cab",
    label: "Pelling Cab",
  },
  {
    path: "/namchi-cab",
    label: "Namchi Cab",
  },
  {
    path: "/ravangla-cab",
    label: "Ravangla Cab",
  },
  {
    path: "/zuluk-cab",
    label: "Zuluk Cab",
  },
  {
    path: "/sikkim-sightseeing-taxi",
    label: "Sikkim Sightseeing Taxi",
  },
];

export default function SEOPageTemplate({
  title,
  highlight,
  description,
  eyebrow,
  heading,
  intro = [],
  services = [],
  destinations = [],
  routes = [],
  faqs = [],
  imageAlt = "Gupta Cab Service",
}) {
  const pageTitle = `${title} ${highlight} | Gupta Cab Service`;

  const currentPath =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/";

  const canonicalUrl = `https://guptacabservice.co.in${currentPath}`;

  const seoDescription =
    description ||
    "Gupta Cab Service provides reliable cab and taxi services in Sikkim, Gangtok and nearby destinations.";

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });

        document.head.appendChild(element);
      } else {
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
      }
    };

    const setLink = (selector, attributes) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("link");

        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });

        document.head.appendChild(element);
      } else {
        Object.entries(attributes).forEach(([key, value]) => {
          element.setAttribute(key, value);
        });
      }
    };

    setMeta('meta[name="description"]', {
      name: "description",
      content: seoDescription,
    });

    setMeta('meta[name="robots"]', {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    setMeta('meta[name="googlebot"]', {
      name: "googlebot",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    });

    setMeta('meta[name="author"]', {
      name: "author",
      content: "Gupta Cab Service",
    });

    setLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    setMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    setMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Gupta Cab Service",
    });

    setMeta('meta[property="og:title"]', {
      property: "og:title",
      content: pageTitle,
    });

    setMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seoDescription,
    });

    setMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    setMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "en_IN",
    });

    setMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "https://guptacabservice.co.in/og-image.jpg",
    });

    setMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: imageAlt,
    });

    setMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    setMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: pageTitle,
    });

    setMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: seoDescription,
    });

    setMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: "https://guptacabservice.co.in/og-image.jpg",
    });

    const existingSchema = document.getElementById(
      "gupta-cab-seo-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://guptacabservice.co.in/#business",
          name: "Gupta Cab Service",
          url: "https://guptacabservice.co.in/",
          telephone: "+919382324860",
          email: "guptacabserviceinfo@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Gangtok",
            addressRegion: "Sikkim",
            addressCountry: "IN",
          },
          areaServed: [
            "Sikkim",
            "Gangtok",
            "Darjeeling",
            "Kalimpong",
            "Siliguri",
            "NJP",
            "Bagdogra",
          ],
        },
        {
          "@type": "WebPage",
          "@id": `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: pageTitle,
          description: seoDescription,
          isPartOf: {
            "@id": "https://guptacabservice.co.in/#website",
          },
          about: {
            "@id": "https://guptacabservice.co.in/#business",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://guptacabservice.co.in/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: `${title} ${highlight}`,
              item: canonicalUrl,
            },
          ],
        },
      ],
    };

    if (faqs.length > 0) {
      schema["@graph"].push({
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
    }

    if (services.length > 0) {
      schema["@graph"].push({
        "@type": "Service",
        name: pageTitle,
        description: seoDescription,
        provider: {
          "@id": "https://guptacabservice.co.in/#business",
        },
        areaServed: [
          "Sikkim",
          "Gangtok",
          "Darjeeling",
          "Kalimpong",
          "Siliguri",
          "NJP",
          "Bagdogra",
        ],
        serviceType: "Cab and Taxi Service",
      });
    }

    const script = document.createElement("script");

    script.id = "gupta-cab-seo-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      const currentSchema = document.getElementById(
        "gupta-cab-seo-schema"
      );

      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, [
    pageTitle,
    seoDescription,
    canonicalUrl,
    imageAlt,
    faqs,
    services,
  ]);

  const relatedLinks = SEO_LINKS.filter(
    (link) => link.path !== currentPath
  ).slice(0, 8);

  return (
    <>
      <PageHead
        title={title}
        highlight={highlight}
        text={seoDescription}
      />

      <main>
        <section
          className="section"
          aria-labelledby="seo-page-intro-title"
        >
          <div className="container split">
            <Reveal>
              <img
                src="/images/about-img.jpeg"
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <span className="eyebrow">{eyebrow}</span>

              <h2
                id="seo-page-intro-title"
                className="title"
              >
                {heading}
              </h2>

              {intro.map((paragraph, index) => (
                <p
                  className="lead"
                  key={`${paragraph}-${index}`}
                  style={{ marginBottom: 14 }}
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {services.length > 0 && (
          <section
            className="section alt"
            aria-labelledby="seo-services-title"
          >
            <div className="container">
              <div className="center">
                <span className="eyebrow">
                  Our Services
                </span>

                <h2
                  id="seo-services-title"
                  className="title"
                >
                  Cab &amp; Taxi <span>Services</span>
                </h2>

                <div
                  className="divider"
                  aria-hidden="true"
                />
              </div>

              <div className="grid g4">
                {services.map((service, index) => (
                  <Reveal
                    key={service.title}
                    delay={index * 0.08}
                  >
                    <article className="card">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {destinations.length > 0 && (
          <section
            className="section"
            aria-labelledby="seo-destinations-title"
          >
            <div className="container">
              <div className="center">
                <span className="eyebrow">
                  Destinations
                </span>

                <h2
                  id="seo-destinations-title"
                  className="title"
                >
                  Popular <span>Destinations</span>
                </h2>

                <div
                  className="divider"
                  aria-hidden="true"
                />
              </div>

              <div className="grid g4">
                {destinations.map((destination, index) => (
                  <Reveal
                    key={destination}
                    delay={index * 0.06}
                  >
                    <article className="card">
                      <h3>{destination}</h3>

                      <p>
                        Comfortable cab service for
                        travelling to {destination}.
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {routes.length > 0 && (
          <section
            className="section alt"
            aria-labelledby="seo-routes-title"
          >
            <div className="container">
              <div className="center">
                <span className="eyebrow">
                  Popular Routes
                </span>

                <h2
                  id="seo-routes-title"
                  className="title"
                >
                  Popular <span>Cab Routes</span>
                </h2>

                <div
                  className="divider"
                  aria-hidden="true"
                />
              </div>

              <div className="grid g4">
                {routes.map((route, index) => (
                  <Reveal
                    key={route}
                    delay={index * 0.06}
                  >
                    <article className="card">
                      <h3>{route}</h3>

                      <p>
                        Book a comfortable cab for this
                        Sikkim travel route.
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section
            className="section"
            aria-labelledby="seo-faq-title"
          >
            <div className="container">
              <div className="center">
                <span className="eyebrow">
                  Frequently Asked Questions
                </span>

                <h2
                  id="seo-faq-title"
                  className="title"
                >
                  Cab Service <span>FAQs</span>
                </h2>

                <div
                  className="divider"
                  aria-hidden="true"
                />
              </div>

              <div className="faq">
                {faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* INTERNAL LINKS */}

        <section
          className="section alt"
          aria-labelledby="related-pages-title"
        >
          <div className="container">
            <div className="center">
              <span className="eyebrow">
                Explore More
              </span>

              <h2
                id="related-pages-title"
                className="title"
              >
                Related <span>Cab Services</span>
              </h2>

              <div
                className="divider"
                aria-hidden="true"
              />
            </div>

            <div className="grid g4">
              {relatedLinks.map((link, index) => (
                <Reveal
                  key={link.path}
                  delay={index * 0.06}
                >
                  <article className="card">
                    <h3>
                      <Link to={link.path}>
                        {link.label}
                      </Link>
                    </h3>

                    <p>
                      Explore our {link.label.toLowerCase()}.
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          aria-labelledby="seo-booking-title"
        >
          <div className="container">
            <Reveal>
              <div className="banner">
                <h2 id="seo-booking-title">
                  Ready to Book Your Cab?
                </h2>

                <p>
                  Plan your Sikkim journey with Gupta Cab
                  Service.
                </p>

                <Link
                  to="/booking"
                  className="btn"
                  aria-label="Book a cab with Gupta Cab Service"
                >
                  Book a Cab Now
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}