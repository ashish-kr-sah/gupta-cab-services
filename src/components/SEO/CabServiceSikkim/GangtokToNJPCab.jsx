import SEOPageTemplate from "./SEOPageTemplate";

export default function GangtokToNJPCab() {
  return (
    <SEOPageTemplate
      title="Gangtok to NJP"
      highlight="Cab"
      description="Book a Gangtok to NJP cab for comfortable travel from Gangtok to New Jalpaiguri Railway Station."
      eyebrow="Gangtok to NJP Cab"
      heading={
        <>
          Comfortable <span>Gangtok to NJP Cab</span>
        </>
      }
      imageAlt="Gangtok to NJP cab service"
      intro={[
        "Gupta Cab Service provides cab service from Gangtok to NJP Railway Station for travellers returning from Sikkim.",
        "Plan your transfer according to your train schedule and travel requirements.",
        "Cab services can also be arranged for other North Bengal destinations.",
      ]}
      services={[
        {
          title: "Gangtok to NJP Taxi",
          text: "Comfortable taxi travel from Gangtok to NJP.",
        },
        {
          title: "Railway Station Transfer",
          text: "Convenient transfer to NJP Railway Station.",
        },
        {
          title: "Private Cab",
          text: "Travel comfortably with your family or group.",
        },
        {
          title: "Outstation Travel",
          text: "Continue your journey to other destinations.",
        },
      ]}
      destinations={[
        "NJP Railway Station",
        "Siliguri",
        "Bagdogra",
        "Darjeeling",
        "Kalimpong",
        "Gangtok",
      ]}
      routes={[
        "Gangtok to NJP Cab",
        "Gangtok to Bagdogra Cab",
        "Gangtok to Siliguri Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Gangtok to NJP cab service?",
          answer:
            "Yes. Gupta Cab Service provides cab services from Gangtok to NJP Railway Station.",
        },
        {
          question: "Can I book a cab according to my train timing?",
          answer:
            "You can share your travel schedule while booking so the transfer requirements can be discussed.",
        },
      ]}
    />
  );
}