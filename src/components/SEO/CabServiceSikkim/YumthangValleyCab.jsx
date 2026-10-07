import SEOPageTemplate from "./SEOPageTemplate";

export default function YumthangValleyCab() {
  return (
    <SEOPageTemplate
      title="Yumthang Valley"
      highlight="Cab"
      description="Book a Yumthang Valley cab for North Sikkim travel and plan your journey from Gangtok through Lachung."
      eyebrow="Yumthang Valley Cab"
      heading={<>Travel to <span>Yumthang Valley by Cab</span></>}
      imageAlt="Yumthang Valley cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers planning a North Sikkim journey to Yumthang Valley.",
        "Plan travel through Gangtok and Lachung according to your itinerary.",
        "Travel is subject to local conditions and applicable requirements.",
      ]}
      services={[
        { title: "Yumthang Cab", text: "Cab service for Yumthang Valley travel." },
        { title: "Lachung Travel", text: "Plan Lachung as part of your journey." },
        { title: "North Sikkim Tour", text: "Include Yumthang in your tour." },
        { title: "Gangtok Pickup", text: "Begin your journey from Gangtok." },
      ]}
      destinations={[
        "Yumthang Valley",
        "Lachung",
        "Gangtok",
        "North Sikkim",
      ]}
      routes={[
        "Gangtok to Lachung Cab",
        "Lachung to Yumthang Valley Cab",
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Yumthang Valley cab service?",
          answer:
            "Cab services can be arranged for Yumthang Valley subject to travel conditions and applicable requirements.",
        },
      ]}
    />
  );
}