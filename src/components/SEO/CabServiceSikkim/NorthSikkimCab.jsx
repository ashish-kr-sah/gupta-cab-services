import SEOPageTemplate from "./SEOPageTemplate";

export default function NorthSikkimCab() {
  return (
    <SEOPageTemplate
      title="North Sikkim"
      highlight="Cab"
      description="Book a North Sikkim cab for Lachung, Yumthang Valley and popular North Sikkim travel."
      eyebrow="North Sikkim Cab"
      heading={<>Explore <span>North Sikkim by Cab</span></>}
      imageAlt="North Sikkim cab service"
      intro={[
        "Gupta Cab Service provides cab services for travel to popular North Sikkim destinations.",
        "Plan journeys to Lachung, Yumthang Valley and other destinations according to your itinerary.",
        "Travel is subject to local travel conditions and applicable requirements.",
      ]}
      services={[
        { title: "North Sikkim Cab", text: "Cab service for North Sikkim travel." },
        { title: "Lachung Cab", text: "Travel comfortably to Lachung." },
        { title: "Yumthang Cab", text: "Plan travel to Yumthang Valley." },
        { title: "Sikkim Tour Cab", text: "Include North Sikkim in your tour." },
      ]}
      destinations={[
        "Lachung Cab",
        "Yumthang Valley Cab",
        "Gangtok Cab",
        "North Sikkim Tour",
      ]}
      routes={[
        "Gangtok to Lachung Cab",
        "Gangtok to North Sikkim Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
      ]}
      faqs={[
        {
          question: "Do you provide North Sikkim cab service?",
          answer:
            "Yes. Cab services can be arranged for North Sikkim destinations subject to applicable local requirements.",
        },
        {
          question: "Can I travel to Lachung and Yumthang?",
          answer:
            "Travel to these destinations can be planned according to current travel conditions and applicable requirements.",
        },
      ]}
    />
  );
}