import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SiteLayout from "./components/SiteLayout/SiteLayout";
import DataTable from "./components/DataTable/DataTable";
import useAdminList from "./hooks/useAdminList";
/* ==================== PUBLIC PAGES ==================== */

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const Testimonials = lazy(() => import("./pages/Testimonials/Testimonials"));
const Booking = lazy(() => import("./pages/Booking/Booking"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

/* ==================== SEO PAGES ==================== */

const seo = (name) =>
  lazy(() => import(`./components/SEO/CabServiceSikkim/${name}.jsx`));

const CabServiceSikkim = seo("CabServiceSikkim");
const CabServiceGangtok = seo("CabServiceGangtok");
const SikkimCabBooking = seo("SikkimCabBooking");
const SikkimTourCab = seo("SikkimTourCab");
const GangtokSightseeingCab = seo("GangtokSightseeingCab");
const NJPToGangtokCab = seo("NJPToGangtokCab");
const BagdograToGangtokCab = seo("BagdograToGangtokCab");
const SiliguriToGangtokCab = seo("SiliguriToGangtokCab");
const GangtokToNJPCab = seo("GangtokToNJPCab");
const GangtokToBagdograCab = seo("GangtokToBagdograCab");
const NorthSikkimCab = seo("NorthSikkimCab");
const NathulaPassCab = seo("NathulaPassCab");
const TsomgoLakeCab = seo("TsomgoLakeCab");
const LachungCab = seo("LachungCab");
const YumthangValleyCab = seo("YumthangValleyCab");
const PellingCab = seo("PellingCab");
const NamchiCab = seo("NamchiCab");
const RavanglaCab = seo("RavanglaCab");
const ZulukCab = seo("ZulukCab");
const SikkimSightseeingTaxi = seo("SikkimSightseeingTaxi");

const seoRoutes = [
  ["/cab-service-in-sikkim", CabServiceSikkim],
  ["/cab-service-in-gangtok", CabServiceGangtok],
  ["/sikkim-cab-booking", SikkimCabBooking],
  ["/sikkim-tour-cab", SikkimTourCab],
  ["/gangtok-sightseeing-cab", GangtokSightseeingCab],
  ["/njp-to-gangtok-cab", NJPToGangtokCab],
  ["/bagdogra-to-gangtok-cab", BagdograToGangtokCab],
  ["/siliguri-to-gangtok-cab", SiliguriToGangtokCab],
  ["/gangtok-to-njp-cab", GangtokToNJPCab],
  ["/gangtok-to-bagdogra-cab", GangtokToBagdograCab],
  ["/north-sikkim-cab", NorthSikkimCab],
  ["/nathula-pass-cab", NathulaPassCab],
  ["/tsomgo-lake-cab", TsomgoLakeCab],
  ["/lachung-cab", LachungCab],
  ["/yumthang-valley-cab", YumthangValleyCab],
  ["/pelling-cab", PellingCab],
  ["/namchi-cab", NamchiCab],
  ["/ravangla-cab", RavanglaCab],
  ["/zuluk-cab", ZulukCab],
  ["/sikkim-sightseeing-taxi", SikkimSightseeingTaxi],
];

/* ==================== ADMIN ==================== */

const Login = lazy(() => import("./admin/Login/Login"));
const AdminLayout = lazy(() => import("./admin/AdminLayout/AdminLayout"));
const Dashboard = lazy(() => import("./admin/Dashboard/Dashboard"));
const Bookings = lazy(() => import("./admin/Bookings/Bookings"));
const Contacts = lazy(() => import("./admin/Contacts/Contacts"));
function Reviews() {
  const [rows, remove] = useAdminList("/admin/reviews");

  return (
    <>
      <h1 className="admin-title">Reviews</h1>

      <DataTable
        rows={rows}
        columns={[
          ["Name", "name"],
          ["Phone", "phone"],
          ["Rating", "rating"],
          ["Review", "review"],
        ]}
        onDelete={remove}
      />
    </>
  );
}

/* ==================== AUTH GUARD ==================== */

const Guard = ({ children }) =>
  localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/admin/login" replace />
  );

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
        {/* PUBLIC WEBSITE */}
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />

          {/* SEO PAGES */}
          {seoRoutes.map(([path, Page]) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<Login />} />

        {/* ADMIN PANEL */}
        <Route
          path="/admin"
          element={
            <Guard>
              <AdminLayout />
            </Guard>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* UNKNOWN ROUTE */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}