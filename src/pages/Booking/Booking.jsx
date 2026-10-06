import { FaPaperPlane } from "react-icons/fa";

import PageHead from "../../components/PageHead/PageHead";
import Reveal from "../../components/Reveal/Reveal";
import FormField from "../../components/FormField/FormField";
import useForm from "../../hooks/useForm";

import {
  DESTINATIONS,
  CAB_TYPES,
  PERSONS,
} from "../../site";

import "./Booking.css";


const EMPTY = {
  fullName: "",
  phone: "",
  email: "",
  pickup: "",
  destination: "",
  cabType: "",
  persons: "",
  message: "",
};


export default function Booking() {

  const {
    values: f,
    onChange,
    onSubmit,
    busy,
  } = useForm(
    EMPTY,
    "/booking",
    "Booking submitted successfully! We will contact you within 20 minutes. 🚖"
  );


  return (
    <>
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <PageHead
        title="Book Your"
        highlight="Cab"
        text="Fill the form – we will confirm within 20 minutes."
      />


      {/* =====================================================
          BOOKING SECTION
      ===================================================== */}

      <section className="section">

        <div className="container booking-wrap">

          <Reveal>

            <form
              className="form"
              onSubmit={onSubmit}
            >

              <div className="fgrid">


                {/* =================================================
                    FULL NAME
                ================================================= */}

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


                {/* =================================================
                    PHONE
                ================================================= */}

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


                {/* =================================================
                    EMAIL
                ================================================= */}

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


                {/* =================================================
                    PICKUP LOCATION
                ================================================= */}

                <FormField label="Pickup Location">

                  <input
                    name="pickup"
                    type="text"
                    value={f.pickup}
                    onChange={onChange}
                    placeholder="e.g. NJP Station, Bagdogra Airport"
                    required
                  />

                </FormField>


                {/* =================================================
                    DESTINATION
                ================================================= */}

                <FormField label="Destination">

                  <select
                    name="destination"
                    value={f.destination}
                    onChange={onChange}
                    required
                  >

                    <option value="">
                      Select your destination
                    </option>

                    {DESTINATIONS.map((destination) => (
                      <option
                        key={destination}
                        value={destination}
                      >
                        {destination}
                      </option>
                    ))}

                  </select>

                </FormField>


                {/* =================================================
                    CAB TYPE / CAR NAME
                ================================================= */}

                <FormField label="Cab Type / Car">

                  <select
                    name="cabType"
                    value={f.cabType}
                    onChange={onChange}
                    required
                  >

                    <option value="">
                      Select your preferred car
                    </option>

                    {CAB_TYPES.map((cab) => (
                      <option
                        key={cab}
                        value={cab}
                      >
                        {cab}
                      </option>
                    ))}

                  </select>

                </FormField>


                {/* =================================================
                    PERSONS
                ================================================= */}

                <FormField label="Persons">

                  <select
                    name="persons"
                    value={f.persons}
                    onChange={onChange}
                    required
                  >

                    <option value="">
                      Select number of persons
                    </option>

                    {PERSONS.map((person) => (
                      <option
                        key={person}
                        value={person}
                      >
                        {person}
                      </option>
                    ))}

                  </select>

                </FormField>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <FormField
                  label="Message (optional)"
                  full
                >

                  <textarea
                    name="message"
                    value={f.message}
                    onChange={onChange}
                    placeholder="Tell us your travel date, number of days, special requests..."
                    rows="6"
                  />

                </FormField>


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <div className="full">

                  <button
                    type="submit"
                    className="btn btn-gold submit"
                    disabled={busy}
                  >

                    <FaPaperPlane />

                    {busy
                      ? "Submitting…"
                      : "Confirm Booking"}

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