import SEOPageTemplate from "./SEOPageTemplate";

export default function NamchiCab() {
  return (
    <SEOPageTemplate
      title="Namchi"
      highlight="Cab"
      description="Book a Namchi cab for comfortable travel to Namchi and popular destinations in South Sikkim."
      eyebrow="Namchi Cab"
      heading={<>Explore <span>Namchi by Cab</span></>}
      imageAlt="Namchi cab service"
      intro={[
        "Gupta Cab Service provides cab services for travellers visiting Namchi and other destinations in South Sikkim.",
        "Plan a customized Sikkim journey covering Namchi, Ravangla and nearby destinations.",
        "Cab travel can be arranged according to your itinerary and requirements.",
      ]}
      services={[
        { title: "Namchi Cab", text: "Cab service for Namchi travel." },
        { title: "South Sikkim Tour", text: "Explore South Sikkim destinations." },
        { title: "Private Cab", text: "Comfortable travel for families and groups." },
        { title: "Sikkim Sightseeing", text: "Plan sightseeing across Sikkim." },
      ]}
      destinations={[
        "Namchi",
        "Ravangla",
        "Pelling",
        "Gangtok",
        "South Sikkim",
      ]}
      routes={[
        "Gangtok to Namchi Cab",
        "Siliguri to Namchi Cab",
        "NJP to Namchi Cab",
        "Bagdogra to Namchi Cab",
      ]}
      faqs={[
        {
          question: "Do you provide Namchi cab service?",
          answer:
            "Yes. Cab services can be arranged for Namchi and other South Sikkim destinations.",
        },
      ]}
    />
  );
}