import SEOPageTemplate from "./SEOPageTemplate";

export default function SikkimTourCab() {
  return (
    <SEOPageTemplate
      title="Sikkim Tour"
      highlight="Cab"
      description="Book a reliable cab for Sikkim tours, sightseeing, transfers and customized travel across Sikkim."
      eyebrow="Sikkim Tour Cab"
      heading={
        <>
          Explore Sikkim <span>by Cab</span>
        </>
      }
      imageAlt="Sikkim tour cab service with Gupta Cab Service"
      intro={[
        "Gupta Cab Service provides comfortable cab service for Sikkim tours, sightseeing, local travel and outstation journeys.",
        "Plan a trip covering Gangtok, Tsomgo Lake, Nathula Pass, North Sikkim, Pelling, Ravangla, Namchi and Zuluk.",
        "Pickup services are also available from NJP Railway Station, Bagdogra Airport and Siliguri.",
      ]}
      services={[
        {
          title: "Sikkim Tour Cab",
          text: "Comfortable cab service for customized Sikkim tours.",
        },
        {
          title: "Sikkim Tour Taxi",
          text: "Taxi service for couples, families and groups.",
        },
        {
          title: "Sikkim Sightseeing Cab",
          text: "Explore popular Sikkim tourist attractions.",
        },
        {
          title: "Sikkim Cab Rental",
          text: "Cab travel according to your itinerary and requirements.",
        },
      ]}
      destinations={[
        "Gangtok Tour",
        "Tsomgo Lake Tour",
        "Nathula Pass Tour",
        "Lachung Tour",
        "Yumthang Valley Tour",
        "Pelling Tour",
        "Namchi Tour",
        "Ravangla Tour",
        "Zuluk Tour",
      ]}
      routes={[
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
        "Siliguri to Gangtok Cab",
        "Gangtok to NJP Cab",
        "Gangtok to Bagdogra Cab",
        "Gangtok to Darjeeling Cab",
      ]}
      faqs={[
        {
          question: "Do you provide cab service for Sikkim tours?",
          answer:
            "Yes. Gupta Cab Service provides cab and taxi services for Sikkim tours, sightseeing and transfers.",
        },
        {
          question: "Can I customize my Sikkim tour?",
          answer:
            "Yes. You can discuss your destinations, travel dates and trip requirements to plan your journey.",
        },
        {
          question: "Can I include North Sikkim?",
          answer:
            "Yes. North Sikkim destinations can be included subject to travel conditions and applicable local requirements.",
        },
      ]}
    />
  );
}