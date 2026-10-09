import { Outlet } from "react-router-dom";

import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FloatingButtons from "../FloatingButtons/FloatingButtons";
import BookingPopup from "../BookingPopup/BookingPopup";

export default function SiteLayout() {
  return (
    <>
      <Loader />

      <Navbar />

      <Outlet />

      <Footer />

      <FloatingButtons />

      <BookingPopup />
    </>
  );
}