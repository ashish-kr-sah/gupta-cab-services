import SEOPageTemplate from "./SEOPageTemplate";

export default function RavanglaCab() {
  return (
    <SEOPageTemplate
      title="Ravangla"
      highlight="Cab"
      description="Book a Ravangla cab for comfortable travel to Ravangla and other South Sikkim destinations."
      eyebrow="Ravangla Cab"
      heading={
        <>
          Explore <span>Ravangla by Cab</span>
        </>
      }
      imageAlt="Ravangla cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers visiting Ravangla in South Sikkim.",
        "Plan travel between Ravangla, Namchi, Pelling, Gangtok and other Sikkim destinations.",
        "Choose a cab according to your travel requirements and itinerary.",
      ]}
      services={[
        {
          title: "Ravangla Cab",
          text: "Comfortable cab service for Ravangla.",
        },
        {
          title: "South Sikkim Cab",
          text: "Travel around South Sikkim.",
        },
        {
          title: "Sikkim Tour",
          text: "Include Ravangla in your itinerary.",
        },
        {
          title: "Private Travel",
          text: "Convenient travel for families and groups.",
        },
      ]}
      destinations={[
        "Ravangla",
        "Namchi",
        "Pelling",
        "Gangtok",
        "South Sikkim",
      ]}
      routes={[
        "Gangtok to Ravangla Cab",
        "Siliguri to Ravangla Cab",
        "NJP to Ravangla Cab",
        "Bagdogra to Ravangla Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Ravangla cab service?",
          answer:
            "Yes. Gupta Cab Service provides cab services for Ravangla and other Sikkim destinations.",
        },
      ]}
    />
  );
}