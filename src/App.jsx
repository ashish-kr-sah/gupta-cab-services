import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SiteLayout from "./components/SiteLayout/SiteLayout";

/* ==================== PUBLIC PAGES ==================== */

const Home = lazy(() => import("./pages/Home/Home"));

const About = lazy(() => import("./pages/About/About"));

const Gallery = lazy(() => import("./pages/Gallery/Gallery"));

const Blog = lazy(() => import("./pages/Blog/Blog"));

const Testimonials = lazy(() =>
  import("./pages/Testimonials/Testimonials")
);

const Booking = lazy(() => import("./pages/Booking/Booking"));

const Contact = lazy(() => import("./pages/Contact/Contact"));

/* ==================== SEO PAGES ==================== */

const CabServiceSikkim = lazy(() =>
  import("./components/SEO/CabServiceSikkim/CabServiceSikkim")
);

const CabServiceGangtok = lazy(() =>
  import("./components/SEO/CabServiceSikkim/CabServiceGangtok")
);

const SikkimCabBooking = lazy(() =>
  import("./components/SEO/CabServiceSikkim/SikkimCabBooking")
);

const SikkimTourCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/SikkimTourCab")
);

const GangtokSightseeingCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/GangtokSightseeingCab")
);

const NJPToGangtokCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/NJPToGangtokCab")
);

const BagdograToGangtokCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/BagdograToGangtokCab")
);

const SiliguriToGangtokCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/SiliguriToGangtokCab")
);

const GangtokToNJPCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/GangtokToNJPCab")
);

const GangtokToBagdograCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/GangtokToBagdograCab")
);

const NorthSikkimCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/NorthSikkimCab")
);

const NathulaPassCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/NathulaPassCab")
);

const TsomgoLakeCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/TsomgoLakeCab")
);

const LachungCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/LachungCab")
);

const YumthangValleyCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/YumthangValleyCab")
);

const PellingCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/PellingCab")
);

const NamchiCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/NamchiCab")
);

const RavanglaCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/RavanglaCab")
);

const ZulukCab = lazy(() =>
  import("./components/SEO/CabServiceSikkim/ZulukCab")
);

const SikkimSightseeingTaxi = lazy(() =>
  import("./components/SEO/CabServiceSikkim/SikkimSightseeingTaxi")
);

/* ==================== ADMIN ==================== */

const Login = lazy(() =>
  import("./admin/Login/Login")
);

const AdminLayout = lazy(() =>
  import("./admin/AdminLayout/AdminLayout")
);

const Dashboard = lazy(() =>
  import("./admin/Dashboard/Dashboard")
);

const Bookings = lazy(() =>
  import("./admin/Bookings/Bookings")
);

const Contacts = lazy(() =>
  import("./admin/Contacts/Contacts")
);

const Reviews = lazy(() =>
  import("./admin/Reviews/Reviews")
);

/* ==================== AUTH GUARD ==================== */

const Guard = ({ children }) => {
  return localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

/* ==================== LOADING FALLBACK ==================== */

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "40vh",
        display: "grid",
        placeItems: "center",
        fontSize: "1rem",
      }}
      aria-live="polite"
    >
      Loading...
    </div>
  );
}

/* ==================== APP ==================== */

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* ==================== PUBLIC WEBSITE ==================== */}

        <Route element={<SiteLayout />}>

          {/* Main Pages */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/testimonials"
            element={<Testimonials />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ==================== SEO PAGES ==================== */}

          <Route
            path="/cab-service-in-sikkim"
            element={<CabServiceSikkim />}
          />

          <Route
            path="/cab-service-in-gangtok"
            element={<CabServiceGangtok />}
          />

          <Route
            path="/sikkim-cab-booking"
            element={<SikkimCabBooking />}
          />

          <Route
            path="/sikkim-tour-cab"
            element={<SikkimTourCab />}
          />

          <Route
            path="/gangtok-sightseeing-cab"
            element={<GangtokSightseeingCab />}
          />

          <Route
            path="/njp-to-gangtok-cab"
            element={<NJPToGangtokCab />}
          />

          <Route
            path="/bagdogra-to-gangtok-cab"
            element={<BagdograToGangtokCab />}
          />

          <Route
            path="/siliguri-to-gangtok-cab"
            element={<SiliguriToGangtokCab />}
          />

          <Route
            path="/gangtok-to-njp-cab"
            element={<GangtokToNJPCab />}
          />

          <Route
            path="/gangtok-to-bagdogra-cab"
            element={<GangtokToBagdograCab />}
          />

          <Route
            path="/north-sikkim-cab"
            element={<NorthSikkimCab />}
          />

          <Route
            path="/nathula-pass-cab"
            element={<NathulaPassCab />}
          />

          <Route
            path="/tsomgo-lake-cab"
            element={<TsomgoLakeCab />}
          />

          <Route
            path="/lachung-cab"
            element={<LachungCab />}
          />

          <Route
            path="/yumthang-valley-cab"
            element={<YumthangValleyCab />}
          />

          <Route
            path="/pelling-cab"
            element={<PellingCab />}
          />

          <Route
            path="/namchi-cab"
            element={<NamchiCab />}
          />

          <Route
            path="/ravangla-cab"
            element={<RavanglaCab />}
          />

          <Route
            path="/zuluk-cab"
            element={<ZulukCab />}
          />

          <Route
            path="/sikkim-sightseeing-taxi"
            element={<SikkimSightseeingTaxi />}
          />

        </Route>

        {/* ==================== ADMIN LOGIN ==================== */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* ==================== ADMIN PANEL ==================== */}

        <Route
          path="/admin"
          element={
            <Guard>
              <AdminLayout />
            </Guard>
          }
        >

          <Route
            index
            element={
              <Navigate
                to="dashboard"
                replace
              />
            }
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="bookings"
            element={<Bookings />}
          />

          <Route
            path="contacts"
            element={<Contacts />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

        </Route>

        {/* ==================== UNKNOWN ROUTE ==================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </Suspense>
  );
}