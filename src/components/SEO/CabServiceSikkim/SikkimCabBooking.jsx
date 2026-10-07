import SEOPageTemplate from "./SEOPageTemplate";

export default function SikkimCabBooking() {
  return (
    <SEOPageTemplate
      title="Sikkim Cab"
      highlight="Booking"
      description="Book reliable cabs and taxis in Sikkim for sightseeing, tours, airport transfers and outstation travel."
      eyebrow="Sikkim Cab Booking"
      heading={
        <>
          Easy <span>Cab Booking in Sikkim</span>
        </>
      }
      imageAlt="Sikkim cab booking with Gupta Cab Service"
      intro={[
        "Gupta Cab Service provides convenient cab booking in Sikkim for sightseeing, local travel, Sikkim tours and outstation journeys.",
        "Book a cab for Gangtok, North Sikkim, Pelling, Ravangla, Namchi, Zuluk and other popular destinations.",
        "Cab and taxi services are also available from NJP Railway Station, Bagdogra Airport and Siliguri.",
      ]}
      services={[
        {
          title: "Sikkim Cab Booking",
          text: "Book a comfortable cab for sightseeing, tours and local travel.",
        },
        {
          title: "Sikkim Taxi Booking",
          text: "Taxi booking for families, couples and groups.",
        },
        {
          title: "Gangtok Taxi Booking",
          text: "Book taxis for Gangtok sightseeing and transfers.",
        },
        {
          title: "Sikkim Tour Cab",
          text: "Plan your Sikkim tour with a convenient cab.",
        },
      ]}
      destinations={[
        "Gangtok Cab",
        "Tsomgo Lake Cab",
        "Nathula Pass Cab",
        "North Sikkim Cab",
        "Lachung Cab",
        "Yumthang Valley Cab",
        "Pelling Cab",
        "Ravangla Cab",
        "Zuluk Cab",
      ]}
      routes={[
        "NJP to Gangtok Cab",
        "Bagdogra to Gangtok Cab",
        "Siliguri to Gangtok Cab",
        "NJP to Sikkim Cab",
        "Bagdogra to Sikkim Cab",
        "Siliguri to Sikkim Cab",
      ]}
      faqs={[
        {
          question: "How can I book a cab in Sikkim?",
          answer:
            "You can use the booking page and share your travel date, pickup location, destination and trip requirements.",
        },
        {
          question: "Do you provide Sikkim taxi booking?",
          answer:
            "Yes. Gupta Cab Service provides taxi and cab booking for local travel, sightseeing, tours and transfers.",
        },
        {
          question: "Can I book a cab for Gangtok sightseeing?",
          answer:
            "Yes. Gangtok sightseeing cab services are available for popular attractions and nearby destinations.",
        },
      ]}
    />
  );
}