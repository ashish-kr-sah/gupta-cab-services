import SEOPageTemplate from "./SEOPageTemplate";

export default function NathulaPassCab() {
  return (
    <SEOPageTemplate
      title="Nathula Pass"
      highlight="Cab"
      description="Book a cab for Nathula Pass and plan comfortable travel from Gangtok to this popular Sikkim destination."
      eyebrow="Nathula Pass Cab"
      heading={<>Travel to <span>Nathula Pass by Cab</span></>}
      imageAlt="Nathula Pass cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers planning a trip to Nathula Pass from Gangtok.",
        "Combine Nathula Pass with Tsomgo Lake and other popular Sikkim attractions in your itinerary.",
        "Travel is subject to applicable local requirements and travel conditions.",
      ]}
      services={[
        { title: "Nathula Pass Cab", text: "Cab travel for Nathula Pass trips." },
        { title: "Tsomgo Lake Cab", text: "Combine Tsomgo Lake with your trip." },
        { title: "Gangtok Pickup", text: "Convenient pickup from Gangtok." },
        { title: "Sikkim Sightseeing", text: "Plan nearby sightseeing destinations." },
      ]}
      destinations={[
        "Nathula Pass",
        "Tsomgo Lake",
        "Gangtok",
        "Baba Mandir",
      ]}
      routes={[
        "Gangtok to Nathula Pass Cab",
        "Gangtok to Tsomgo Lake Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
      ]}
      faqs={[
        {
          question: "Can I book a Nathula Pass cab?",
          answer:
            "Yes. Cab services can be arranged for Nathula Pass travel subject to applicable local requirements.",
        },
        {
          question: "Can I visit Tsomgo Lake on the same trip?",
          answer:
            "Tsomgo Lake can be included in the itinerary subject to travel conditions and applicable requirements.",
        },
      ]}
    />
  );
}