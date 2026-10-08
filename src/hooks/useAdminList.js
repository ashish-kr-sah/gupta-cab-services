import { useEffect, useState } from "react";
import { api, auth } from "../api";

export default function useAdminList(path) {
  const [rows, setRows] = useState([]);

  // ==================================================
  // ADMIN API PATH
  // ==================================================
  // Reviews ke liye admin endpoint force karenge.
  // Bookings / Contacts apne existing endpoints use karenge.

  const adminPath =
    path === "/reviews"
      ? "/admin/reviews"
      : path;

  // ==================================================
  // LOAD DATA
  // ==================================================

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        console.log(
          "📥 Admin GET:",
          `/api${adminPath}`
        );

        const response = await api.get(
          adminPath,
          auth()
        );

        if (!active) {
          return;
        }

        setRows(
          response?.data?.data || []
        );
      } catch (error) {
        console.error(
          "❌ Admin list error:",
          error
        );

        if (active) {
          setRows([]);
        }
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [adminPath]);

  // ==================================================
  // DELETE DATA
  // ==================================================

  const remove = async (id) => {
    try {
      if (!id) {
        alert("Invalid item ID.");
        return;
      }

      const deletePath =
        `${adminPath}/${id}`;

      console.log(
        "🗑️ Admin DELETE:",
        `/api${deletePath}`
      );

      await api.delete(
        deletePath,
        auth()
      );

      // Remove from table immediately
      setRows((previousRows) =>
        previousRows.filter(
          (item) => item.id !== id
        )
      );

      console.log(
        "✅ Item deleted successfully:",
        id
      );
    } catch (error) {
      console.error(
        "❌ Admin delete error:",
        error
      );

      alert(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to delete item."
      );
    }
  };

  return [rows, remove];
}