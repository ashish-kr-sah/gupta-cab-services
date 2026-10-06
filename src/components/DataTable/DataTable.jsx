import "./DataTable.css";

const fmt = (d) => new Date(d).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

// Admin ki table: columns = [["Heading", "fieldName"], ...]
export default function DataTable({ rows, columns, onDelete }) {
  if (rows === null) return <div className="empty">Loading…</div>;
  if (!rows.length) return <div className="empty">No records yet</div>;
  return (
    <div className="tbl">
      <table>
        <thead><tr><th>#</th>{columns.map(([h]) => <th key={h}>{h}</th>)}<th>Date</th><th></th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.id}>
              <td>{i + 1}</td>
              {columns.map(([h, key]) => <td key={h}>{r[key] || "-"}</td>)}
              <td>{fmt(r.createdAt)}</td>
              <td><button className="del" onClick={() => onDelete(r.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
