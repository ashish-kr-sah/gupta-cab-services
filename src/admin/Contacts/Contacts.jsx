import DataTable from "../../components/DataTable/DataTable";
import useAdminList from "../../hooks/useAdminList";

const COLUMNS = [["Name", "fullName"], ["Phone", "phone"], ["Email", "email"], ["Subject", "subject"], ["Message", "message"]];

export default function Contacts() {
  const [rows, remove] = useAdminList("/contact");
  return (<><h1 className="admin-title">Contacts</h1><DataTable rows={rows} columns={COLUMNS} onDelete={remove} /></>);
}
