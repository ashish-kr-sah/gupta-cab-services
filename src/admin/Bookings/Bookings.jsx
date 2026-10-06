import DataTable from "../../components/DataTable/DataTable";
import useAdminList from "../../hooks/useAdminList";
import "./Bookings.css";

const COLUMNS = [["Name", "fullName"], ["Phone", "phone"], ["Email", "email"], ["Pickup", "pickup"], ["Destination", "destination"], ["Cab", "cabType"], ["Persons", "persons"], ["Message", "message"]];

export default function Bookings() {
  const [rows, remove] = useAdminList("/booking");
  return (<><h1 className="admin-title">Bookings</h1><DataTable rows={rows} columns={COLUMNS} onDelete={remove} /></>);
}
