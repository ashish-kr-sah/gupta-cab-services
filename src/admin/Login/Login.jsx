import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaLock } from "react-icons/fa";
import { api } from "../../api";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [f, setF] = useState({
    email: "",
    password: "",
  });

  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);

    try {
      const { data } = await api.post("/admin/login", f);

      localStorage.setItem("token", data.token);
      localStorage.setItem("admin", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Server/Database connect nahi ho raha"
      );
    }

    setBusy(false);
  };

  return (
    <div className="login">
      <form className="form" onSubmit={submit}>
        <img src="/images/logo.png" alt="logo" />

        <h2>Admin Login</h2>

        <div className="login-fields">
          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={f.email}
              onChange={(e) =>
                setF({
                  ...f,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={f.password}
              onChange={(e) =>
                setF({
                  ...f,
                  password: e.target.value,
                })
              }
              required
            />
          </div>

          <button
            className="btn btn-gold"
            disabled={busy}
          >
            <FaLock />
            {busy ? "Signing in…" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}