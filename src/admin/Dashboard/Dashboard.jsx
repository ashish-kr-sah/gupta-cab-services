import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DataTable from "../../components/DataTable/DataTable";
import { api, auth } from "../../api";
import "./Dashboard.css";

const EMPTY = { totalBookings: 0, totalContacts: 0, recentBookings: [], recentContacts: [] };
const noDelete = () => toast.info("Delete ke liye Bookings / Contacts page kholein");

export default function Dashboard() {
  const [d, setD] = useState(null);
  useEffect(() => {
    api.get("/admin/dashboard", auth())
      .then((r) => setD(r.data.dashboard))
      .catch(() => { toast.error("Dashboard load nahi hua"); setD(EMPTY); });
  }, []);

  if (!d) return <div className="empty">Loading…</div>;
  return (
    <>
      <h1 className="admin-title">Dashboard</h1>
      <div className="dash-stats">
        <div className="stat"><b>{d.totalBookings}</b><span>Total Bookings</span></div>
        <div className="stat"><b>{d.totalContacts}</b><span>Total Contacts</span></div>
      </div>
      <h3 className="dash-h">Recent Bookings</h3>
      <DataTable rows={d.recentBookings} onDelete={noDelete} columns={[["Name", "fullName"], ["Phone", "phone"], ["Destination", "destination"], ["Cab", "cabType"]]} />
      <h3 className="dash-h">Recent Contacts</h3>
      <DataTable rows={d.recentContacts} onDelete={noDelete} columns={[["Name", "fullName"], ["Phone", "phone"], ["Subject", "subject"]]} />
    </>
  );
}
