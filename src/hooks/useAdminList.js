import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api, auth } from "../api";

// Admin ke bookings / contacts list + delete ka common logic
export default function useAdminList(path) {
  const navigate = useNavigate();
  const [rows, setRows] = useState(null);

  const load = async () => {
    try {
      const { data } = await api.get(path, auth());
      setRows(data.data);
    } catch (e) {
      if (e.response?.status === 401) { localStorage.removeItem("token"); navigate("/admin/login"); }
      else { toast.error("Data load nahi hua – DB connection check karein"); setRows([]); }
    }
  };
  useEffect(() => { load(); }, []);

  const remove = async (id) => {
    if (!confirm("Delete karna hai?")) return;
    try { await api.delete(`${path}/${id}`, auth()); toast.success("Deleted"); load(); }
    catch { toast.error("Delete failed"); }
  };
  return [rows, remove];
}
