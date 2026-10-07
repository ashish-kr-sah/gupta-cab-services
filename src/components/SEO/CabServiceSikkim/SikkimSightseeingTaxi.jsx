import SEOPageTemplate from "./SEOPageTemplate";

export default function SikkimSightseeingTaxi() {
  return (
    <SEOPageTemplate
      title="Sikkim Sightseeing"
      highlight="Taxi"
      description="Book a Sikkim sightseeing taxi for Gangtok, Tsomgo Lake, Nathula Pass, North Sikkim and other popular destinations."
      eyebrow="Sikkim Sightseeing Taxi"
      heading={<>Explore Sikkim with a <span>Sightseeing Taxi</span></>}
      imageAlt="Sikkim sightseeing taxi service"
      intro={[
        "Gupta Cab Service provides sightseeing taxi services for travellers exploring popular destinations across Sikkim.",
        "Plan sightseeing around Gangtok, Tsomgo Lake, Nathula Pass, North Sikkim, Pelling, Ravangla, Namchi and Zuluk.",
        "Create a travel itinerary according to your destinations and travel requirements.",
      ]}
      services={[
        { title: "Sikkim Sightseeing Taxi", text: "Taxi service for Sikkim sightseeing." },
        { title: "Gangtok Sightseeing", text: "Explore popular Gangtok attractions." },
        { title: "Sikkim Tour Taxi", text: "Plan multi-destination Sikkim travel." },
        { title: "Private Sightseeing", text: "Comfortable travel for families and groups." },
      ]}
      destinations={[
        "Gangtok",
        "Tsomgo Lake",
        "Nathula Pass",
        "Lachung",
        "Yumthang Valley",
        "Pelling",
        "Namchi",
        "Ravangla",
        "Zuluk",
      ]}
      routes={[
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
        "Siliguri to Gangtok Cab",
        "Gangtok to NJP Cab",
        "Gangtok to Bagdogra Cab",
        "Gangtok to North Sikkim Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Sikkim sightseeing taxi service?",
          answer:
            "Yes. Gupta Cab Service provides taxi and cab services for sightseeing across popular Sikkim destinations.",
        },
        {
          question: "Can I customize my sightseeing itinerary?",
          answer:
            "Yes. You can discuss your destinations and travel requirements while booking.",
        },
      ]}
    />
  );
}