import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/SiteLayout/SiteLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import Testimonials from "./pages/Testimonials/Testimonials";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";

import Login from "./admin/Login/Login";
import AdminLayout from "./admin/AdminLayout/AdminLayout";
import Dashboard from "./admin/Dashboard/Dashboard";
import Bookings from "./admin/Bookings/Bookings";
import Contacts from "./admin/Contacts/Contacts";

const Guard = ({ children }) => (localStorage.getItem("token") ? children : <Navigate to="/admin/login" replace />);

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Guard><AdminLayout /></Guard>}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
