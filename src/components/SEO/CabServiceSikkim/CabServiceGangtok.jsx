import SEOPageTemplate from "./SEOPageTemplate";

export default function CabServiceGangtok() {
  return (
    <SEOPageTemplate
      title="Cab Service in"
      highlight="Gangtok"
      description="Reliable cab and taxi service in Gangtok for sightseeing, Sikkim tours, transfers and outstation travel."
      eyebrow="Gangtok Cab Service"
      heading={
        <>
          Reliable <span>Cab Service in Gangtok</span>
        </>
      }
      imageAlt="Gupta Cab Service in Gangtok for sightseeing and Sikkim tours"
      intro={[
        "Gupta Cab Service provides reliable and comfortable cab service in Gangtok for local travel, sightseeing, Sikkim tours, transfers and outstation journeys.",
        "Whether you are planning Gangtok sightseeing, Tsomgo Lake, Nathula Pass or other Sikkim destinations, you can book a cab according to your travel requirements.",
        "Cab services are also available between Gangtok, NJP Railway Station, Bagdogra Airport and Siliguri.",
      ]}
      services={[
        {
          title: "Gangtok Cab Service",
          text: "Reliable cab service in Gangtok for local travel and sightseeing.",
        },
        {
          title: "Gangtok Taxi Service",
          text: "Taxi services for families, couples and groups.",
        },
        {
          title: "Gangtok Sightseeing Cab",
          text: "Explore Gangtok attractions and nearby destinations.",
        },
        {
          title: "Gangtok Cab Booking",
          text: "Book a cab for sightseeing, transfers and outstation trips.",
        },
      ]}
      destinations={[
        "Gangtok Cab",
        "Tsomgo Lake Cab",
        "Nathula Pass Cab",
        "Lachung Cab",
        "Yumthang Valley Cab",
        "Pelling Cab",
        "Namchi Cab",
        "Ravangla Cab",
        "Zuluk Cab",
      ]}
      routes={[
        "Gangtok to NJP Cab",
        "Gangtok to Bagdogra Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
        "Siliguri to Gangtok Cab",
        "Gangtok to Darjeeling Cab",
      ]}
      faqs={[
        {
          question: "Do you provide cab service in Gangtok?",
          answer:
            "Yes. Gupta Cab Service provides cab and taxi services in Gangtok for local travel, sightseeing, transfers and Sikkim tours.",
        },
        {
          question: "Can I book a Gangtok sightseeing cab?",
          answer:
            "Yes. You can book a Gangtok sightseeing cab for popular attractions and nearby destinations.",
        },
        {
          question: "Do you provide NJP to Gangtok cab service?",
          answer:
            "Yes. Cab services are available between NJP Railway Station and Gangtok.",
        },
      ]}
    />
  );
}