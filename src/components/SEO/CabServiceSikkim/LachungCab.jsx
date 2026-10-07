import SEOPageTemplate from "./SEOPageTemplate";

export default function LachungCab() {
  return (
    <SEOPageTemplate
      title="Lachung"
      highlight="Cab"
      description="Book a Lachung cab for travel from Gangtok and plan a North Sikkim journey."
      eyebrow="Lachung Cab"
      heading={<>Explore <span>Lachung by Cab</span></>}
      imageAlt="Lachung cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers planning to visit Lachung in North Sikkim.",
        "Plan a comfortable journey from Gangtok and include Lachung in your North Sikkim itinerary.",
        "Travel is subject to local travel conditions and applicable requirements.",
      ]}
      services={[
        { title: "Lachung Cab", text: "Cab service for travel to Lachung." },
        { title: "North Sikkim Tour", text: "Plan Lachung as part of your tour." },
        { title: "Gangtok Pickup", text: "Start your journey from Gangtok." },
        { title: "Sikkim Tour Cab", text: "Plan further North Sikkim travel." },
      ]}
      destinations={[
        "Lachung",
        "Yumthang Valley",
        "Gangtok",
        "North Sikkim",
      ]}
      routes={[
        "Gangtok to Lachung Cab",
        "Gangtok to North Sikkim Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Lachung cab service?",
          answer:
            "Yes. Cab services can be arranged for Lachung subject to travel conditions and applicable local requirements.",
        },
      ]}
    />
  );
}