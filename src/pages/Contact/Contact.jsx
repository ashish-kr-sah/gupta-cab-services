import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import PageHead from "../../components/PageHead/PageHead";
import Reveal from "../../components/Reveal/Reveal";
import FormField from "../../components/FormField/FormField";
import useForm from "../../hooks/useForm";

import {
  PHONE,
  PHONE_FMT,
  EMAIL,
  WHATSAPP,
  LOCATION,
} from "../../site";

import "./Contact.css";

const EMPTY = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const INSTAGRAM_URL =
  "https://www.instagram.com/travel_with_raunak_/";

export default function Contact() {
  const {
    values: f,
    onChange,
    onSubmit,
    busy,
  } = useForm(
    EMPTY,
    "/contact",
    "Message has been sent successfully! We will get back to you soon. 🚖"
  );

  const info = [
    [
      FaPhoneAlt,
      "Call Us",
      PHONE_FMT,
      `tel:+91${PHONE}`,
    ],
    [
      FaWhatsapp,
      "WhatsApp",
      "Chat with us",
      WHATSAPP,
    ],
    [
      FaEnvelope,
      "Email",
      EMAIL,
      `mailto:${EMAIL}`,
    ],
    [
      FaMapMarkerAlt,
      "Location",
      LOCATION,
      "#",
    ],
  ];

  return (
    <>
      {/* PAGE HEADER */}

      <PageHead
        title="Contact"
        highlight="Us"
        text="Questions about a trip? We are happy to help."
      />

      {/* CONTACT SECTION */}

      <section
        className="section"
        aria-label="Contact Gupta Cab Service"
      >
        <div className="container split contact-split">
          {/* LEFT SIDE */}

          <div className="contact-left">
            {/* CONTACT INFORMATION */}

            <div className="contact-info-list">
              {info.map(
                ([Icon, title, value, href], index) => (
                  <Reveal
                    key={title}
                    delay={index * 0.08}
                  >
                    <a
                      className="info"
                      href={href}
                      target={
                        href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      aria-label={`${title}: ${value}`}
                    >
                      <div
                        className="ico"
                        aria-hidden="true"
                      >
                        <Icon />
                      </div>

                      <div className="info-content">
                        <small>{title}</small>
                        <b>{value}</b>
                      </div>

                      <span
                        className="info-arrow"
                        aria-hidden="true"
                      >
                        <FaArrowRight />
                      </span>
                    </a>
                  </Reveal>
                )
              )}
            </div>

            {/* CONTACT PERSON */}

            <Reveal delay={0.3}>
              <div className="contact-person-card">
                <div
                  className="person-icon"
                  aria-hidden="true"
                >
                  <FaUser />
                </div>

                <div className="person-content">
                  <small>Contact Person</small>

                  <h3>Raunak Gupta</h3>

                  <p>
                    Feel free to reach out to us
                    for travel assistance, bookings,
                    or any questions about your trip.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* INSTAGRAM */}

            <Reveal delay={0.38}>
              <div className="instagram-card">
                <div className="instagram-card-top">
                  <div
                    className="instagram-icon"
                    aria-hidden="true"
                  >
                    <FaInstagram />
                  </div>

                  <div className="instagram-heading">
                    <small>Follow Us</small>

                    <h3>
                      Gupta Cab Service Official
                    </h3>
                  </div>
                </div>

                <p className="instagram-text">
                  Follow us on Instagram for
                  travel updates, Sikkim journeys,
                  beautiful destinations and more.
                </p>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="instagram-follow-btn"
                  aria-label="Follow Gupta Cab Service on Instagram"
                >
                  <span>
                    @travel_with_raunak_
                  </span>

                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE — CONTACT FORM */}

          <Reveal delay={0.1}>
            <form
              className="form"
              onSubmit={onSubmit}
              aria-label="Contact Gupta Cab Service"
            >
              <div className="fgrid">
                {/* FULL NAME */}

                <FormField label="Full Name">
                  <input
                    name="fullName"
                    type="text"
                    value={f.fullName}
                    onChange={onChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </FormField>

                {/* PHONE */}

                <FormField label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    value={f.phone}
                    onChange={onChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </FormField>

                {/* EMAIL */}

                <FormField
                  label="Email"
                  full
                >
                  <input
                    name="email"
                    type="email"
                    value={f.email}
                    onChange={onChange}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                  />
                </FormField>

                {/* SUBJECT */}

                <FormField
                  label="Subject"
                  full
                >
                  <input
                    name="subject"
                    type="text"
                    value={f.subject}
                    onChange={onChange}
                    placeholder="What would you like to ask us about?"
                    required
                  />
                </FormField>

                {/* MESSAGE */}

                <FormField
                  label="Message"
                  full
                >
                  <textarea
                    name="message"
                    value={f.message}
                    onChange={onChange}
                    placeholder="Tell us about your trip, destination, travel date or any questions..."
                    rows="6"
                    required
                  />
                </FormField>

                {/* SUBMIT */}

                <div className="full">
                  <button
                    type="submit"
                    className="btn btn-gold submit"
                    disabled={busy}
                  >
                    <FaPaperPlane aria-hidden="true" />

                    {busy
                      ? "Sending…"
                      : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}