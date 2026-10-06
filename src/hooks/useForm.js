import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../api";

// Booking & Contact dono forms ke liye common logic
export default function useForm(initial, path, successMsg) {
  const [values, setValues] = useState(initial);
  const [busy, setBusy] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\D/g, "").slice(-10))) return toast.error("Valid 10 digit phone number daalein");
    setBusy(true);
    try {
      await api.post(path, values);
      toast.success(successMsg);
      setValues(initial);
    } catch (err) {
      toast.error(err.response?.data?.message || "Server se connect nahi ho pa raha. Thodi der baad try karein ya call karein.");
    }
    setBusy(false);
  };
  return { values, onChange, onSubmit, busy };
}
