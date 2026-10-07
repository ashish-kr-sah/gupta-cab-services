import SEOPageTemplate from "./SEOPageTemplate";

export default function PellingCab() {
  return (
    <SEOPageTemplate
      title="Pelling"
      highlight="Cab"
      description="Book a Pelling cab for comfortable travel to Pelling and other destinations in Sikkim."
      eyebrow="Pelling Cab"
      heading={<>Explore <span>Pelling by Cab</span></>}
      imageAlt="Pelling cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers visiting Pelling in Sikkim.",
        "Plan comfortable travel from Gangtok, Siliguri, NJP or other locations according to your itinerary.",
        "Pelling can also be included in a customized Sikkim tour.",
      ]}
      services={[
        { title: "Pelling Cab", text: "Comfortable cab service for Pelling travel." },
        { title: "Sikkim Tour", text: "Include Pelling in your itinerary." },
        { title: "Outstation Cab", text: "Travel between popular Sikkim destinations." },
        { title: "Private Travel", text: "Convenient travel for families and groups." },
      ]}
      destinations={[
        "Pelling",
        "Gangtok",
        "Ravangla",
        "Namchi",
        "Yuksom",
      ]}
      routes={[
        "Gangtok to Pelling Cab",
        "Siliguri to Pelling Cab",
        "NJP to Pelling Cab",
        "Bagdogra to Pelling Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Pelling cab service?",
          answer:
            "Yes. Gupta Cab Service provides cab services for travel to Pelling and other Sikkim destinations.",
        },
      ]}
    />
  );
}