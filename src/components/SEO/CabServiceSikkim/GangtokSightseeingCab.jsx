import SEOPageTemplate from "./SEOPageTemplate";

export default function GangtokSightseeingCab() {
  return (
    <SEOPageTemplate
      title="Gangtok Sightseeing"
      highlight="Cab"
      description="Book a Gangtok sightseeing cab for local attractions, sightseeing tours and nearby Sikkim destinations."
      eyebrow="Gangtok Sightseeing Cab"
      heading={
        <>
          Explore Gangtok with a <span>Sightseeing Cab</span>
        </>
      }
      imageAlt="Gangtok sightseeing cab service"
      intro={[
        "Gupta Cab Service provides comfortable Gangtok sightseeing cab services for travellers exploring popular attractions in and around Gangtok.",
        "Plan your sightseeing according to your travel schedule and visit popular destinations around Gangtok.",
        "Cab services can also be arranged for travel from Gangtok to other Sikkim destinations.",
      ]}
      services={[
        {
          title: "Gangtok Sightseeing",
          text: "Explore popular Gangtok attractions by cab.",
        },
        {
          title: "Local Taxi Service",
          text: "Convenient taxi service for local Gangtok travel.",
        },
        {
          title: "Sikkim Sightseeing",
          text: "Travel from Gangtok to popular Sikkim destinations.",
        },
        {
          title: "Private Cab",
          text: "Comfortable private cab travel for your itinerary.",
        },
      ]}
      destinations={[
        "Gangtok",
        "Tsomgo Lake",
        "Nathula Pass",
        "Rumtek",
        "Lachung",
        "Yumthang Valley",
        "Pelling",
        "Ravangla",
        "Namchi",
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
          question: "Can I book a Gangtok sightseeing cab?",
          answer:
            "Yes. You can book a cab for Gangtok sightseeing and nearby tourist destinations.",
        },
        {
          question: "Can I travel from Gangtok to Tsomgo Lake?",
          answer:
            "Cab services can be arranged for travel to Tsomgo Lake subject to applicable local travel requirements.",
        },
        {
          question: "Do you provide Gangtok taxi service?",
          answer:
            "Yes. Gupta Cab Service provides cab and taxi services for Gangtok travel.",
        },
      ]}
    />
  );
}