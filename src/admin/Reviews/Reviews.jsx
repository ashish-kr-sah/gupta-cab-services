import DataTable from "../../components/DataTable/DataTable";
import useAdminList from "../../hooks/useAdminList";

const COLUMNS = [
  ["Name", "name"],
  ["Phone", "phone"],
  ["Rating", "rating"],
  ["Review", "review"],
];

export default function Reviews() {
  const [rows, remove] = useAdminList("/admin/reviews");

  return (
    <>
      <h1 className="admin-title">Reviews</h1>

      <DataTable
        rows={rows}
        columns={COLUMNS}
        onDelete={remove}
      />
    </>
  );
}