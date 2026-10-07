import SEOPageTemplate from "./SEOPageTemplate";

export default function ZulukCab() {
  return (
    <SEOPageTemplate
      title="Zuluk"
      highlight="Cab"
      description="Book a Zuluk cab for travel to Zuluk and the Silk Route region of Sikkim."
      eyebrow="Zuluk Cab"
      heading={<>Explore <span>Zuluk by Cab</span></>}
      imageAlt="Zuluk cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers planning a trip to Zuluk and the surrounding Silk Route region.",
        "Plan your journey according to your itinerary and applicable travel requirements.",
        "Travel conditions and local requirements should be considered before planning the trip.",
      ]}
      services={[
        { title: "Zuluk Cab", text: "Cab service for Zuluk travel." },
        { title: "Silk Route Tour", text: "Plan a Silk Route journey." },
        { title: "Sikkim Tour", text: "Include Zuluk in your itinerary." },
        { title: "Private Cab", text: "Convenient travel for your group." },
      ]}
      destinations={[
        "Zuluk",
        "Silk Route",
        "Gangtok",
        "East Sikkim",
      ]}
      routes={[
        "Gangtok to Zuluk Cab",
        "Siliguri to Zuluk Cab",
        "NJP to Zuluk Cab",
        "Bagdogra to Zuluk Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Zuluk cab service?",
          answer:
            "Cab services can be arranged for Zuluk subject to applicable travel conditions and local requirements.",
        },
      ]}
    />
  );
}